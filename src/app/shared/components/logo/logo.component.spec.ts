import {
  async,
  ComponentFixture,
  TestBed
}                             from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule}  from '@angular/router/testing';
import {CoreModule}           from '../../../core/core.module';
import {SharedModule}         from '../../shared.module';
import {LogoComponent}        from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule,
          NoopAnimationsModule,
          RouterTestingModule,
          SharedModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
