import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {StormwaterService} from '../stormwater.service';
import {SharedService} from '../shared.service'
import {
  loadModules
} from 'esri-loader';
@Component({
  selector: 'app-stormwater-map',
  templateUrl: './stormwater-map.component.html',
  styleUrls: ['./stormwater-map.component.css']
})
export class StormwaterMapComponent implements OnInit {

  constructor(public stormwaterService:StormwaterService, public sharedService:SharedService) { }
  @ViewChild('mapViewNode', null) private mapViewEl: ElementRef;

  public mapView: any;
  public search: any;
  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    return loadModules(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/tasks/support/Query', "esri/geometry/geometryEngine", "esri/layers/GraphicsLayer", "esri/Graphic"])
    .then(([WebMap, MapView, Search, FeatureLayer, Query, geometryEngine, GraphicsLayer, Graphic]) => {

      let webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "6184901db24d4ac48eaa70ea721e5eb2"
        }
      });
      console.log(webmap)
      this.mapView = new MapView({
        map: webmap,
        container: this.mapViewEl.nativeElement
      });
      
      this.mapView.when(() => {
        
        let layer = this.mapView.map.allLayers.find(function (layer) {
          return layer.title === "Property";
        });
        this.mapView.map.reorder(layer, 0)
        let query = new Query();
        query.outSpatialReference = this.mapView.spatialReference;
        query.returnGeometry = true;
        query.outFields = ['ZONE_NUMBER'];
        query.where = "1=1";
        // layer.queryFeatures(query).then(results => {
        //   let geoms = [];
        //   let ts = {
        //     type: "text", // autocasts as new TextSymbol()
        //     color: "white",
        //     haloColor: "black",
        //     haloSize: "1px",
        //     xoffset: 3,
        //     yoffset: 3,
        //     text: '',
        //     font: { // autocast as new Font()
        //       size: 12,
        //       family: "sans-serif",
        //       weight: "bolder"
        //     }
        //   };
          // let g = null;
          // results.features.forEach(feature => {
          //   geoms.push(feature.geometry);
          //   ts.text = feature.attributes.ZONE_NUMBER;
          //   g = new Graphic();
          //   g.symbol = ts;
          //   g.geometry = feature.geometry.centroid;
          //   textLabels.graphics.add(g);
          // });
          // let union = geometryEngine.union(geoms);
          
          // this.search.sources.items[0].filter = {
          //   geometry: union
          // };
       // });
        let sources = [
          {
            featureLayer: layer,
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
        this.search.sources = sources;
      });
      this.mapView.on('click', event => {
        this.search.search(event.mapPoint);
      });
      let textLabels = new GraphicsLayer();
      this.mapView.map.add(textLabels);



      this.search = new Search({
        view: this.mapView
      });





      this.search.on('search-complete', event => {
        //this.located.emit(event.results[0]);

        let layer = this.mapView.map.allLayers.find(function (layer) {
          return layer.title === "Floodplain";
        });

        if (layer) {
          let query = new Query();
          query.geometry = event.results[0].results[0].feature.geometry;
          query.returnGeometry = false;
          query.outFields = ['ZONE_IMAPS'];
          layer.queryFeatures(query).then(results => {
            // prints the array of result graphics to the console
            let item = this.stormwaterService.checkBoxes.find(item => {return item.name === 'Flood Permit Required?'});              
            if (results.features.length > 0) {
              item.selected = true;
              this.checkboxChanged({selected: true}, item);
            } else {
              item.selected = false;
              this.checkboxChanged({selected: false}, item);
            }
          });
        }


      });
      this.mapView.ui.add(this.search, {
        position: 'top-left',
        index: 0
      });
      

    });
  }  

  checkboxChanged(event, fee) {
    fee.selected = event.selected;
    fee.total = (event.selected) ? fee.trueValue : fee.falseValue;
    this.getTotalFees();
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

}
