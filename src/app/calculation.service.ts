import { Injectable } from '@angular/core';
import { DevelopmentCard } from './development-card';
import { Tier } from './tier';
import { Fee } from './fee';
import { Calculations } from './calculations';
import { TiersService } from './tiers.service';
import { SharedService } from './shared.service';
@Injectable()
export class CalculationService {
  calculations: Calculations;
  valuation: number;
  minFee: number = 122;
  tiersService:TiersService;
    constructor(public sharedService:SharedService) { }
    getTotal() {
      let total:Number = 0;
      if (this.calculations) {
        if (this.calculations.building.tech) {
          total = (this.calculations.building.value + this.calculations.building.tech) + (this.calculations.review.value + this.calculations.review.tech) + (this.calculations.electrical.value + this.calculations.electrical.tech) + (this.calculations.plumbing.value + this.calculations.plumbing.tech) + (this.calculations.mechanical.value + this.calculations.mechanical.tech) ;

        }
      }
      this.sharedService.emitChange({total: total, calculator: 'building'}); 
      return total;
    
    }
  calcValuation(card: DevelopmentCard): Promise<number>{
    let meansLocationFactor = 0.8381;
    let valuation = 0;
    if (card.constructScope && card.squareFeet && card.construction) {

      valuation = parseFloat((meansLocationFactor * card.construction.value).toFixed(2)) *  card.constructScope.percent * card.squareFeet;
    }
    return Promise.resolve(valuation);
  }

  calcReviewFee(fee: Fee, cards: Array<DevelopmentCard>, tiers: Array<Tier>) {
    return new Promise(resolve => {
      let valuation = 0;
      fee.value = 0;
      cards.forEach(card => {
        //modified for FY20, scope New Construction or Addition
        if (card.constructScope.name === 'New Construction' || card.constructScope.name === 'Addition') {
          valuation += card.calculations.valuation;
        }
      });
      if (valuation === 0) {
        resolve(fee);
      } else {
        this.calcBldgPermit(valuation, tiers, true).then(building => {
          fee.value = Math.round(building * fee.residential);
          fee.tech = this.calcTechFee(fee.value);
          resolve(fee);
        });
      }
    });

  }

  getFees(building: number, isResidential: boolean, fee: Fee, cards?: Array<DevelopmentCard>, tiers?: Array<Tier>): Fee{
    fee.value = 0;
    if (building > 0) {
      fee.value = building * fee.commercial;
      debugger
      if (isResidential) {
        
        fee.value = building * fee.residential;
        if (fee.name === "Plan Review") {
          this.calcReviewFee(fee, cards, tiers);
        }
      }
      if ((fee.value < this.minFee || building <= this.minFee) && fee.name != "Plan Review") {
        fee.value = this.minFee;
      }
    }
    fee.tech = this.calcTechFee(fee.value);
    fee.value = Math.round(fee.value);
    return fee;
  }



  calcFees(calculations: Calculations, cards: Array<DevelopmentCard>, tiers: Array<Tier>): Promise<Calculations> {
    if (calculations.building.value > 0) {
      calculations.review = this.getFees(calculations.building.value, calculations.isResidential, calculations.review, cards, tiers);
      calculations.electrical = this.getFees(calculations.building.value, calculations.isResidential, calculations.electrical);
      calculations.mechanical = this.getFees(calculations.building.value, calculations.isResidential, calculations.mechanical);
      calculations.plumbing = this.getFees(calculations.building.value, calculations.isResidential, calculations.plumbing);
    }
    return Promise.resolve(calculations);
  }

  calcBldgPermit(valuation: number, tiers: Array<Tier>, isResidential: boolean): Promise<number> {
    let costper = 0;
    let bldgPermit = 0;
    var BreakException = {};
    if (valuation > 0 && !isResidential) {
      let i = 0;
      let tier = null;
          for (; i < tiers.length; i++) {
            tier = tiers[i];
            if ((valuation > tier.min && valuation < tier.max) || !tier.max) {
              if (i === 0) {
                bldgPermit = (valuation/1000) * tier['costper'];
              } else {
                bldgPermit = (((valuation - tiers[i - 1]['max'])/1000) * tier['costper']) + tiers[i - 1]['cumulative'];
              }
              break;
            }
          }      
    }   
    if (isResidential) {
      bldgPermit = valuation * 0.0030;
    }
    if (bldgPermit < this.minFee) {
      bldgPermit = this.minFee;
    }
    return Promise.resolve(bldgPermit);
  }

  calcTechFee(fee: number) : number {
    return Math.round(Math.round(fee) * 0.04);
  }
}