import {
  inject,
  TestBed
}                       from '@angular/core/testing';
import {MockSwProvider} from '../../app.component.spec';
import {SharedModule}   from '../../shared/shared.module';
import {CoreModule}     from '../core.module';
import {BrowserService} from './browser.service';

describe('BrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
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
