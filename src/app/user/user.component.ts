import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { PersonsService } from '../service/persons.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    user: User | undefined;
    id: any;
    sub: any;
    personData:Array<any> = [];
  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private personService: PersonsService) {
        this.user;
        this.personService.getAllPersons().subscribe(
            (response)=>
            {
             this.personData = response;
             this.id=this._Activatedroute.snapshot.params['id'];
             this.user = this.personData.find(p => p.id==this.id);
             console.log(this.user)
            }
           )
     
  }


  ngOnInit() {
     
  }

}
