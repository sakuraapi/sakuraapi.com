import {
  async,
  ComponentFixture,
  TestBed
}                             from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule}     from '../shared/components/components.module';
import {HomeComponent}        from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          HomeComponent
        ],
        imports: [
          ComponentsModule,
          NoopAnimationsModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
