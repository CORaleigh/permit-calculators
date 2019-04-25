import { TestBed, inject } from '@angular/core/testing';

import { RightofwayService } from './rightofway.service';

describe('RightofwayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightofwayService]
    });
  });

  it('should be created', inject([RightofwayService], (service: RightofwayService) => {
    expect(service).toBeTruthy();
  }));
});
