import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http : HttpClient) { }

  getAllPersons(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}
