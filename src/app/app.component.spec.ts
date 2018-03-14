import {Injectable}          from '@angular/core';
import {
  async,
  TestBed
}                            from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SwUpdate}            from '@angular/service-worker';
import {Observable}          from 'rxjs/Observable';
import {AppComponent}        from './app.component';
import {SharedModule}        from './shared/shared.module';

@Injectable()
export class MockSwUpdate {
  available(): Observable<any> {
    return Observable.of();
  }
}

export const MockSwProvider = {provide: SwUpdate, useClass: MockSwUpdate};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          SharedModule
        ],
        declarations: [
          AppComponent
        ],
        providers: [
          MockSwProvider
        ]
      }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
