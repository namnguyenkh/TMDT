import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usageSort'
})
export class UsageSortPipe implements PipeTransform {
  transform(array: any[], option?: any): any {
    if (option) {
      return array.sort(function(a, b) {
        return a[option] - b[option];
      });
    } else {
      return array;
    }
  }
}
