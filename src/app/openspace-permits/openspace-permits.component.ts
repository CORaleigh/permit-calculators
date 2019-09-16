import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {SharedService} from '../shared.service';
import {OpenspaceService} from '../openspace.service';
import {OpenspaceDialogComponent} from '../openspace-dialog/openspace-dialog.component';
import {
  loadModules
} from 'esri-loader';

@Component({
  selector: 'app-openspace-permits',
  templateUrl: './openspace-permits.component.html',
  styleUrls: ['./openspace-permits.component.css']
})
export class OpenspacePermitsComponent implements OnInit {
  public mapView: any;
  public search: any;
  selectedZone:any;
  @ViewChild('mapViewNode', null) private mapViewEl: ElementRef;

  zones: Array < any > = [{
      zone: 1,
      single: 1527,
      multi: 1107
    },
    {
      zone: 2,
      single: 1527,
      multi: 1107
    },
    {
      zone: 3,
      single: 1285,
      multi: 934
    },
    {
      zone: 4,
      single: 1290,
      multi: 948
    }


  ];
  constructor(private sharedService:SharedService, public openspace:OpenspaceService, public dialog:MatDialog) {}


  
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
   localStorage.setItem('openspace', JSON.stringify(this.openspace));
  }  
  showDefinitions(type) {
    
    this.dialog.open(OpenspaceDialogComponent, {data:{type:type}});
  }
  ngOnInit() {
    window.setTimeout(() => {
      if (this.openspace.zone) {
        this.selectedZone = this.openspace.zone.zone;
      }
    }, 500);
    if (localStorage.getItem('openspace')) {
    
      this.openspace = JSON.parse(localStorage.getItem('openspace'));
    }

    return loadModules(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/tasks/support/Query', "esri/geometry/geometryEngine", "esri/layers/GraphicsLayer", "esri/Graphic"])
      .then(([WebMap, MapView, Search, FeatureLayer, Query, geometryEngine, GraphicsLayer, Graphic]) => {

        let webmap = new WebMap({
          portalItem: { // autocasts as new PortalItem()
            id: "47a467200a2a41a8b1bacef6a30b86ae"
          }
        });
        this.mapView = new MapView({
          map: webmap,
          container: this.mapViewEl.nativeElement
        });

        this.mapView.when(() => {
          
          let layer = this.mapView.map.allLayers.find(function (layer) {
            return layer.title === "Open Space Facility Fee Zones";
          });
          this.mapView.map.reorder(layer, 0)
          let query = new Query();
          query.outSpatialReference = this.mapView.spatialReference;
          query.returnGeometry = true;
          query.outFields = ['ZONE_NUMBER'];
          query.where = "1=1";
          layer.queryFeatures(query).then(results => {
            let geoms = [];
            let ts = {
              type: "text", // autocasts as new TextSymbol()
              color: "white",
              haloColor: "black",
              haloSize: "1px",
              xoffset: 3,
              yoffset: 3,
              text: '',
              font: { // autocast as new Font()
                size: 12,
                family: "sans-serif",
                weight: "bolder"
              }
            };
            let g = null;
            results.features.forEach(feature => {
              geoms.push(feature.geometry);
              ts.text = feature.attributes.ZONE_NUMBER;
              g = new Graphic();
              g.symbol = ts;
              g.geometry = feature.geometry.centroid;
              textLabels.graphics.add(g);
            });
            let union = geometryEngine.union(geoms);
            
            this.search.sources.items[0].filter = {
              geometry: union
            };
          });
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
            return layer.title === "Open Space Facility Fee Zones";
          });

          if (layer) {
            let query = new Query();
            query.geometry = event.results[0].results[0].feature.geometry;
            query.returnGeometry = false;
            query.outFields = ['ZONE_NUMBER'];
            layer.queryFeatures(query).then(results => {
              // prints the array of result graphics to the console
              if (results.features.length > 0) {
                let zoneNum = results.features[0].attributes.ZONE_NUMBER;
                this.zones.forEach(zone => {
                  if (zone.zone === zoneNum) {
                    this.openspace.zone = zone;
                    this.selectedZone = zone.zone;
                  }
                });

              } else {
                this.openspace.zone = null;
                this.selectedZone = null;
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

  zoneChanged(event) {
    let i = this.zones.filter(zone => {
      return zone.zone === event.value;
    });
    if (i.length > 0) {
      this.openspace.zone = i[0];
    }
  }

}

