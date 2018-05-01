import { Component, OnInit, Input, DoCheck, KeyValueDiffers, OnDestroy, HostListener} from '@angular/core';
import { DevelopmentCard } from '../development-card';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';  
import { Calculations } from '../calculations';
import { TiersService } from '../tiers.service';
import { Tier } from '../tier';
import { CalculationService} from '../calculation.service';
import { Fee } from '../fee';
import { CanDeactivate } from '@angular/router';
import {SharedService} from '../shared.service';

declare let ga: Function;
@Component({
  selector: 'calculator-output',
  inputs: ['cards', 'cardindex', 'calculations'],
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css'],
  providers: [TiersService, CalculationService]
})

export class CalculatorOutputComponent implements OnInit, DoCheck {
  calculations: Calculations;
  cards: Array<DevelopmentCard>;
  cardindex: number;
  @Input() card: DevelopmentCard;
  differ: any;
  cardDiffer: any;
  bldgPermit: number;
  reviewFee: number;
  elecPermit: number;
  tiers: any;
  
  constructor(private differs: KeyValueDiffers, private tiersService: TiersService, private calculationService: CalculationService, private sharedService:SharedService) {
    this.differ = differs.find({}).create();
    this.cardDiffer = differs.find({}).create();
  }
  ngOnInit() { 

    this.calculations = new Calculations();
    this.calculations.valuation = 0;
    this.calculations.building = new Fee("Building", 0, 0, 0.0026);
    this.calculations.electrical = new Fee("Electrical", 0, 1.01, 0.67);
    this.calculations.review = new Fee("Plan Review", 0, 0.55, 0.72);
    this.calculations.plumbing = new Fee("Plumbing", 0, 0.55, 0.22);
    this.calculations.mechanical = new Fee("Mechanical", 0, 0.78, 0.31); 
    this.getTiers();  
  }
@HostListener('window:beforeunload', ['$event'])
beforeunloadHandler(event) {
  if (this.calculations.valuation > 0) {
    this.cards.forEach(card => {
      ga('send', 'event', 'Parameters', 'Building Type', card.building.group);
      ga('send', 'event', 'Parameters', 'Construction Type', card.construction.key);
      ga('send', 'event', 'Parameters', 'Construction Scope', card.constructScope);
      ga('send', 'event', 'Parameters', 'Square Feet', card.squareFeet);
    });
    ga('send', 'event', 'Calculations', 'Total Valuation', this.calculations.valuation);
    ga('send', 'event', 'Calculations', 'Total Building Fee', this.calculations.building);
    ga('send', 'event', 'Calculations', 'Total Electrical Fee', this.calculations.electrical);
    ga('send', 'event', 'Calculations', 'Total Mechanical Fee', this.calculations.mechanical);
    ga('send', 'event', 'Calculations', 'Total Plumbing Fee', this.calculations.plumbing);
    ga('send', 'event', 'Calculations', 'Total Review Fee', this.calculations.review);
    ga('send', 'event', 'Calculations', 'Total Permit Fee', this.calculations.total);    
  }

}

getTotal() {
  let total:Number = (this.calculations.building.value + this.calculations.building.tech) + (this.calculations.review.value + this.calculations.review.tech) + (this.calculations.electrical.value + this.calculations.electrical.tech) + (this.calculations.plumbing.value + this.calculations.plumbing.tech) + (this.calculations.mechanical.value + this.calculations.mechanical.tech) ;
  this.sharedService.emitChange({total: total, calculator: 'building'}); 
  return total;

}
  getTiers() {
    this.tiersService.getTiers().subscribe(
      tiers => {
         this.tiers = tiers; 
         this.calculations.tiers = tiers;
      },
      err => {
        console.log(err);
      }
    );
  }
  sumValuation() {
    let valuation = 0;
    this.cards.forEach(function (card) { 
      valuation += card.calculations.valuation;
    });
    this.calculations.valuation = valuation;
    this.sumBldgPermit();
  }
  sumBldgPermit() {
    let bldgPermit = 0;
    
    this.calculationService.calcBldgPermit(this.calculations.valuation, this.calculations.tiers, this.calculations.isResidential).then(building => {
      this.calculations.building.value = building;
      this.calculations.building.tech = Math.round(Math.round(building) * 0.04);
     // this.calculations = this.calcTechAdder(this.calculations);
      this.calculationService.calcFees(this.calculations, this.cards, this.tiers).then(calculations => {
        this.calculations = calculations;
        this.calculations.building.value = Math.round(this.calculations.building.value);
      });      
    });
  }
 
  ngDoCheck() {
    let card = this.cards[this.cardindex];
    let changes = this.differ.diff(card.calculations);

    if (changes) {
      changes.forEachChangedItem(r => {
        if ((r.key === 'valuation') && r.currentValue != r.previousValue && r.currentValue > 0 && this.cardindex === card.cardindex) {
          this.calculations.isResidential = card.calculations.isResidential;
          this.sumValuation();            
        }                                                                 
      });
    }
    //added to determine change of R-3 construction scope from New Construction to Alteration since valuation does not change
    if (card.building.group.indexOf('R-3') > -1) {
      console.log('test');
      let cardChanges = this.cardDiffer.diff(card);
      if (cardChanges) {
        cardChanges.forEachChangedItem(r => {
          if ((r.key === 'constructScope') && ((r.currentValue.name  === 'Addition' && r.previousValue.name  === 'New Construction') || (r.currentValue.name  === 'New Construction' && r.previousValue.name === 'Addition'))){
            this.calculations.isResidential = card.calculations.isResidential;
            this.sumValuation();             
          }
        });
      }
    }

  }


  // calcTechAdder(calculations: Calculations) : Calculations {
  //   calculations.techFee = calculations.building * 0.04;
  //   calculations.building += calculations.techFee;
  //   return calculations;
  // }
}