import { Injectable } from '@angular/core';

@Injectable()
export class StormwaterService {

  constructor() { }
  total: number = 0;
  lastRoute: string;
  summary:boolean;
  fees: Array<any> = [
    {
      name: 'Stormwater Facility Replacement Fee',
      label: 'Construction cost of all stormwater devices',
      units: 'dollars',
      multiplier: 0.24,
      total: 0,
      surety: {
        name: 'Stormwater Control Measure (SCM) Surety',
        multiplier: 1.25,
        url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/StormwaterBMPSurety.html'
      },      
      url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/StormwaterReplacementFund.html',
      selected: false
    },
    {
      name: 'Land Disturbing Fees',
      label: 'Disturbed acres (rounded to nearest 1/10)',
      units: 'acres',
      total: 0,
      url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
      selected: false,
      surety: {
        name: 'Sediment and Erosion Control Surety',
        multiplier: 1000,
        url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/SedimentErosionControlSurety.html'
      },
      subfees: [
        {      
          name: 'Land Disturbing Plan Review Fees',
          multiplier: 145,
          total: 0
        },        
        {      
          name: 'Land Disturbing Permit Fees',
          multiplier: 292,
          total: 0
        }           
      ]
    },     
    // {
    //   name: 'Land Disturbing Permit Fees',
    //   units: 'Disturbed acres',
    //   multiplier: 292,
    //   total: 0,
    //   url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',      
    //   selected: false
    // },    
    {
      name: 'Stormwater Control Permit',
      label: 'Property or project acres (rounded to nearest 1/10)',
      units: 'acres',
      multiplier: 201,
      minimum: 198,
      url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',      
      total: 0
    },  
  ];

  checkBoxes:Array<any> = [   
  {
    name: 'Flood Permit Required?',
    falseValue: 0,
    trueValue: 201,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0,
    map: true
  },      
  {
    name: 'Flood Study Required?',
    falseValue: 0,
    trueValue: 1216,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  },    
  {
    name: 'Watercourse Buffer Permit Required?',
    trueValue: 182,
    falseValue: 0,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  },     
  {
    name: 'Watershed Permit Required?',
    trueValue: 182,
    falseValue: 0,
    url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',    
    total: 0
  }   ];
}
