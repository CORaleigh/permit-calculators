import { TestBed } from '@angular/core/testing';

import { PublicutilityService } from './publicutility.service';

describe('PublicutilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicutilityService = TestBed.get(PublicutilityService);
    expect(service).toBeTruthy();
  });
});
