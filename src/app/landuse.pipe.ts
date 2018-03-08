import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'landuse'
})
export class LandusePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const result = value.filter((v, i) => args.selected.indexOf(i) === -1);
    return result;
    // value.forEach((v,i) => {
    //   if (args.selected.indexOf(i) === -1) {
    //     return v;
    //   }
    // });
  }

}
