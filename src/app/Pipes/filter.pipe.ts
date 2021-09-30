import { Pipe, PipeTransform } from '@angular/core';
import { PersonsService } from '../service/persons.service';
import { TableComponent } from '../table/table.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, filteredString:string): Array<any> {
    if(!value || filteredString === ''){
      return value;
    }

    return value.filter(item => item.name.includes(filteredString));
  }

}
