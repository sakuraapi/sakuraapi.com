import {
  inject,
  TestBed
}                       from '@angular/core/testing';
import {MockSwProvider} from '../../app.component.spec';
import {SharedModule}   from '../shared.module';

import {BrowserService} from './browser.service';

describe('BrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      providers: [
        MockSwProvider
      ]
    });
  });

  it('should be created', inject([BrowserService], (service: BrowserService) => {
    expect(service).toBeTruthy();
  }));
});
