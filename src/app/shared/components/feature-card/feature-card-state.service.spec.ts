import {TestBed}                 from '@angular/core/testing';
import {MockSwProvider}          from '../../../app.component.spec';
import {CoreModule}              from '../../../core/core.module';
import {SharedModule}            from '../../shared.module';
import {FeatureCardStateService} from './feature-card-state.service';

describe('FeatureCardStateService', () => {
  let fcStateService: FeatureCardStateService;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule,
          SharedModule
        ],
        providers: [
          MockSwProvider
        ]
      });

    fcStateService = TestBed.get(FeatureCardStateService);
  });

  it('next', () => {
    const limit = fcStateService['limit'];

    let val = 0;
    for (let i = 0; i < limit; i++) {
      val = fcStateService.nextColor();
    }

    expect(val).toBe(limit);
    expect(fcStateService.nextColor()).toBe(1);
  });

  it('resetColor', () => {
    const limit = fcStateService['limit'];

    expect(fcStateService.nextColor()).toBe(1);
    expect(fcStateService.nextColor()).toBe(2);
    fcStateService.resetColor();
    expect(fcStateService.nextColor()).toBe(1);
  });
});
