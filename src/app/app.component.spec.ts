import {
  async,
  TestBed
}                            from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent}        from './app.component';
import {ComponentsModule}    from './shared/components/components.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          ComponentsModule,
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ]
      }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
