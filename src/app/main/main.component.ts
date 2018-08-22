import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog, MatIconRegistry } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {SharedService} from '../shared.service';

import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  total:Number = 0;
  fees:Array<any> = [];



 
  constructor(private router: Router, public dialog:MatDialog, private sharedService: SharedService) { 
                
    // if (localStorage.getItem('total')) {
    //   this
    // }
    this.sharedService.changeEmitted$.subscribe(
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
      this.sharedService.selectedCalculator = this.router.url.replace('/', '');
      // if (localStorage.getItem('feeTotal')) {
      //   this.fees = JSON.parse(localStorage.getItem('feeTotal'));
      //   this.getTotal();
      // }

    }, 500);
  }


  go(event) {
    
    this.sharedService.selectedCalculator = event.value;
    this.router.navigate([event.value]);

  }

  goToSummary() {
    this.router.navigate(['summary']);
    this.sharedService.selectedCalculator = null;
  }

  onTotal(event) {
    this.getTotal();
  }

}
