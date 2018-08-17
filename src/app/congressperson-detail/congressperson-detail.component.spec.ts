import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongresspersonDetailComponent } from './congressperson-detail.component';

describe('CongresspersonDetailComponent', () => {
  let component: CongresspersonDetailComponent;
  let fixture: ComponentFixture<CongresspersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongresspersonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongresspersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
