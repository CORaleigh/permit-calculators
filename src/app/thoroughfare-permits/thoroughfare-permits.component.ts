import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-thoroughfare-permits',
  templateUrl: './thoroughfare-permits.component.html',
  styleUrls: ['./thoroughfare-permits.component.css']
})
export class ThoroughfarePermitsComponent implements OnInit {
  total:number = 0;
  fees: Array<any> = [
    {landuse: "Residential", selected:[], fees: [
      {landuse: "Single Family", measure: "unit", measureLabel: "# of units", selected: false, thresholds: [
        {min: 0, max: 999, per: 1364, label: "# of units less than 1,000 sq. ft."},
        {min: 1000, max: 1999, per: 1620, label: "# of units 1,000 – 1,999 sq. ft."},
        {min: 2000, max: 2999, per: 1798, label: "# of units 2,000 – 2,999 sq. ft."},
        {min: 3000, max: 3999, per: 1934, label: "# of units 3,000 – 3,999 sq. ft."},
        {min: 4000, max: 4999, per: 2042, label: "# of units 4,000 – 4,999 sq. ft."},
        {min: 5000, max: null, per: 2184, label: "# of units greater than 5,000 sq. ft."}
      ]},
      {landuse: "Multi-Family", per: 1202, measure: "unit", measureLabel: "# of units", selected: false},
      {landuse: "Group Living, Social Service", per: 504, measure: "unit", measureLabel: "# of units", selected: false}
    ], records: [{}]},
    {landuse: "Commercial", selected:[], fees: [
      {landuse: "Hotel/Motel", per: 1715, measure: "unit", measureLabel: "Rooms", selected: false},
      {landuse: "Retail/Commercial", per: 2918, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "Retail uses that include the sale of motor fuels to public", per: 6483, measure:"unit", measureLabel: "Fueling Stations", selected: false},
      {landuse: "Office", per: 2225, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "Industrial/manufacturing/agricultural", per: 1407, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "Warehouse", per: 809, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "Mini warehousing", per: 408, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false}
    ], records: [{}]},
    {landuse: "Public & Institutional", selected:[], fees: [
      {landuse: "Churches/Synagogues", per: 1122, measure: "unit", measureLabel: "Square Feet"},
      {landuse: "Elementary, Middle and High Schools", per: 409, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "College/University", per: 4478, measure:"unit", measureLabel: "Gross Floor Area (sq. ft.)"},
      {landuse: "Daycare facilities", per: 3097, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)"},
      {landuse: "Hospitals/medical care facilities", per: 3553, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "Nursing Home/Group Quarters", per: 999, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)"},
      {landuse: "Cemetery", per: 771, measure: "area", measureLabel: "Acres", selected: false},
      {landuse: "Passenger Transportation facility", per: 809, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
      {landuse: "Emergency Service facility", per: 809, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false}
    ], records: [{}]} ,
    {landuse: "Recreational", selected:[], fees: [
      {landuse: "Golf course", per: 5822, measure: "unit", measureLabel: "Holes", selected: false},
      {landuse: "Public parks", per: 2918, measure: "unit", measureLabel: "Acres", selected: false},
      {landuse: "Stadiums/coliseums/race tracks", per: 101, measure: "unit", measureLabel: "Seats", selected: false},
      {landuse: "General recreation/all other", per: 273, measure: "unit", measureLabel: "Parking Spaces", selected: false}
    ], records: [{}]}
  ];

  addRecord (fee) {
    fee.records.push({});
  }

  calculateTotal() {
    this.total = 0;
    this.fees.forEach(fee => {
      fee.records.forEach(record => {
        if (record.total) {
          this.total += record.total;

        }
      });
    });   
  }
  calculateValue(record) {
    if (record.landuse.thresholds) {
      record.total = 0;
      record.landuse.thresholds.forEach(threshold => {
        if (threshold.value) {
          
          record.total += threshold.value * threshold.per;
        }
      });
    } else if (record.landuse.measure){
      if (record.landuse.measure === 'area') {
        record.total = record.value/1000 * record.landuse.per;
      } else {
        record.total = record.value * record.landuse.per;
      }
      
    }

    this.calculateTotal()
  }

  recordValueChanged(record,value) {
 
    record.value = value;
    this.calculateValue(record);
  }
  thresholdValueChanged(threshold, record, value) {
 
    threshold.value = value;
    this.calculateValue(record);
  }

  landuseChanged(fee, index) {
    debugger
    fee.selected.push(fee.fees.indexOf(index));
  }

  constructor() { }

  ngOnInit() {
  }

}
