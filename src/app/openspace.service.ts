import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable()
export class OpenspaceService {

  constructor(private sharedService: SharedService) { }
  multi: number = null;
  single: number = null;
  zone: any = null;

  getTotal() {
    let total:number = 0;
    if (this.zone) {
      if (this.multi) {
        total += this.multi * this.zone.multi;
      }
      if (this.single) {
        total += this.single * this.zone.single;
      }      
    }
    this.sharedService.emitChange({total: total, calculator: 'openspace'});
    return total;
  }
}
