import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-openspace-permits',
  templateUrl: './openspace-permits.component.html',
  styleUrls: ['./openspace-permits.component.css']
})
export class OpenspacePermitsComponent implements OnInit {
  public mapView: any;
  public search: any;

  @ViewChild('mapViewNode') private mapViewEl: ElementRef;  
  multi:number = null;
  single:number = null;
  zone:any = null;
  zones: Array<any> = [
    {zone: 1, single: 1385, multi: 1031},
    {zone: 2, single: 1424, multi: 1031},
    {zone: 3, single: 1165, multi: 847},
    {zone: 4, single: 1170, multi: 859}

    
  ];
  constructor() { }

  ngOnInit() {
    return loadModules(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/tasks/support/Query', "esri/geometry/geometryEngine"])
    .then(([WebMap, MapView, Search, FeatureLayer, Query, geometryEngine]) => {

      let webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "47a467200a2a41a8b1bacef6a30b86ae"
        }
      });
      this.mapView = new MapView({map: webmap, container: this.mapViewEl.nativeElement}); 
      this.mapView.when(() => {
        let layer = this.mapView.map.allLayers.find(function(layer) {
          return layer.title === "Open Space Facility Fee Zones";
         });
         layer.queryFeatures().then(results => {
           let geoms = [];
           results.features.forEach(feature => {
             geoms.push(feature.geometry);
           });
           let union = geometryEngine.union(geoms);
           debugger
           this.search.sources.items[0].filter = {geometry: union};
         });
      });
      this.mapView.on('click', event => {
        this.search.search(event.mapPoint);
      });




      this.search = new Search({
        view: this.mapView
      });


      this.search.on('search-complete', event => {
        //this.located.emit(event.results[0]);

        let layer = this.mapView.map.allLayers.find(function(layer) {
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
                  this.zone = zone;
                }
              });
              
            } else {
              this.zone = null;
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

}
