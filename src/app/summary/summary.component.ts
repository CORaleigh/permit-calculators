import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ThoroughfareService } from '../thoroughfare.service';
import { StormwaterService } from '../stormwater.service';
import { BuildingService } from '../building.service';
import { OpenspaceService } from '../openspace.service';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(public thoroughfare:ThoroughfareService, public stormwater: StormwaterService, public calculationService: CalculationService, public openspace: OpenspaceService, public sharedService: SharedService) { 

  }
  fees:Array<any> = [];
  ngOnInit() {
  }

  checkThoroughfareCategories (index):boolean {
    let show = false;
    this.thoroughfare.categories[index].landuses.forEach(landuse => {
      if (landuse.total) {
        show = true;
      }
    });
    return show;
  }

  showStormwater():boolean {
    let show = false;
    this.stormwater.fees.forEach(fee => {
      if (fee.total) {
        show = true;
      }
    });
    this.stormwater.checkBoxes.forEach(fee => {
      if (fee.total) {
        show = true;
      }
    });  
    return  show;  
  }

}
