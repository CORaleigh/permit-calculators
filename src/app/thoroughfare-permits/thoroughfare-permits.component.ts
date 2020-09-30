import { Component, OnInit, HostListener } from '@angular/core';
import {SharedService} from '../shared.service';
import {ThoroughfareService} from '../thoroughfare.service';
import { Landuse } from '../landuse';
import { Threshold } from '../threshold';
@Component({
  selector: 'app-thoroughfare-permits',
  templateUrl: './thoroughfare-permits.component.html',
  styleUrls: ['./thoroughfare-permits.component.css']
})
export class ThoroughfarePermitsComponent implements OnInit {
  total:number = 0;



  constructor(private sharedService:SharedService, public thoroughfare: ThoroughfareService) { }


  ngOnInit() {

  }

  landuseSelected(event, landuse:Landuse) {
    landuse.selected = event.option.selected;
    if (!event.option.selected) {
      landuse.total = null;
    } else if (!landuse.thresholds) {
      landuse.total = landuse.value * landuse.per;
      if (landuse.measure === 'area') {
        landuse.total = landuse.value/1000 * landuse.per;
      }
    } else {
      this.totalThresholds(landuse);
    }
    this.getTotal();
  }

  valueChanged(landuse:Landuse, threshold:Threshold, event) {
    if (!threshold) {
      landuse.total = event * landuse.per;
      if (landuse.measure === 'area') {
        landuse.total = landuse.value/1000 * landuse.per;
      }          
    } else {
      threshold.total = event * threshold.per;
  
      this.totalThresholds(landuse);
    }
    this.getTotal();
  }

  totalThresholds(landuse:Landuse) {
    landuse.total = 0;
    landuse.thresholds.forEach(t => {
      if (t.total) {
        landuse.total += t.total;
      }
    });
  }

  getTotal() {
    this.thoroughfare.total = 0;
    this.thoroughfare.categories.forEach(category => {
      category.landuses.forEach(landuse => {
        this.thoroughfare.total += landuse.total;
      });
    });
    this.sharedService.emitChange({total: this.thoroughfare.total, calculator: 'thoroughfare'});

  }


}
