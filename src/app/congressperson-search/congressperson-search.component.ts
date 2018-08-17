import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Congressperson } from '../congressperson';



@Component({
  selector: 'app-congressperson-search',
  templateUrl: './congressperson-search.component.html',
  styleUrls: ['./congressperson-search.component.css']
})
export class CongresspersonSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search = {
    house: "Representatives",
    state: "UT"
  };

  @Output() submitEvent = new EventEmitter();

  onSubmit() {
    this.submitEvent.emit(this.search);
  }

}
