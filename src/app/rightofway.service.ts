import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rightofway } from './rightofway';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RightofwayService {
  constructor(private http: HttpClient) { }
  getRightofway(){
    return this.http.get('./assets/rightofway.json');
  }

  public total:number = 0;
  downtown:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selections: Selection[] = [];
  maxPrimary: number = 0;
  totalPerDay: number = 0;
  totalProject: number = 0;
  projectReview: number = 0;
}

class Selection {
  options: Rightofway[];
  value: Rightofway;
  lf: number = null;
  days: number = null;
  primaryCost:number = 0;
  secondaryCost:number = 0;
  totalCost: number = 0;
  projectCost:number = 0;
  downtown: boolean = false;
}
