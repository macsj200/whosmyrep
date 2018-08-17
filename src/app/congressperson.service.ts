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

  getCongresspersons(): Observable<Congressperson[]> {
    // this.http.get<Congressperson[]>('http://localhost:3000/representatives/UT').subscribe(console.log)
    // return;
    return this.http.get<Congressperson[]>('http://localhost:3000/representatives/UT');
    // return of([
    //   new Congressperson('Ted', 'Cruz', 'TX', '867 5309', '123 Spooner St.', 'R'),
    //   new Congressperson('B', 'Monay', 'UT', '867 5309', '123 Spooner St.', 'D'),
    // ]);
  }
}
