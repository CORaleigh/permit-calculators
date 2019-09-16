import { Component, OnInit } from '@angular/core';
import { RightofwayService } from '../rightofway.service';
import { Rightofway } from '../rightofway';
import { config } from 'rxjs';
import { SharedService } from '../shared.service';
import {RightofwayPipe} from '../rightofway.pipe';
import { MatDialog } from '@angular/material/dialog';
import { RightofwayDialogComponent } from '../rightofway-dialog/rightofway-dialog.component';

@Component({
  selector: 'app-rightofway-permits',
  templateUrl: './rightofway-permits.component.html',
  styleUrls: ['./rightofway-permits.component.css']
})
export class RightofwayPermitsComponent implements OnInit {

  constructor(public service:RightofwayService, private shared:SharedService, public dialog:MatDialog) { }
  data: Rightofway[] = [];
  
  ngOnInit() {
    this.getConfig();
    this.service.downtown.subscribe(downtown => {
      if (this.service.selections.length) {
        this.service.selections[this.service.selections.length - 1].downtown = downtown;
      }
    });
  }

  showDefinitions() { 
    this.dialog.open(RightofwayDialogComponent);
  }

  occupancySelected(value, occupancy:Selection, index:number) {
    occupancy.value = value.value;
    this.calculate(occupancy);
    if (index === this.service.selections.length - 1) {
      let selection = new Selection();
      selection.options = this.data;
      selection.value = new Rightofway();

      selection.downtown = this.service.downtown.getValue();
      this.service.selections.push(selection);
    }
  }

  totalProjects() {
    this.service.totalPerDay = 0;
    this.service.totalProject = 0;    
    this.service.projectReview = 0;
    this.service.selections.forEach((selection:Selection) => {
      if (selection.primaryCost >= this.service.maxPrimary) {
        this.service.maxPrimary = selection.primaryCost;
        selection.totalCost = selection.primaryCost;
      } else {
        selection.totalCost = selection.secondaryCost;
        selection.projectCost = selection.totalCost * selection.days;
      }
      if (selection.value.review >= this.service.projectReview) {
        this.service.projectReview = selection.value.review;
      }
      selection.projectCost = selection.totalCost * selection.days;
      this.service.totalPerDay += selection.totalCost;
      this.service.totalProject += selection.projectCost;   
    });
    this.service.total = this.service.totalProject + this.service.projectReview;
    this.shared.emitChange({total: this.service.total , calculator: 'rightofway'});
  }

  calculate(occupancy:Selection) {
    if (occupancy.lf) {      
      if (occupancy.lf < 151) {
        occupancy.primaryCost = occupancy.value.base;
      } else {
        occupancy.primaryCost = occupancy.value.base + (occupancy.lf - 150) * occupancy.value.primary;
      }
      occupancy.secondaryCost = occupancy.value.secondary * occupancy.lf;
    } else {
      this.service.maxPrimary = 0;
      occupancy.primaryCost = 0;
      occupancy.secondaryCost = 0;
    }
    if (!occupancy.days) {
      this.service.maxPrimary = 0;
      occupancy.primaryCost = 0;
      occupancy.secondaryCost = 0;
    }

    if (occupancy.dumpsters) {
      occupancy.primaryCost = occupancy.value.base;
      occupancy.secondaryCost = occupancy.value.base * occupancy.dumpsters;
    }

    this.totalProjects();
  }

  linearFeetChanged(event, value:Selection) {
    this.calculate(value);
  }
  daysChanged(event, value:Selection) {
    this.calculate(value);
  }

  deleteOccupancy(occupancy, index) {
    this.service.selections.splice(index, 1);
    this.service.maxPrimary = 0;
    this.totalProjects();
  }



  getConfig() {
    this.service.getRightofway().subscribe(
      data => {
        this.data = data as Rightofway[];
        let selection = new Selection();
        selection.options = this.data;
        selection.value = new Rightofway();
        selection.downtown = this.service.downtown.getValue();
        this.service.selections.push(selection);
      },
      err => {
      }
    );
  }

}

class Selection {
  options: Rightofway[];
  value: Rightofway;
  lf: number = null;
  dumpsters: number = null;
  days: number = null;
  primaryCost:number = 0;
  secondaryCost:number = 0;
  totalCost: number = 0;
  projectCost:number = 0;
  downtown:boolean = false;
  
}
