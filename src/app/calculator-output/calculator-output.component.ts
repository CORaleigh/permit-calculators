import { Component, OnInit, Input, DoCheck, KeyValueDiffers, OnDestroy, HostListener} from '@angular/core';
import { DevelopmentCard } from '../development-card';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';  
import { Calculations } from '../calculations';
import { TiersService } from '../tiers.service';
import { Tier } from '../tier';
import { CalculationService} from '../calculation.service';
import { Fee } from '../fee';
import { CanDeactivate } from '@angular/router';
import {SharedService} from '../shared.service';
import { BuildingService } from '../building.service';

declare let ga: Function;
@Component({
  selector: 'calculator-output',
  inputs: ['cards', 'cardIndex', 'calculations'],
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css'],
  providers: [TiersService]
})

export class CalculatorOutputComponent implements OnInit, DoCheck {
  cards: Array<DevelopmentCard>;
  cardIndex: number;
  calculations:Calculations;
  differ: any;
  cardDiffer: any;
  bldgPermit: number;
  reviewFee: number;
  elecPermit: number;
  tiers: any;
  @Input() card: DevelopmentCard;
  constructor(private differs: KeyValueDiffers, private tiersService: TiersService, public calculationService: CalculationService, private sharedService:SharedService, private buildingService:BuildingService) {
    this.differ = differs.find({}).create();
    this.cardDiffer = differs.find({}).create();
  }
  ngOnInit() { 

    if (!this.calculationService.calculations) {
      this.calculationService.calculations = new Calculations();
      //modified for FY20
      this.calculationService.calculations.valuation = 0;
      this.calculationService.calculations.building = new Fee("Building", 0, 0, 0.0030);
      this.calculationService.calculations.electrical = new Fee("Electrical", 0, 1.00, 0.60);
      this.calculationService.calculations.review = new Fee("Plan Review", 0, 0.51, 0.63);
      this.calculationService.calculations.plumbing = new Fee("Plumbing", 0, 0.56, 0.32);
      this.calculationService.calculations.mechanical = new Fee("Mechanical", 0, 0.77, 0.26); 
    }
    if (!this.tiers) {
      this.getTiers(); 
    }
    
  }
@HostListener('window:beforeunload', ['$event'])
beforeunloadHandler(event) {
  if (this.calculationService.calculations.valuation > 0) {
    this.cards.forEach(card => {
      ga('send', 'event', 'Parameters', 'Building Type', card.building.group);
      ga('send', 'event', 'Parameters', 'Construction Type', card.construction.key);
      ga('send', 'event', 'Parameters', 'Construction Scope', card.constructScope);
      ga('send', 'event', 'Parameters', 'Square Feet', card.squareFeet);
    });
    ga('send', 'event', 'Calculations', 'Total Valuation', this.calculationService.calculations.valuation);
    ga('send', 'event', 'Calculations', 'Total Building Fee', this.calculationService.calculations.building);
    ga('send', 'event', 'Calculations', 'Total Electrical Fee', this.calculationService.calculations.electrical);
    ga('send', 'event', 'Calculations', 'Total Mechanical Fee', this.calculationService.calculations.mechanical);
    ga('send', 'event', 'Calculations', 'Total Plumbing Fee', this.calculationService.calculations.plumbing);
    ga('send', 'event', 'Calculations', 'Total Review Fee', this.calculationService.calculations.review);
    ga('send', 'event', 'Calculations', 'Total Permit Fee', this.calculationService.calculations.total);    
  }

}

// getTotal() {
//   let total:Number = (this.calculationService.calculations.building.value + this.calculationService.calculations.building.tech) + (this.calculationService.calculations.review.value + this.calculationService.calculations.review.tech) + (this.calculationService.calculations.electrical.value + this.calculationService.calculations.electrical.tech) + (this.calculationService.calculations.plumbing.value + this.calculationService.calculations.plumbing.tech) + (this.calculationService.calculations.mechanical.value + this.calculationService.calculations.mechanical.tech) ;
//   this.sharedService.emitChange({total: total, calculator: 'building'}); 
//   return total;

// }
  getTiers() {
    this.tiersService.getTiers().subscribe(
      tiers => {
         this.tiers = tiers; 
         this.calculationService.calculations.tiers = tiers;
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
    
    this.calculationService.calculations.valuation = valuation;
    this.sumBldgPermit();
  }
  sumBldgPermit() {
    let bldgPermit = 0;
    
    this.calculationService.calcBldgPermit(this.calculationService.calculations.valuation, this.calculationService.calculations.tiers, this.calculationService.calculations.isResidential).then(building => {
      this.calculationService.calculations.building.value = building;
      this.calculationService.calculations.building.tech = Math.round(Math.round(building) * 0.04);
      this.calculationService.calcFees(this.calculationService.calculations, this.cards, this.tiers).then(calculations => {
        this.calculationService.calculations = calculations;
        this.calculationService.calculations.building.value = Math.round(this.calculationService.calculations.building.value);
      });      
    });
  }
 
  ngDoCheck() {

      let card = this.cards[this.cardIndex];
      let changes = this.differ.diff(card.calculations);
      if (changes) {
        changes.forEachChangedItem(r => {
          if ((r.key === 'valuation') && r.currentValue != r.previousValue && r.currentValue > 0 && this.cardIndex === card.cardindex) {
            this.calculationService.calculations.isResidential = card.calculations.isResidential;
            this.sumValuation();            
          }                                                                 
        });
      }
      
      //added to determine change of R-3 construction scope from New Construction to Alteration since valuation does not change
      if (card.building.group.indexOf('R-3') > -1) {

        let cardChanges = this.cardDiffer.diff(card);
        if (cardChanges) {
          cardChanges.forEachChangedItem(r => {
            if ((r.key === 'constructScope') && ((r.currentValue.name  === 'Addition' && r.previousValue.name  === 'New Construction') || (r.currentValue.name  === 'New Construction' && r.previousValue.name === 'Addition'))){
              this.calculationService.calculations.isResidential = card.calculations.isResidential;
              this.sumValuation();             
            }
          });
        }
      }
      if (card.building.group.indexOf('U Utility, miscellaneous') > -1) {
        let cardChanges = this.cardDiffer.diff(card.calculations);
        if (cardChanges) {

          cardChanges.forEachChangedItem(r => {
            if ((r.key === 'isResidential') && (r.currentValue !== r.previousValue)){
              this.calculationService.calculations.isResidential = card.calculations.isResidential;
              this.sumValuation();             
            }
          });
        }        
 
      }



  }

}