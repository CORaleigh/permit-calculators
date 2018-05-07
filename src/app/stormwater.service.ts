import { Injectable } from '@angular/core';

@Injectable()
export class StormwaterService {

  constructor() { }
  fees: Array<any> = [
    {
      name: 'Stormwater Device Fee',
      units: 'Construction Cost',
      multiplier: 0.24,
      total: 0,
      url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/StormwaterReplacementFund.html',
      selected: false,
      note: '*combined total of all stormwater devices'
    },
    {
      name: 'Land Disturbing Plan Review Fees',
      units: 'Acres',
      multiplier: 142,
      total: 0,
      url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
      selected: false
    },     
    {
      name: 'Land Disturbing Permit Fees',
      units: 'Acres',
      multiplier: 286,
      total: 0,
      url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',      
      selected: false
    },    
    {
      name: 'Stormwater Control Permit',
      units: 'Acres',
      multiplier: 197,
      minimum: 194,
      url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',      
      total: 0
    },  
  ];

  checkBoxes:Array<any> = [   
  {
    name: 'Flood Permit Required?',
    falseValue: 0,
    trueValue: 197,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  },      
  {
    name: 'Flood Study Required?',
    falseValue: 0,
    trueValue: 1191,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  },    
  {
    name: 'Watercourse Buffer Permit Required?',
    trueValue: 176,
    falseValue: 0,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  },     
  {
    name: 'Watershed Permit Required?',
    trueValue: 176,
    falseValue: 0,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  }   ];
}