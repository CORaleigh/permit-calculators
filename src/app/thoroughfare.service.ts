import { Injectable } from '@angular/core';
import { Landuse} from './landuse';
import { Threshold } from './threshold';
import { TFareRecord} from './tFareRecord';
import { TFareCategory } from './tFareCategory';
@Injectable()
export class ThoroughfareService {

  constructor() { }
  categories:Array<any> = [
    new TFareCategory("Residential", [
      new Landuse("Residential", "Single Family", "unit", "# of units", false, null, null, null, [
        new Threshold(0, 999, 1364,"# of units less than 1,000 sq. ft.", null, null),
        new Threshold(1000, 1999, 1620,"# of units 1,000 – 1,999 sq. ft.", null, null),
        new Threshold(2000, 2999, 1798,"# of units 2,000 – 2,999 sq. ft.", null, null),
        new Threshold(3000, 3999, 1934,"# of units 3,000 – 3,999 sq. ft.", null, null),
        new Threshold(4000, 4999, 2042,"# of units 4,000 – 4,999 sq. ft.", null, null),
        new Threshold(5000, null, 2184,"# of units greater than 5,000 sq. ft.", null, null)
      ]),
      new Landuse("Residential", "Multi-Family", "unit", "# of units", false, null, null, 1202),
      new Landuse("Residential", "Group Living, Social Service", "unit", "# of units", false, null, null, 504)
    ]),
    new TFareCategory("Commercial", [
      new Landuse("Commercial", "Hotel/Motel", "unit", "Rooms", false, null, null, 1715),
      new Landuse("Commercial", "Retail/Commercial", "area", "Gross Floor Area (sq. ft.)", false, null, null, 2918),
      new Landuse("Commercial", "Retail uses that include the sale of motor fuels to public", "unit", "Fueling Stations", false, null, null, 6483),
      new Landuse("Commercial", "Office", "area", "Gross Floor Area (sq. ft.)", false, null, null, 2225),
      new Landuse("Commercial", "Industrial/manufacturing/agricultural", "area", "Gross Floor Area (sq. ft.)", false, null, null, 1407),
      new Landuse("Commercial", "Warehouse", "area", "Gross Floor Area (sq. ft.)", false, null, null, 809),
      new Landuse("Commercial", "Mini warehousing", "area", "Gross Floor Area (sq. ft.)", false, null, null, 408)
    ]),
    new TFareCategory("Public & Institutional", [
      new Landuse("Public & Institutional", "Churches/Synagogues", "unit", "Square Feet", false, null, null, 1122),
      new Landuse("Public & Institutional", "Elementary, Middle and High Schools", "area", "Gross Floor Area (sq. ft.)", false, null, null, 409),
      new Landuse("Public & Institutional", "College/University", "unit", "Gross Floor Area (sq. ft.)", false, null, null, 4478),
      new Landuse("Public & Institutional", "Daycare facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3097),
      new Landuse("Public & Institutional", "Hospitals/medical care facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3553),
      new Landuse("Public & Institutional", "Nursing Home/Group Quarters", "area", "Gross Floor Area (sq. ft.)", false, null, null, 999),
      new Landuse("Public & Institutional", "Cemetery", "area", "Acres", false, null, null, 771),
      new Landuse("Public & Institutional", "Passenger Transportation facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 809),
      new Landuse("Public & Institutional", "Emergency Service facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 809)
    ]),     
    new TFareCategory("Recreational", [
      new Landuse("Recreational", "Golf course", "unit", "Holes", false, null, null, 5822),
      new Landuse("Recreational", "Public parks", "unit", "Acres", false, null, null, 2918),
      new Landuse("Recreational", "Stadiums/coliseums/race tracks", "unit", "Seats", false, null, null, 101),
      new Landuse("Recreational", "General recreation/all other", "unit", "Parking Spaces", false, null, null, 273)
    ]),    
  ];
 
  // thresholds:Array<Threshold> = [
  //   new Threshold(0, 999, 1364,"# of units less than 1,000 sq. ft.", null, null),
  //   new Threshold(1000, 1999, 1620,"# of units 1,000 – 1,999 sq. ft.", null, null),
  //   new Threshold(2000, 2999, 1798,"# of units 2,000 – 2,999 sq. ft.", null, null),
  //   new Threshold(3000, 3999, 1934,"# of units 3,000 – 3,999 sq. ft.", null, null),
  //   new Threshold(4000, 4999, 2042,"# of units 4,000 – 4,999 sq. ft.", null, null),
  //   new Threshold(5000, null, 2184,"# of units greater than 5,000 sq. ft.", null, null)
  // ];

  // landuses:Array<Landuse> = [
  //   new Landuse("Residential", "Single Family", "unit", "# of units", false, null, this.thresholds),
  //   new Landuse("Residential", "Multi-Family", "unit", "# of units", false, 1202),
  //   new Landuse("Residential", "Group Living, Social Service", "unit", "# of units", false, 504),
  //   new Landuse("Commercial", "Hotel/Motel", "unit", "Rooms", false, 1715),
  //   new Landuse("Commercial", "Retail/Commercial", "area", "Gross Floor Area (sq. ft.)", false, 2918),
  //   new Landuse("Commercial", "Retail uses that include the sale of motor fuels to public", "unit", "Fueling Stations", false, 6483),
  //   new Landuse("Commercial", "Office", "area", "Gross Floor Area (sq. ft.)", false, 2225),
  //   new Landuse("Commercial", "Industrial/manufacturing/agricultural", "area", "Gross Floor Area (sq. ft.)", false, 1407),
  //   new Landuse("Commercial", "Warehouse", "area", "Gross Floor Area (sq. ft.)", false, 809),
  //   new Landuse("Commercial", "Mini warehousing", "area", "Gross Floor Area (sq. ft.)", false, 408),
  //   new Landuse("Public & Institutional", "Churches/Synagogues", "unit", "Square Feet", false, 1122),
  //   new Landuse("Public & Institutional", "Elementary, Middle and High Schools", "area", "Gross Floor Area (sq. ft.)", false, 409),
  //   new Landuse("Public & Institutional", "College/University", "unit", "Gross Floor Area (sq. ft.)", false, 4478),
  //   new Landuse("Public & Institutional", "Daycare facilities", "area", "Gross Floor Area (sq. ft.)", false, 3097),
  //   new Landuse("Public & Institutional", "Hospitals/medical care facilities", "area", "Gross Floor Area (sq. ft.)", false, 3553),
  //   new Landuse("Public & Institutional", "Nursing Home/Group Quarters", "area", "Gross Floor Area (sq. ft.)", false, 999),
  //   new Landuse("Public & Institutional", "Cemetery", "area", "Acres", false, 771),
  //   new Landuse("Public & Institutional", "Passenger Transportation facility", "area", "Gross Floor Area (sq. ft.)", false, 809),
  //   new Landuse("Public & Institutional", "Emergency Service facility", "area", "Gross Floor Area (sq. ft.)", false, 809),
  //   new Landuse("Recreational", "Golf course", "unit", "Holes", false, 5822),
  //   new Landuse("Recreational", "Public parks", "unit", "Acres", false, 2918),
  //   new Landuse("Recreational", "Stadiums/coliseums/race tracks", "unit", "Seats", false, 101),
  //   new Landuse("Recreational", "General recreation/all other", "unit", "Parking Spaces", false, 273)];
  total:number = 0;
  // fees: Array<any> = [
  //   {landuse: "Residential", selected:[], fees: [
  //     {landuse: "Single Family", measure: "unit", measureLabel: "# of units", selected: false, thresholds: [
  //       {min: 0, max: 999, per: 1364, label: "# of units less than 1,000 sq. ft."},
  //       {min: 1000, max: 1999, per: 1620, label: "# of units 1,000 – 1,999 sq. ft."},
  //       {min: 2000, max: 2999, per: 1798, label: "# of units 2,000 – 2,999 sq. ft."},
  //       {min: 3000, max: 3999, per: 1934, label: "# of units 3,000 – 3,999 sq. ft."},
  //       {min: 4000, max: 4999, per: 2042, label: "# of units 4,000 – 4,999 sq. ft."},
  //       {min: 5000, max: null, per: 2184, label: "# of units greater than 5,000 sq. ft."}
  //     ]},
  //     {landuse: "Multi-Family", per: 1202, measure: "unit", measureLabel: "# of units", selected: false},
  //     {landuse: "Group Living, Social Service", per: 504, measure: "unit", measureLabel: "# of units", selected: false}
  //   ], records: [{}]},
  //   {landuse: "Commercial", selected:[], fees: [
  //     {landuse: "Hotel/Motel", per: 1715, measure: "unit", measureLabel: "Rooms", selected: false},
  //     {landuse: "Retail/Commercial", per: 2918, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "Retail uses that include the sale of motor fuels to public", per: 6483, measure:"unit", measureLabel: "Fueling Stations", selected: false},
  //     {landuse: "Office", per: 2225, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "Industrial/manufacturing/agricultural", per: 1407, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "Warehouse", per: 809, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "Mini warehousing", per: 408, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false}
  //   ], records: [{}]},
  //   {landuse: "Public & Institutional", selected:[], fees: [
  //     {landuse: "Churches/Synagogues", per: 1122, measure: "unit", measureLabel: "Square Feet"},
  //     {landuse: "Elementary, Middle and High Schools", per: 409, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "College/University", per: 4478, measure:"unit", measureLabel: "Gross Floor Area (sq. ft.)"},
  //     {landuse: "Daycare facilities", per: 3097, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)"},
  //     {landuse: "Hospitals/medical care facilities", per: 3553, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "Nursing Home/Group Quarters", per: 999, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)"},
  //     {landuse: "Cemetery", per: 771, measure: "area", measureLabel: "Acres", selected: false},
  //     {landuse: "Passenger Transportation facility", per: 809, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false},
  //     {landuse: "Emergency Service facility", per: 809, measure: "area", measureLabel: "Gross Floor Area (sq. ft.)", selected: false}
  //   ], records: [{}]} ,
  //   {landuse: "Recreational", selected:[], fees: [
  //     {landuse: "Golf course", per: 5822, measure: "unit", measureLabel: "Holes", selected: false},
  //     {landuse: "Public parks", per: 2918, measure: "unit", measureLabel: "Acres", selected: false},
  //     {landuse: "Stadiums/coliseums/race tracks", per: 101, measure: "unit", measureLabel: "Seats", selected: false},
  //     {landuse: "General recreation/all other", per: 273, measure: "unit", measureLabel: "Parking Spaces", selected: false}
  //   ], records: [{}]}
  // ];

}
