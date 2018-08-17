import { Injectable } from '@angular/core';
import { Congressperson } from './congressperson';

@Injectable({
  providedIn: 'root'
})
export class CongresspersonService {

  constructor() { }

  getCongresspersons(): Congressperson[] {
    return [
      new Congressperson('Ted', 'Cruz', 'TX', '867 5309', '123 Spooner St.', 'R'),
      new Congressperson('B', 'Monay', 'UT', '867 5309', '123 Spooner St.', 'D'),
    ];
  }
}
