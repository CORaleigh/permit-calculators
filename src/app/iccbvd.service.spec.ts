import { TestBed, inject } from '@angular/core/testing';

import { IccbvdService } from './iccbvd.service';

describe('IccbvdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IccbvdService]
    });
  });

  it('should be created', inject([IccbvdService], (service: IccbvdService) => {
    expect(service).toBeTruthy();
  }));
});
