import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CongresspersonService } from '../congressperson.service';
import { Congressperson } from '../congressperson';
import { Observable } from 'rxjs';
import { CongresspersonDetailComponent } from '../congressperson-detail/congressperson-detail.component';


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

  @Output() clickEvent = new EventEmitter<Congressperson>();

  congresspersons: Congressperson[];


  setDetailedView(congressperson: Congressperson): void {
    this.clickEvent.emit(congressperson);
  }

  getCongresspersons(): void {
    // console.log(this.congresspersonService.getCongresspersons())
    this.congresspersonService.getCongresspersons().subscribe(res => {
      this.congresspersons = Array.from(res.results);
    });
  }

  house = 'Representatives'
}
