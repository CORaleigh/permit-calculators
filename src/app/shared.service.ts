import { Observable, Subject } from 'rxjs';

export class SharedService {
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }
  selectedCalculator:string = null;
  total: number = 0;
  lastRoute: string;
  summary:boolean;  
  calculators: Array<any> = [
    {
    label: "Building Permit Fees",
    route: "building"
    }, {
      label: "Stormwater Fees",
      route: "stormwater"
    }
    , {
      label: "Open Space Facility Fees",
      route: "openspace"
    }, {
      label: "Thoroughfare Facility Fees",
      route: "thoroughfare"
    }, {
      label: "Right-of-Way Occupancy Fees",
      route: "rightofway"
    }, {
      label: "Public Utility Fees",
      route: "publicutility"
    }
  ];

  
}
