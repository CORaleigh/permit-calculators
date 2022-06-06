import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicutilityService {

  constructor() { }
  total: number = 0;
  utilities: any[] = ['Water Only', 'Water and Sewer'];
  fees: any[] = [
    {title: 'Plan Review Fees', fees: [
      {
        title: 'Public Water Review',
        fee: 0,
        unitCost: 200.00
      },
      {
        title: 'Sewer Review',
        fee: 0,
        unitCost: 200.00
      },
      // {
      //   title: 'Private Sewer Review',
      //   fee: 0,
      //   unitCost: 200.00
      // },
      {
        title: 'Public Reuse Review',
        fee: 0,
        unitCost: 200.00
      },
      {
        title: 'Pump Station Review',
        fee: 0,
        unitCost: 300.00
      }
    ]},
    {title: 'Inspections Fees', fees: [
      {
        title: 'CCTV Inspection',
        fee: 0,
        unitCost: 1.10
      },
      {
        title: 'Pump Station Inspection',
        fee: 0,
        unitCost: 3000.00
      },
      {
        title: 'Water Inspection',
        fee: 0,
        unitCost: 1.59
      },
      {
        title: 'Sewer Inspection',
        fee: 0,
        unitCost: 1.59
      },
      {
        title: 'Reuse Inspection',
        fee: 0,
        unitCost: 1.59
      }
    ]}    
,
{title: 'Stub Fees', fees: [
  {
    title: 'Water Stubs',
    fee: 0,
    unitCost: 102.66
  },
  {
    title: 'Sewer Stubs',
    fee: 0,
    unitCost: 102.66
  },
  {
    title: 'Reuse Stubs',
    fee: 0,
    unitCost: 102.66
  }  
]}                                  
  ];
  linearFeet: any = {
    publicWater: null,
    publicSewer: null,
    privateSewer8: null,
    privateSewerCo: null,
    privateSewerMh: null,
    publicReuse: null
  }
  stubQuantities: any = {
    water: null,
    sewer: null,
    reuse: null
  }

  meterSizes: any[] = [
    {size: '5/8"',
      units: null,
      selected: false,
      utilities: [
        {
          type: 'water',
          units: null,
          unitCost: 1447.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 2223.00,
          fee: 0
        }  
      ]
    },
    {size: '1"',
      units: null,
      selected: false,
      utilities: [
        {
          type: 'water',
          units: null,
          unitCost: 3618.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 5558.00,
          fee: 0
        }  
      ]
    },
    {size: '1-1/2"',
      units: null,
      selected: false,
      utilities: [
        {
          type: 'water',
          units: null,
          unitCost: 7235.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 11115.00,
          fee: 0
        }  
      ]
    },
    {size: '2"',
      units: null,
      selected: false,
      utilities: [
        {
          type: 'water',
          units: null,
          unitCost: 11576.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 17784.00,
          fee: 0
        }  
      ]
    },
    {size: '4"',
      units: null,
      selected: false,
      utilities: [
        {
          type: 'water',
          units: null,
          unitCost: 36175.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 55575.00,
          fee: 0
        }  
      ]
    },
    {size: '6"',
      units: null,
      selected: false,
      utilities: [
        {
          type: 'water',
          units: null,
          unitCost: 72350.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 111150.00,
          fee: 0
        }      
      ]
    },
    {size: '8"',
      units: null,
      selected: false,
    utilities: [
      {
        type: 'water',
        units: null,
        unitCost: 115760.00,
        fee: 0
      },
      {
        type: 'sewer',
        units: null,
        unitCost: 177840.00,
        fee: 0
      }    
    ]
  },
  {size: '10"',
  utilities: [
    {
      type: 'water',
      units: null,
      unitCost: 303870.00,
      fee: 0
    },
    {
      type: 'sewer',
      units: null,
      unitCost: 466830.00,
      fee: 0
    }      
  ]
},
{size: '>=12"',
utilities: [
  {
    type: 'water',
    units: null,
    unitCost: 383455.00,
    fee: 0
  },
  {
    type: 'sewer',
    units: null,
    unitCost: 589095.00,
    fee: 0
  }        
]
}                      
  ];  
  calculateReview(pumpStation:boolean, lf:number, quantity:number) {
    if (pumpStation) {
      return (300 * lf) * quantity;
    }
    return (200 * lf) * quantity;
  }

  calculateCctv(lf:number) {
    return lf;
  }  

  calculatePumpStationReview(quantity:number) {
    return quantity * 3000;
  }    

  calculateInspection(lf:number) {
    return lf * 1.59;
  }    

  calculateStubs(quantity:number) {
    return quantity * 93;
  }      
}
