import { Component } from '@angular/core';
import { Congressperson } from './congressperson';
import { CongresspersonService } from './congressperson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'congressive';

  constructor(private congresspersonService: CongresspersonService) { }

  searchQuery = {
    house: "representatives", 
    state: "UT"
  };

  ngOnInit() {
    this.getCongresspersons();
  }

  congresspersons: Congressperson[];

  receiveSearch($event) {
    this.searchQuery = $event
    this.getCongresspersons();
  }

  getCongresspersons(): void {
    this.congresspersonService.getCongresspersons(this.searchQuery).subscribe(res => {
      // TODO figure out this weird typing issue
      this.congresspersons = Array.from(res.results);
    });
  }

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
