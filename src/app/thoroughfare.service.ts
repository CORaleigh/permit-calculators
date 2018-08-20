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
        new Threshold(0, 999, 1417,"# of units less than 1,000 sq. ft.", null, null),
        new Threshold(1000, 1999, 1683,"# of units 1,000 – 1,999 sq. ft.", null, null),
        new Threshold(2000, 2999, 1867,"# of units 2,000 – 2,999 sq. ft.", null, null),
        new Threshold(3000, 3999, 2008,"# of units 3,000 – 3,999 sq. ft.", null, null),
        new Threshold(4000, 4999, 2121,"# of units 4,000 – 4,999 sq. ft.", null, null),
        new Threshold(5000, null, 2269,"# of units greater than 5,000 sq. ft.", null, null)
      ]),
      new Landuse("Residential", "Multi-Family", "unit", "# of units", false, null, null, 1248),
      new Landuse("Residential", "Group Living, Social Service", "unit", "# of units", false, null, null, 524)
    ]),
    new TFareCategory("Commercial", [
      new Landuse("Commercial", "Hotel/Motel", "unit", "Rooms", false, null, null, 1781),
      new Landuse("Commercial", "Retail/Commercial", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3031),
      new Landuse("Commercial", "Retail uses that include the sale of motor fuels to public", "unit", "Fueling Stations", false, null, null, 6733),
      new Landuse("Commercial", "Office", "area", "Gross Floor Area (sq. ft.)", false, null, null, 2311),
      new Landuse("Commercial", "Industrial/manufacturing/agricultural", "area", "Gross Floor Area (sq. ft.)", false, null, null, 1461),
      new Landuse("Commercial", "Warehouse", "area", "Gross Floor Area (sq. ft.)", false, null, null, 840),
      new Landuse("Commercial", "Mini warehousing", "area", "Gross Floor Area (sq. ft.)", false, null, null, 424)
    ]),
    new TFareCategory("Public & Institutional", [
      new Landuse("Public & Institutional", "Churches/Synagogues", "area", "Square Feet", false, null, null, 1166),
      new Landuse("Public & Institutional", "Elementary, Middle and High Schools", "area", "Gross Floor Area (sq. ft.)", false, null, null, 425),
      new Landuse("Public & Institutional", "College/University", "area", "Gross Floor Area (sq. ft.)", false, null, null, 4651),
      new Landuse("Public & Institutional", "Daycare facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3217),
      new Landuse("Public & Institutional", "Hospitals/medical care facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3690),
      new Landuse("Public & Institutional", "Nursing Home/Group Quarters", "area", "Gross Floor Area (sq. ft.)", false, null, null, 1038),
      new Landuse("Public & Institutional", "Cemetery", "unit", "Acres", false, null, null, 801),
      new Landuse("Public & Institutional", "Passenger Transportation facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 840),
      new Landuse("Public & Institutional", "Emergency Service facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 840)
    ]),     
    new TFareCategory("Recreational", [
      new Landuse("Recreational", "Golf course", "unit", "Holes", false, null, null, 6046),
      new Landuse("Recreational", "Public parks", "unit", "Acres", false, null, null, 272),
      new Landuse("Recreational", "Stadiums/coliseums/race tracks", "unit", "Seats", false, null, null, 105),
      new Landuse("Recreational", "General recreation/all other", "unit", "Parking Spaces", false, null, null, 284)
    ]),    
  ];
  total:number = 0;
}
