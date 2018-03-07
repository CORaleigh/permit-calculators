import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stormwater-permits',
  templateUrl: './stormwater-permits.component.html',
  styleUrls: ['./stormwater-permits.component.css']
})
export class StormwaterPermitsComponent implements OnInit {

  constructor() { }
  squareFeet: number =  0;
  ngOnInit() {
  }

}
