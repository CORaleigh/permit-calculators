import { Component, OnInit, HostListener, ViewChild, ElementRef  } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySelectionList as MatSelectionList } from '@angular/material/legacy-list';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component'
import {SharedService} from '../shared.service';
import {StormwaterService} from '../stormwater.service';
import {StormwaterMapComponent} from '../stormwater-map/stormwater-map.component';
import {
  loadModules

} from 'esri-loader';

@Component({
  selector: 'app-stormwater-permits',
  templateUrl: './stormwater-permits.component.html',
  styleUrls: ['./stormwater-permits.component.css']
})
export class StormwaterPermitsComponent implements OnInit {
  @ViewChild('mapView') private mapViewEl: ElementRef;
  constructor(public dialog:MatDialog, public sharedService:SharedService, public stormwaterService:StormwaterService, public snackbar:MatSnackBar) { 
    
  }

  cost: number =  0;


  checkLocation(geometry, webmap, query, layerName, fields) : Promise<boolean> {
    let layer = webmap.allLayers.find(function (layer) {
      return layer.title === layerName;
    });
    if (layer) {
      query.geometry = geometry;
      query.returnGeometry = false;
      query.outFields = fields;
      return layer.queryFeatures(query).then(results => {
        return Promise.resolve(results.features.length > 0);
      });
    }      
  }

  ngOnInit() {
    return loadModules(['esri/widgets/Search', 'esri/WebMap', 'esri/rest/support/Query', 'esri/views/MapView'])
    .then(([EsriSearch, WebMap, Query, MapView]) => {
      let webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "6184901db24d4ac48eaa70ea721e5eb2"
        }
      });
      let mapView = new MapView({
        map: webmap,
        container: this.mapViewEl.nativeElement

      });
      mapView.when(() => {     

        let layer = webmap.allLayers.find(function (layer) {
          return layer.title === "Property";
        });      

        let sources = [
          {
            layer: layer,
            searchFields: ['SITE_ADDRESS', 'PIN_NUM'],
            displayField: "SITE_ADDRESS",
            exactMatch: false,
            outFields: ['SITE_ADDRESS'],
            name: "Property",
            placeholder: "Search by site address or PIN",
            maxResults: 6,
            maxSuggestions: 6,
            suggestionsEnabled: true,
            minSuggestCharacters: 2,
            popupEnabled: false,
            resultGraphicEnabled: true,
            resultSymbol: {
              type: "simple-fill",
              outline: {
                  width: 4,
                  color: [255, 255, 0, 1]
              },
              color: [255, 255, 255, 0]
          }
          }
        ];
        
        let searchWidget = new EsriSearch({
          container: "searchView",
          view: mapView,
          includeDefaultSources: false, 
          sources: sources

        });        


        searchWidget.on('search-complete', event => {
          let floodCheck = this.stormwaterService.checkBoxes.find(item => {return item.name === 'Flood Permit Required?'});  
          let waterCheck = this.stormwaterService.checkBoxes.find(item => {return item.name === 'Watershed Permit Required?'}); 
          let flood = false;
          let watershed = false; 
          this.checkLocation(event.results[0].results[0].feature.geometry, webmap, new Query(), 'Floodplain', ['*']).then(selected => {
            this.checkboxChanged({option: {selected: selected}}, floodCheck);  
            flood = selected;          
            this.checkLocation(event.results[0].results[0].feature.geometry, webmap, new Query(), 'Swift Creek Watershed Protection Overlay District', ['OLAY_DECODE']).then(selected => {
              if (selected) {
                this.checkboxChanged({option: {selected: selected}}, waterCheck);
                watershed = true;
                this.showSnackBar(flood, watershed);
              } else {
                this.checkLocation(event.results[0].results[0].feature.geometry, webmap, new Query(), 'Falls Watershed Protection Overlay District', ['OLAY_DECODE']).then(selected => { 
                  if (selected) {
                    this.checkboxChanged({option: {selected: selected}}, waterCheck);      
                    watershed = true;
                    this.showSnackBar(flood, watershed);                   
                  } else {
                    this.checkLocation(event.results[0].results[0].feature.geometry, webmap, new Query(), 'Urban Watershed Protection Overlay District', ['OLAY_DECODE']).then(selected => { 
                      if (selected) {
                        this.checkboxChanged({option: {selected: selected}}, waterCheck);     
                        watershed = true;
                        this.showSnackBar(flood, watershed)                         
                      } else {
                        this.checkboxChanged({option: {selected: selected}}, waterCheck);      
                        watershed = false;
                        this.showSnackBar(flood, watershed)                        
                      }
                    });
                  }
                });
              }
            });
          });
        });        
      }); 
    });
  }

  showSnackBar(flood, watershed) {
    let message = "";
    if (flood && watershed) {
      message = "This property falls within both a floodplain and watershed";
    } else if (flood && !watershed) {
      message = "This property falls within a floodplain";
    } else if (!flood && watershed) {
      message = "This property falls within a watershed"
    } else {
      message = "This property does not fall within a floodplain or watershed";
    }
    this.snackbar.open(message, 'close', {duration: 5000})
  }
   calculateTotal(event, fee) {
    if (event) {
      if (event.target.value) {
        fee.cost = event.target.value;

      } else {
        fee.cost = null;
      }
    }

    if (fee.cost && fee.selected && fee.multiplier && !fee.subfees) {
      if (fee.units === 'acres') {
        fee.total = fee.multiplier * parseFloat((parseFloat(fee.cost).toFixed(1)));
      } else if (fee.multiplier) {
        fee.total = fee.multiplier * fee.cost;        
      }
      if (fee.minimum && fee.cost != "" && fee.cost > 0) {
        if (fee.total < fee.minimum) {
          fee.total = fee.minimum;
        }
      }
 
    } else if (fee.cost && fee.selected && fee.subfees) {
        fee.total = 0
        fee.subfees.forEach(subfee => {
          if (fee.units === 'acres') {
            subfee.total = subfee.multiplier * parseFloat((parseFloat(fee.cost).toFixed(1)));
          } else if (subfee.multiplier) {
            subfee.total = fee.multiplier * fee.cost;        
          }       
          fee.total += subfee.total;
        });
      }        
    else {
      if (fee.minimum && fee.cost) {
        fee.total = fee.minimum;
      } else {
        fee.total = 0;
      } 
      if (fee.subfees) {
        fee.subfees.forEach(subfee => {
          subfee.total = 0;
        });       
      }
    }



     this.getTotalFees();
   }
   checkboxChanged(event, fee) {
    fee.selected = event.option.selected;
    fee.total = (event.option.selected) ? fee.trueValue : fee.falseValue;
    this.getTotalFees();
   }

   listCheckBoxChanged(event, fee) {
     fee.selected = event.options[0].selected;
     if (!event.options[0].selected) {
       fee.total = 0;
     }
    this.calculateTotal(null, fee);
   }

   getTotalFees () {
     this.stormwaterService.total = 0;
     this.stormwaterService.fees.forEach(fee => {
      if (fee.selected) {
        this.stormwaterService.total += fee.total;
      }
     });
     this.stormwaterService.checkBoxes.forEach(fee => {
       if (fee.selected) {
         this.stormwaterService.total += fee.total;
       }
     });
     this.sharedService.emitChange({total: this.stormwaterService.total, calculator: 'stormwater'});
   }

    

    showMap(event) {
      event.stopPropagation()
      this.dialog.open(StormwaterMapComponent);
    }


}
