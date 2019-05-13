import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rightofway'
})
export class RightofwayPipe implements PipeTransform {

  transform(value: any, downtown: boolean): any {
    if (!downtown) {
      return value;
    } else {
      const result = value.filter((v, i) => v.major && downtown);
      return result;
    }
  }

}
