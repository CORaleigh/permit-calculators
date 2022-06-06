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
        new Threshold(0, 999, 1513,"# of units less than 1,000 sq. ft.", null, null),
        new Threshold(1000, 1999, 1902,"# of units 1,000 – 1,999 sq. ft.", null, null),
        new Threshold(2000, 2999, 2110,"# of units 2,000 – 2,999 sq. ft.", null, null),
        new Threshold(3000, 3999, 2270,"# of units 3,000 – 3,999 sq. ft.", null, null),
        new Threshold(4000, 4999, 2397,"# of units 4,000 – 4,999 sq. ft.", null, null),
        new Threshold(5000, null, 2564,"# of units greater than 5,000 sq. ft.", null, null)
      ]),
      new Landuse("Residential", "Multi-Family", "unit", "# of units", false, null, null, 1411),
      new Landuse("Residential", "Group Living, Social Service", "unit", "# of units", false, null, null, 592)
    ]),
    new TFareCategory("Commercial", [
      new Landuse("Commercial", "Hotel/Motel", "unit", "Rooms", false, null, null, 2013),
      new Landuse("Commercial", "Retail/Commercial", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3425.72),
      new Landuse("Commercial", "Retail uses that include the sale of motor fuels to public", "unit", "Fueling Stations", false, null, null, 7609.18),
      new Landuse("Commercial", "Office", "area", "Gross Floor Area (sq. ft.)", false, null, null, 2611.88),
      new Landuse("Commercial", "Industrial/manufacturing/agricultural", "area", "Gross Floor Area (sq. ft.)", false, null, null, 1650.95),
      new Landuse("Commercial", "Warehouse", "area", "Gross Floor Area (sq. ft.)", false, null, null, 949.30),
      new Landuse("Commercial", "Mini warehousing", "area", "Gross Floor Area (sq. ft.)", false, null, null, 479.41)
    ]),
    new TFareCategory("Public & Institutional", [
      new Landuse("Public & Institutional", "Churches/Synagogues", "area", "Square Feet", false, null, null, 1317.58),
      new Landuse("Public & Institutional", "Elementary, Middle and High Schools", "area", "Gross Floor Area (sq. ft.)", false, null, null, 480.47),
      new Landuse("Public & Institutional", "College/University", "area", "Gross Floor Area (sq. ft.)", false, null, null, 5256.58),
      new Landuse("Public & Institutional", "Daycare facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3635.26),
      new Landuse("Public & Institutional", "Hospitals/medical care facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 4170.76),
      new Landuse("Public & Institutional", "Nursing Home/Group Quarters", "area", "Gross Floor Area (sq. ft.)", false, null, null, 1172.60),
      new Landuse("Public & Institutional", "Cemetery", "unit", "Acres", false, null, null, 905.90),
      new Landuse("Public & Institutional", "Passenger Transportation facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 949.30),
      new Landuse("Public & Institutional", "Emergency Service facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 949.30)
    ]),     
    new TFareCategory("Recreational", [
      new Landuse("Recreational", "Golf course", "unit", "Holes", false, null, null, 6833.44),
      new Landuse("Recreational", "Public parks", "unit", "Acres", false, null, null, 307.97),
      new Landuse("Recreational", "Stadiums/coliseums/race tracks", "unit", "Seats", false, null, null, 118.53),
      new Landuse("Recreational", "General recreation/all other", "unit", "Parking Spaces", false, null, null, 320.66)
    ]),    
  ];
  total:number = 0;
}
