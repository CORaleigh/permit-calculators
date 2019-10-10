import { Component, OnInit} from '@angular/core';
import { PublicutilityService } from '../publicutility.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-publicutility-permits',
  templateUrl: './publicutility-permits.component.html',
  styleUrls: ['./publicutility-permits.component.css']
})
export class PublicutilityPermitsComponent implements OnInit {
  constructor(public publicutility: PublicutilityService, public sharedService: SharedService) { }
  inRaleigh: boolean = true;
  pumpStation: boolean = false;
  infrastructureTotal: number = 0;
  capitalTotal: number = 0;
  ngOnInit() {
  }
  
  updateInfrastructureTotal() {
    this.infrastructureTotal = 0;
    this.publicutility.fees.forEach((group) => {
      group.fees.forEach((fee) => {
        this.infrastructureTotal += fee.fee;
      });
    });
    this.publicutility.total = this.capitalTotal + this.infrastructureTotal;
    this.sharedService.emitChange({ total: this.publicutility.total, calculator: 'publicutilties' });
    return this.infrastructureTotal;
  }
  updateFee(value: number, title: string, groupId: number) {

    let fee = this.publicutility.fees[groupId].fees.filter((f) => {
      return f.title === title;
    })[0];
    fee.fee = fee.unitCost * value;
    this.updateInfrastructureTotal();

  }
  pumpStationSelected(e) {
    if (e.checked) {
      this.updateFee(1, 'Pump Station Review', 0);
      this.updateFee(1, 'Pump Station Inspection', 1);
    } else {
      this.updateFee(0, 'Pump Station Review', 0);
      this.updateFee(0, 'Pump Station Inspection', 1);
    }
  }
  publicWaterChanged(e) {
    if (!this.inRaleigh) {
      this.updateFee(this.publicutility.linearFeet.publicWater, 'Water Inspection', 1);
    }
    this.updateFee((this.publicutility.linearFeet.publicWater > 0) ? 1 : 0, 'Public Water Review', 0)
  }
  publicSewerChanged(e) {
    if (!this.inRaleigh) {
      this.updateFee(this.publicutility.linearFeet.publicSewer + this.publicutility.linearFeet.privateSewer8 + this.publicutility.linearFeet.privateSewerCo + this.publicutility.linearFeet.privateSewerMh, 'Sewer Inspection', 1);
    }
    this.updateFee((this.publicutility.linearFeet.publicSewer > 0) ? 1 : 0, 'Public Sewer Review', 0)
  }
  privateSewerChanged(e) {
    if (!this.inRaleigh) {
      this.updateFee(this.publicutility.linearFeet.publicSewer + this.publicutility.linearFeet.privateSewer8 + this.publicutility.linearFeet.privateSewerCo + this.publicutility.linearFeet.privateSewerMh, 'Sewer Inspection', 1);
    }
    this.updateFee((this.publicutility.linearFeet.privateSewer8 + this.publicutility.linearFeet.privateSewerCo + this.publicutility.linearFeet.privateSewerMh > 0) ? 1 : 0, 'Private Sewer Review', 0);
    this.updateFee(this.publicutility.linearFeet.publicSewer + this.publicutility.linearFeet.privateSewer8 + this.publicutility.linearFeet.privateSewerMh, 'CCTV Inspection', 1);
  }
  publicReuseChanged(e) {
    if (!this.inRaleigh) {
      this.updateFee(this.publicutility.linearFeet.publicReuse, 'Reuse Inspection', 1);
    }
    this.updateFee((this.publicutility.linearFeet.publicReuse > 0) ? 1 : 0, 'Public Reuse Review', 0)
  }
  raleighChanged(e) {
    if (!this.inRaleigh) {
      this.updateFee(this.publicutility.linearFeet.publicWater, 'Water Inspection', 1);
      this.updateFee(this.publicutility.linearFeet.publicSewer + this.publicutility.linearFeet.privateSewer8 + this.publicutility.linearFeet.privateSewerCo + this.publicutility.linearFeet.privateSewerMh, 'Sewer Inspection', 1);
      this.updateFee(this.publicutility.linearFeet.publicReuse, 'Reuse Inspection', 1);
      this.stubsChanged(null);
    } else {
      this.updateFee(0, 'Water Inspection', 1);
      this.updateFee(0, 'Sewer Inspection', 1);
      this.updateFee(0, 'Reuse Inspection', 1);
      this.updateFee(0, 'Water Stubs', 2);
      this.updateFee(0, 'Sewer Stubs', 2);
      this.updateFee(0, 'Reuse Stubs', 2);
    }
  }
  stubsChanged(e) {
    this.updateFee(this.publicutility.stubQuantities.water, 'Water Stubs', 2);
    this.updateFee(this.publicutility.stubQuantities.sewer, 'Sewer Stubs', 2);
    this.updateFee(this.publicutility.stubQuantities.reuse, 'Reuse Stubs', 2);
  }
  sizeChanged(e, util) {
    util.fee = util.units * util.unitCost;
    this.updateCapitalTotal();
  }
  updateCapitalTotal() {
    this.capitalTotal = 0;
    this.publicutility.meterSizes.forEach((size) => {
      size.utilities.forEach((util) => {
        this.capitalTotal += util.fee;
      });
    });
    this.publicutility.total = this.capitalTotal + this.infrastructureTotal;
    this.sharedService.emitChange({ total: this.publicutility.total, calculator: 'publicutilties' });
    return this.capitalTotal;
  }
}
