import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  calculators: Array<any> = [
    {
    label: "Building Permits",
    route: "/building"
    }, {
      label: "Stormwater Device Permits",
      route: "/stormwater"
    }, {
      label: "Open Space Facility Fees",
      route: "/openspace"
    }, {
      label: "Thoroughfare Facility Fees",
      route: "/thoroughfare"
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
