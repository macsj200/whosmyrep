import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congressperson-detail',
  templateUrl: './congressperson-detail.component.html',
  styleUrls: ['./congressperson-detail.component.css']
})
export class CongresspersonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  congressperson = {
    firstName: 'Ted',
    lastName: 'Cruz',
    district: 'TX',
    phone: '801 867 5309',
    office: '123 Spooner St.'
  };
}
