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
    return loadModules(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer'])
    .then(([WebMap, MapView, Search, FeatureLayer]) => {


      let webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "47a467200a2a41a8b1bacef6a30b86ae"
        }
      });
      this.mapView = new MapView({map: webmap, container: this.mapViewEl.nativeElement}); 
      this.mapView.on('click', event => {
        this.search.search(event.mapPoint);
      });




      this.search = new Search({
        view: this.mapView
      });
      this.search.on('search-complete', event => {
        //this.located.emit(event.results[0]);
        this.mapView.hitTest(this.mapView.toScreen(event.results[0].results[0].feature.geometry)).then(result => {
          if (result.results.length > 0) {
            let zoneNum = result.results[0].graphic.attributes.ZONE_NUMBER;
            this.zones.forEach(zone => {
              if (zone.zone === zoneNum) {
                this.zone = zone;
              }
            });
          }
        })
      }); 
      this.mapView.ui.add(this.search, {
        position: 'top-left',
        index: 0
      });

    });
  }

}
