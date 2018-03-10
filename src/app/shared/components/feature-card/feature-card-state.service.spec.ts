import { TestBed, inject } from '@angular/core/testing';

import { FeatureCardStateService } from './feature-card-state.service';

describe('FeatureCardStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureCardStateService]
    });
  });

  it('should be created', inject([FeatureCardStateService], (service: FeatureCardStateService) => {
    expect(service).toBeTruthy();
  }));
});
