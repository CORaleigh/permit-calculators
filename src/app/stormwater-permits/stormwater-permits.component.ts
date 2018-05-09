import { Component, OnInit, HostListener  } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component'
import {SharedService} from '../shared.service';
import {StormwaterService} from '../stormwater.service';
import {StormwaterMapComponent} from '../stormwater-map/stormwater-map.component';


@Component({
  selector: 'app-stormwater-permits',
  templateUrl: './stormwater-permits.component.html',
  styleUrls: ['./stormwater-permits.component.css']
})
export class StormwaterPermitsComponent implements OnInit {

  constructor(public dialog:MatDialog, public sharedService:SharedService, public stormwaterService:StormwaterService) { 
    
  }

  cost: number =  0;




  ngOnInit(): void {
    //this.loadMap();
    // window.setTimeout(() => {
    //    this.dialog.open(SplashDialogComponent);
 
    //  }, 500);
    // if (localStorage.getItem('stormwater')) {
    
    //   this.stormwaterService = JSON.parse(localStorage.getItem('stormwater'));
    // }
    //  this.getTotalFees();
   }
  //  @HostListener('window:unload', ['$event'])
  //  unloadHandler(event) {
  //   localStorage.setItem('stormwater', JSON.stringify(this.stormwaterService));

  //  }

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
     this.stormwaterService.total = 0;
     this.stormwaterService.fees.forEach(fee => {
      if (fee.selected) {
        this.stormwaterService.total += fee.total;
      }
     });
     this.stormwaterService.checkBoxes.forEach(fee => {
       if (fee.selected) {
         this.stormwaterService.total += fee.total;
       }
     });
     this.sharedService.emitChange({total: this.stormwaterService.total, calculator: 'stormwater'});
   }

    

    showMap(event) {
      event.stopPropagation()
      this.dialog.open(StormwaterMapComponent);
    }


}
