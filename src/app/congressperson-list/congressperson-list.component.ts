import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { Congressperson } from '../congressperson';
import { Observable } from 'rxjs';
import { CongresspersonDetailComponent } from '../congressperson-detail/congressperson-detail.component';


@Component({
  selector: 'app-congressperson-list',
  templateUrl: './congressperson-list.component.html',
  styleUrls: ['./congressperson-list.component.css']
})
export class CongresspersonListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() clickEvent = new EventEmitter<Congressperson>();

  @Input() congresspersons: Congressperson[];

  setDetailedView(congressperson: Congressperson): void {
    this.clickEvent.emit(congressperson);
  }

  house = 'Representatives'
}
