import {
  inject,
  TestBed
}                       from '@angular/core/testing';
import {MockSwProvider} from '../../../app.component.spec';
import {SharedModule}   from '../../shared.module';

import {FeatureCardStateService} from './feature-card-state.service';

describe('FeatureCardStateService', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [SharedModule],
        providers: [
          MockSwProvider
        ]
      });
  });

  it('should be created', inject([FeatureCardStateService], (service: FeatureCardStateService) => {
    expect(service).toBeTruthy();
  }));
});
