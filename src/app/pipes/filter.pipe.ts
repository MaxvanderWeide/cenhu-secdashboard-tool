import {Pipe, PipeTransform} from '@angular/core';
/* eslint-disable */
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: any): any {
    return term
      ? items.filter(item => item.id.indexOf(term) !== -1)
      : items;
  }
}


@Pipe({name: 'openFilter'})
export class OpenFilterPipe implements PipeTransform {
  transform(items: any[], check: any): any {
    return check ? items.filter(item => item.open) : items;
  }
}
/* eslint-enable */
