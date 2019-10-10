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
        title: 'Public Sewer Review',
        fee: 0,
        unitCost: 200.00
      },
      {
        title: 'Private Sewer Review',
        fee: 0,
        unitCost: 200.00
      },
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
        unitCost: 1.00
      },
      {
        title: 'Pump Station Inspection',
        fee: 0,
        unitCost: 3000.00
      },
      {
        title: 'Water Inspection',
        fee: 0,
        unitCost: 1.55
      },
      {
        title: 'Sewer Inspection',
        fee: 0,
        unitCost: 1.55
      },
      {
        title: 'Reuse Inspection',
        fee: 0,
        unitCost: 1.55
      }
    ]}    
,
{title: 'Stub Fees', fees: [
  {
    title: 'Water Stubs',
    fee: 0,
    unitCost: 93.00
  },
  {
    title: 'Sewer Stubs',
    fee: 0,
    unitCost: 93.00
  },
  {
    title: 'Reuse Stubs',
    fee: 0,
    unitCost: 93.00
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
          unitCost: 1373.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 2522.00,
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
          unitCost: 3433.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 6305.00,
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
          unitCost: 6865.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 12610.00,
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
          unitCost: 10984.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 20176.00,
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
          unitCost: 34325.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 63050.00,
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
          unitCost: 68650.00,
          fee: 0
        },
        {
          type: 'sewer',
          units: null,
          unitCost: 126100.00,
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
        unitCost: 109840.00,
        fee: 0
      },
      {
        type: 'sewer',
        units: null,
        unitCost: 201760.00,
        fee: 0
      }    
    ]
  },
  {size: '10"',
  utilities: [
    {
      type: 'water',
      units: null,
      unitCost: 288330.00,
      fee: 0
    },
    {
      type: 'sewer',
      units: null,
      unitCost: 529620.00,
      fee: 0
    }      
  ]
},
{size: '>=12"',
utilities: [
  {
    type: 'water',
    units: null,
    unitCost: 363845.00,
    fee: 0
  },
  {
    type: 'sewer',
    units: null,
    unitCost: 668330.00,
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
    return lf * 1.55;
  }    

  calculateStubs(quantity:number) {
    return quantity * 93;
  }      
}
