import { Component } from '@angular/core';
import { Congressperson } from './congressperson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'congressive';

  congressperson: Congressperson = {
    name: 'Ted Cruz',
    district: 'TX',
    phone: '801 867 5309',
    office: '123 Spooner St.',
    party: 'R'
  };

  receiveCongressperson($event) {
    this.congressperson = $event
  }

  setCongressperson(congressperson: Congressperson): void {
    this.congressperson = congressperson;
  }
}
