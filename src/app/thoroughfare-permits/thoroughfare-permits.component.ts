import { Component, OnInit, HostListener } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import {SharedService} from '../shared.service';
import {ThoroughfareService} from '../thoroughfare.service';
import {ThoroughfarePipe} from '../thoroughfare.pipe';
import {TFareCategory} from '../tFareCategory';
import { TFareRecord } from '../tFareRecord';
import { Landuse } from '../landuse';
import { Threshold } from '../Threshold';
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
    landuse.selected = event.selected;
  }

  valueChanged(landuse:Landuse, threshold:Threshold, event) {
    if (!threshold) {
      landuse.total = event * landuse.per;
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
