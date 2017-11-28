import { TestBed, inject } from '@angular/core/testing';

import { PointService } from './point.service';

describe('PointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointService]
    });
  });

  it('should be created', inject([PointService], (service: PointService) => {
    expect(service).toBeTruthy();
  }));
});
