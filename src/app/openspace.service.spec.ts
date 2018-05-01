import { TestBed, inject } from '@angular/core/testing';

import { OpenspaceService } from './openspace.service';

describe('OpenspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenspaceService]
    });
  });

  it('should be created', inject([OpenspaceService], (service: OpenspaceService) => {
    expect(service).toBeTruthy();
  }));
});
