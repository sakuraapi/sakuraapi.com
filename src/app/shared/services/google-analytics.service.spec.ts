import {
  inject,
  TestBed
}                     from '@angular/core/testing';
import {SharedModule} from '../shared.module';

import {GoogleAnalyticsService} from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          SharedModule
        ]
      });
  });

  it('should be created', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
