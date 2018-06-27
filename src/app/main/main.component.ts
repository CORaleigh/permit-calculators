import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {SharedService} from '../shared.service';

import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  calculators: Array<any> = [
    {
    label: "Building Permit Fees",
    route: "building"
    }, {
      label: "Stormwater Fees",
      route: "stormwater"
    }
    , {
      label: "Open Space Fees",
      route: "openspace"
    }, {
      label: "Thoroughfare Fees",
      route: "thoroughfare"
    }

  ];
  total:Number = 0;
  fees:Array<any> = [];
  selectedCalculator:string = null;
  constructor(private router: Router, public dialog:MatDialog, private sharedService: SharedService) { 
    if (localStorage.getItem('total')) {
      this
    }
    sharedService.changeEmitted$.subscribe(
      fee => {
        let matches = this.fees.filter(f => {
          return fee.calculator === f.calculator;
        });
        if (matches.length === 0) {
          this.fees.push(fee);
        } else {
          matches[0].total = fee.total;
        }
        this.getTotal();
      });
  }

  getTotal() {
    this.total = 0;
    this.fees.forEach(fee => {
      this.total += fee.total;
    });
  }

  // @HostListener('window:unload', ['$event'])
  // unloadHandler(event) {
  //  localStorage.setItem('feeTotal', JSON.stringify(this.fees));
  // }  

  ngOnInit() {
    window.setTimeout(() => {
      this.dialog.open(SplashDialogComponent);
      this.selectedCalculator = this.router.url.replace('/', '');
      // if (localStorage.getItem('feeTotal')) {
      //   this.fees = JSON.parse(localStorage.getItem('feeTotal'));
      //   this.getTotal();
      // }

    }, 500);

  }

  go(event) {
    
    this.selectedCalculator = event.value;
    this.router.navigate([event.value]);

  }

  onTotal(event) {
    this.getTotal();
  }

}
