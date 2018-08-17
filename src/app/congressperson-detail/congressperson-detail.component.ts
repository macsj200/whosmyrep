import { Component, OnInit, Input } from '@angular/core';
import { Congressperson } from '../congressperson';

@Component({
  selector: 'app-congressperson-detail',
  templateUrl: './congressperson-detail.component.html',
  styleUrls: ['./congressperson-detail.component.css']
})
export class CongresspersonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() congressperson: Congressperson;
}
