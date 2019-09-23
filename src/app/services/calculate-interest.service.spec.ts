import { TestBed } from '@angular/core/testing';

import { CalculateInterestService } from './calculate-interest.service';

describe('CalculateInterestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateInterestService = TestBed.get(CalculateInterestService);
    expect(service).toBeTruthy();
  });
});
