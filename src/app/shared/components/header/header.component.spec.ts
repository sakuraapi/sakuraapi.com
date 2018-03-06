import {
  async,
  ComponentFixture,
  TestBed
}                             from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule}  from '@angular/router/testing';
import {ComponentsModule}     from '../components.module';
import {HeaderComponent}      from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          ComponentsModule,
          NoopAnimationsModule,
          RouterTestingModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
