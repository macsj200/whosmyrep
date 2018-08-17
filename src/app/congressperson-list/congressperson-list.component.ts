import { Component, OnInit } from '@angular/core';
import { CongresspersonService } from '../congressperson.service';
import { Congressperson } from '../congressperson';

@Component({
  selector: 'app-congressperson-list',
  templateUrl: './congressperson-list.component.html',
  styleUrls: ['./congressperson-list.component.css']
})
export class CongresspersonListComponent implements OnInit {

  constructor(private congresspersonService: CongresspersonService) { }

  ngOnInit() {
    this.getCongresspersons();
  }

  congresspersons: Congressperson[];

  getCongresspersons(): void {
    this.congresspersons = this.congresspersonService.getCongresspersons();
  }
  // congresspeople = [
  //   {
  //     firstName: 'Ted',
  //     lastName: 'Cruz',
  //     district: 'TX',
  //     phone: '801 867 5309',
  //     office: '123 Spooner St.',
  //     party: 'R'
  //   },
  //   {
  //     firstName: 'B',
  //     lastName: 'Monay',
  //     district: 'UT',
  //     phone: '801 867 5309',
  //     office: '123 Spooner St.',
  //     party: 'D'
  //   },
  // ];

  house = 'Representatives'
}
