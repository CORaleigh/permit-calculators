import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { RightofwayService } from '../rightofway.service';

@Component({
  selector: 'app-rightofway-map',
  templateUrl: './rightofway-map.component.html',
  styleUrls: ['./rightofway-map.component.css']
})
export class RightofwayMapComponent implements OnInit {

  constructor(private service:RightofwayService) { }
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  async initializeMap() {
    try {
      const [WebMap, 
        MapView,
        Search,
        Legend,
        DistanceMeasurement2D,
        Expand
      ] = await loadModules([
        'esri/WebMap',
        'esri/views/MapView',
        'esri/widgets/Search',
        'esri/widgets/Legend',
        "esri/widgets/DistanceMeasurement2D",
        'esri/widgets/Expand'
      ]);


      let webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "80e1683103a4487ba54c52ac1044d9aa"
        }
      });
      let mapView:esri.MapView = new MapView({
        map: webmap,
        container: this.mapViewEl.nativeElement
      });
      let search:esri.widgetsSearch = new Search({view: mapView, popupEnabled: false});

      mapView.ui.add(search, 'top-right');
      mapView.ui.remove('zoom');

      let legend:esri.Legend = new Legend({view:mapView});
      const expand:esri.Expand = new Expand({
        view: mapView,
        expandTooltip: 'Legend',
        expandIconClass: "esri-icon-layer-list",
        expanded: true,
        content: legend,
        group: 'top-left',
        mode: 'floating'
        });      
      mapView.ui.add(expand, 'top-left');
      let measure:esri.DistanceMeasurement2D = new DistanceMeasurement2D({view:mapView, unitOptions:['us-feet']});
      measure.viewModel.mode = 'geodesic';
      measure.viewModel.unit = 'us-feet';
      const measureExpand:esri.Expand = new Expand({
        view: mapView,
        expandTooltip: 'Measure',
        expandIconClass: "esri-icon-polyline",
        expanded: false,
        content: measure,
        group: 'top-left',
        mode: 'floating'
      });      
      mapView.ui.add(measureExpand, 'top-left');

      measureExpand.watch('expanded', expanded => {
        if (!expanded) {
          measure.viewModel.clearMeasurement();
        }
      });
      measure.watch('viewModel.state', state => {
        
        if (state === 'measuring') {
          measureExpand.collapse();
        }
        if (state === 'measured') {
          measureExpand.expand();
          let matches = this.service.selections.filter(selection => {
            return selection.value.class;
          });
          matches[matches.length -1].lf = parseInt(measure.viewModel.measurementLabel.replace(',', '').replace(' ft', ''));
        }
      });

      mapView.when(() => {
        search.on('search-complete', event => {
          let handle = mapView.watch('updating', updating => {
            if (!updating) {
              mapView.hitTest(mapView.toScreen(event.results[0].results[0].feature.geometry)).then(response => {
                if (response.results.length) {
                  let matches = response.results.filter(result => {
                    return result.graphic.layer.title === 'Downtown Zone';
                  });
                  debugger
                  this.service.downtown.next(matches.length > 0);
                } else {
                  this.service.downtown.next(false);
                }
                handle.remove();
              });
            }
          });

        });
      });
      
    } catch (error) {
      console.log('We have an error: ' + error);
    }

  }


  ngOnInit() {
    this.initializeMap();
  }

}
