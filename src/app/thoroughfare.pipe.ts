import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thoroughfare'
})
export class ThoroughfarePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const result = value.filter((v, i) => !v.selected && args === v.category);
    return result;
  }

}
