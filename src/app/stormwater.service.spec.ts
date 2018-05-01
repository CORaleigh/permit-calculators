import { TestBed, inject } from '@angular/core/testing';

import { StormwaterService } from './stormwater.service';

describe('StormwaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StormwaterService]
    });
  });

  it('should be created', inject([StormwaterService], (service: StormwaterService) => {
    expect(service).toBeTruthy();
  }));
});
