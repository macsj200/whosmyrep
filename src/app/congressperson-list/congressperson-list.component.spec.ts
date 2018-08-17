import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongresspersonListComponent } from './congressperson-list.component';

describe('CongresspersonListComponent', () => {
  let component: CongresspersonListComponent;
  let fixture: ComponentFixture<CongresspersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongresspersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongresspersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
