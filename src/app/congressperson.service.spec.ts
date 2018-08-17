import { TestBed, inject } from '@angular/core/testing';

import { CongresspersonService } from './congressperson.service';

describe('CongresspersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CongresspersonService]
    });
  });

  it('should be created', inject([CongresspersonService], (service: CongresspersonService) => {
    expect(service).toBeTruthy();
  }));
});
