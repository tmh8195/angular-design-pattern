import { TestBed, inject } from '@angular/core/testing';

import { PointDataService } from './point-data.service';

describe('PointDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointDataService]
    });
  });

  it('should be created', inject([PointDataService], (service: PointDataService) => {
    expect(service).toBeTruthy();
  }));
});
