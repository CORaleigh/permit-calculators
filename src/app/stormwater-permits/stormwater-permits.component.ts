import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component'
@Component({
  selector: 'app-stormwater-permits',
  templateUrl: './stormwater-permits.component.html',
  styleUrls: ['./stormwater-permits.component.css']
})
export class StormwaterPermitsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  cost: number =  0;
  total: number = 0;
  fees: Array<any> = [
    {
      name: 'Stormwater Device Fee',
      units: 'Construction Cost',
      multiplier: 0.24,
      total: 0,
      minimum: -1,
      url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/StormwaterReplacementFund.html'
    },
    {
      name: 'Land Disturbing Permit Fees',
      units: 'Acres',
      multiplier: 286,
      total: 0,
      minimum: -1     
    },    
    {
      name: 'Land Disturbing Plan Review Fees',
      units: 'Acres',
      multiplier: 142,
      total: 0,
      minimum: -1     
    }, 
    {
      name: 'Stormwater Control Permit',
      units: 'Acres',
      multiplier: 197,
      minimum: 194,
      total: 194
    },   
    {
      name: 'Flood Study Required?',
      checkbox: true,
      falseValue: 197,
      trueValue: 1191,
      total: 197
    },    
    {
      name: 'Watercourse Buffer Permit Required?',
      checkbox: true,
      trueValue: 176,
      falseValue: 0,
      total: 0
    },     
    {
      name: 'Watershed Permit Required?',
      checkbox: true,
      trueValue: 176,
      falseValue: 0,
      total: 0
    }     
          
  ];
  ngOnInit(): void {
    window.setTimeout(() => {
       this.dialog.open(SplashDialogComponent);
 
     }, 500);
     this.getTotalFees();
   }

   calculateTotal(fee) {
    if (fee.cost) {
      if (fee.units === 'Acres') {
        fee.total = fee.multiplier * fee.cost.toFixed(1);
      }
      if (fee.minimum) {
        if (fee.total < fee.minimum) {
          fee.total = fee.minimum;
        }
      }
    } else {
      if (fee.minimum) {
        fee.total = fee.minimum;
      } else {
        fee.total = 0;
      }
    }

     this.getTotalFees();
   }
   checkboxChanged(event, fee) {
    fee.total = (event.checked) ? fee.trueValue : fee.falseValue;
    this.getTotalFees();
   }

   getTotalFees () {
     this.total = 0;
     this.fees.forEach(fee => {
       this.total += fee.total;
     });
   }



}
