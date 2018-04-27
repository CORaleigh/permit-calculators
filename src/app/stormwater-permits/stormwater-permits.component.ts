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
      url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/StormwaterReplacementFund.html',
      selected: false
    },
    {
      name: 'Land Disturbing Plan Review Fees',
      units: 'Acres',
      multiplier: 142,
      total: 0,
      selected: false
    },     
    {
      name: 'Land Disturbing Permit Fees',
      units: 'Acres',
      multiplier: 286,
      total: 0,
      selected: false
    },    
    {
      name: 'Stormwater Control Permit',
      units: 'Acres',
      multiplier: 197,
      minimum: 194,
      total: 0
    },  
  ];

  checkBoxes:Array<any> = [   
  {
    name: 'Flood Permit Required?',
    falseValue: 0,
    trueValue: 197,
    total: 0
  },      
  {
    name: 'Flood Study Required?',
    falseValue: 0,
    trueValue: 1191,
    total: 0
  },    
  {
    name: 'Watercourse Buffer Permit Required?',
    trueValue: 176,
    falseValue: 0,
    total: 0
  },     
  {
    name: 'Watershed Permit Required?',
    trueValue: 176,
    falseValue: 0,
    total: 0
  }   ];


  ngOnInit(): void {
    window.setTimeout(() => {
       this.dialog.open(SplashDialogComponent);
 
     }, 500);
     this.getTotalFees();
   }

   calculateTotal(event, fee) {
    if (event) {
      if (event.target.value) {
        fee.cost = parseFloat(event.target.value);
      } else {
        fee.cost = null;
      }
    }

    if (fee.cost && fee.selected) {
      if (fee.units === 'Acres') {
        fee.total = fee.multiplier * fee.cost.toFixed(1);
      } else if (fee.multiplier) {
        fee.total = fee.multiplier * fee.cost;        
      }
      if (fee.minimum && fee.cost != "" && fee.cost > 0) {
        if (fee.total < fee.minimum) {
          fee.total = fee.minimum;
        }
      }
    } else {
      if (fee.minimum && fee.cost) {
        fee.total = fee.minimum;
      } else {
        fee.total = 0;
      }
    }

     this.getTotalFees();
   }
   checkboxChanged(event, fee) {
     fee.selected = event.selected;
    fee.total = (event.selected) ? fee.trueValue : fee.falseValue;
    this.getTotalFees();
   }

   listCheckBoxChanged(event, fee, help) {
     fee.selected = event.selected;
     debugger;
     if (!event.selected) {
       fee.total = 0;
     }
    this.calculateTotal(null, fee);
   }

   getTotalFees () {
     this.total = 0;
     this.fees.forEach(fee => {
      if (fee.selected) {
        this.total += fee.total;
      }
     });
     this.checkBoxes.forEach(fee => {
       if (fee.selected) {
         this.total += fee.total;
       }
     });
   }



}
