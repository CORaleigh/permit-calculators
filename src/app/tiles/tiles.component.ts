import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  breakpoint:Number = 0;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private router: Router, private sharedService: SharedService) { 
    this.matIconRegistry.addSvgIcon(
      "house",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/house.svg")
    );      
    this.matIconRegistry.addSvgIcon(
      "water",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/water.svg")
    );      
    this.matIconRegistry.addSvgIcon(
      "parks",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/parks.svg")
    );      
    this.matIconRegistry.addSvgIcon(
      "transportation",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/transportation.svg")
    );        
  }

  ngOnInit() {
    if (window.innerWidth < 500) {
      this.breakpoint  = 1;
    } else if (window.innerWidth >= 500 && window.innerWidth < 800) {
      this.breakpoint  = 1;
    } else if (window.innerWidth >= 800 && window.innerWidth < 1200) {
      this.breakpoint  = 2;
    } else {
      this.breakpoint = 4;
    }
  }

  onResize(event) {
    if (event.target.innerWidth < 500) {
      this.breakpoint  = 1;
    } else if (event.target.innerWidth >= 500 && event.target.innerWidth <= 800) {
      this.breakpoint  = 1;
    } else if (event.target.innerWidth >= 800 && event.target.innerWidth <= 1200) {
      this.breakpoint  = 2;
    } else {
      this.breakpoint = 4;
    }    
  }
  
  go(route) {
    
    this.sharedService.selectedCalculator = route;
    this.sharedService.lastRoute = route;
    this.sharedService.summary = false;
    this.router.navigate([route]);

  }

}
