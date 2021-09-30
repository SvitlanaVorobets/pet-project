import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { PersonsService } from '../service/persons.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit{
  
  personData:Array<any> = [];
  filteredString:string = '';

  constructor(private personService:PersonsService) {
      this.personService.getAllPersons().subscribe(
       (response)=>
       {
        this.personData = response;
       
       }
      )

  }
  
  ngOnInit(){
  }
}
