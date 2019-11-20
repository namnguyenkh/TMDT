import { Pipe, PipeTransform } from '@angular/core';
import { DATETIME_FORMAT } from '../helpers/constants.helper';
import * as moment from 'moment';

@Pipe({
  name: 'ddmmyy'
})
export class DdmmyyPipe implements PipeTransform {

  transform(value: any): any {
    return value ? moment(value).format(DATETIME_FORMAT) : '';
  }

}
