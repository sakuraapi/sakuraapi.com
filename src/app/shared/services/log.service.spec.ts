import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  inject,
  TestBed
}                                from '@angular/core/testing';
import {SharedModule}            from '../shared.module';

import {LogService} from './log.service';

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule
      ]
    });
  });

  it('should be created', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
