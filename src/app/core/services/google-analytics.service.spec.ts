import {
  inject,
  TestBed
}                               from '@angular/core/testing';
import {SharedModule}           from '../../shared/shared.module';
import {CoreModule}             from '../core.module';
import {GoogleAnalyticsService} from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule,
          SharedModule
        ]
      });
  });

  it('should be created', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
