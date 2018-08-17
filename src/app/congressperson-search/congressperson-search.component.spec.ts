import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongresspersonSearchComponent } from './congressperson-search.component';

describe('CongresspersonSearchComponent', () => {
  let component: CongresspersonSearchComponent;
  let fixture: ComponentFixture<CongresspersonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongresspersonSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongresspersonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
