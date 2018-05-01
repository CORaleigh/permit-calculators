import { Injectable } from '@angular/core';
import { Iccbvd } from './iccbvd';
import { DevelopmentCard } from './development-card';
import { Tier } from './tier';
import { Calculations } from './calculations';


@Injectable()
export class BuildingService {
  selectedBuilding: any;
  selectedConstruction: any;
  scopes: Array<any>;
  iccbvd: any;
  selectedIccbvd: Iccbvd;
  constructions: Array<string>;
  valuation: number;
  cards: Array<DevelopmentCard>;
  cardIndex: number;
  tiers: Array<Tier>;
  calculations: Calculations;  
  constructor() { }

}
