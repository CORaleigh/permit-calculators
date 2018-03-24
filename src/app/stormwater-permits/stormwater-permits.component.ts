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
  ngOnInit(): void {
    window.setTimeout(() => {
       this.dialog.open(SplashDialogComponent);
 
     }, 500);
   }

}
