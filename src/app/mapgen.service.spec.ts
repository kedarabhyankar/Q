import { TestBed, inject } from '@angular/core/testing';

import { MapgenService } from './mapgen.service';

describe('MapgenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapgenService]
    });
  });

  it('should be created', inject([MapgenService], (service: MapgenService) => {
    expect(service).toBeTruthy();
  }));
});
