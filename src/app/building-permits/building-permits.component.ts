import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component';
@Component({
  selector: 'app-building-permits',
  templateUrl: './building-permits.component.html',
  styleUrls: ['./building-permits.component.css']
})
export class BuildingPermitsComponent implements OnInit {
  isResidential: boolean = false;
  title = 'Building and Trade Permit Fee Calculator';
  handleIsResidentialUpdated(isResidential) {
    this.isResidential = isResidential;
  }
  constructor(public dialog: MatDialog) {};
  ngOnInit(): void {
   window.setTimeout(() => {
      this.dialog.open(SplashDialogComponent);

    }, 500);
  }

}
