import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import {Router} from "@angular/router";
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {SharedService} from '../shared.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { SplashDialogComponent } from '../splash-dialog/splash-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title:string = '';
  total:number = 0;
  fees:Array<any> = [];
  phone: boolean = false;
  @ViewChild('logo') private logo: ElementRef;

 
  constructor(breakpointObserver: BreakpointObserver, private router: Router, public dialog:MatDialog, public sharedService: SharedService) { 
                
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.phone = result.matches;
    });
    this.sharedService.changeEmitted.subscribe(
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
    this.sharedService.total = this.total;
  }

  // @HostListener('window:unload', ['$event'])
  // unloadHandler(event) {
  //  localStorage.setItem('feeTotal', JSON.stringify(this.fees));
  // }  

  ngOnInit() {
    setTimeout(() => {
      this.dialog.open(SplashDialogComponent);
    })
        
    this.sharedService.selectedCalculator = window.location.pathname.replace('/permit-calculators/', '').replace('/', '');   
    this.title = 'Fee Calculator [BETA]';

    if (window.location.pathname.indexOf('/summary') > -1 ) {
      
      this.router.navigate(['']);
    }    

  }

 

  go(event) {
    this.sharedService.selectedCalculator = event.value;
    this.router.navigate([event.value]);
    this.sharedService.summary = false;
    this.sharedService.lastRoute = event.value;
  }

  goToSummary() {
    this.router.navigate(['summary']);
    this.sharedService.selectedCalculator = null;
    this.sharedService.summary = true;
  }
  goBack() {
    this.router.navigate([this.sharedService.lastRoute]);
    this.sharedService.selectedCalculator = this.sharedService.lastRoute;
    this.sharedService.summary = false;
  }
  onTotal(event) {
    this.getTotal();
  }

}
