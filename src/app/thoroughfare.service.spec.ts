import { TestBed, inject } from '@angular/core/testing';

import { ThoroughfareService } from './thoroughfare.service';

describe('ThoroughfareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThoroughfareService]
    });
  });

  it('should be created', inject([ThoroughfareService], (service: ThoroughfareService) => {
    expect(service).toBeTruthy();
  }));
});
