import { Injectable } from '@angular/core';
import { Congressperson } from './congressperson';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongresspersonService {

  constructor(private http: HttpClient) { }

  selectedCongressperson: Congressperson;

  getCongresspersons(searchQuery): Observable<Congressperson[]> {
    const { house, state } = searchQuery;
    return this.http.get<Congressperson[]>(`http://localhost:3000/${house}/${state}`);
  }
}
