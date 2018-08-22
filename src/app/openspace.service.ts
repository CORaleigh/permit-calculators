import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable()
export class OpenspaceService {

  constructor(private sharedService: SharedService) { }
  multi: number = null;
  single: number = null;
  zone: any = null;

  getTotal() {
    let total:Number = this.multi * this.zone.multi + this.single * this.zone.single;
    this.sharedService.emitChange({total: total, calculator: 'openspace'});
    return total;
  }
}
