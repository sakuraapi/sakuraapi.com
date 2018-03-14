import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed
}                                from '@angular/core/testing';
import {NoopAnimationsModule}    from '@angular/platform-browser/animations';
import {MockSwProvider}          from '../app.component.spec';
import {SharedModule}            from '../shared/shared.module';
import {HomeComponent}           from './home.component';

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
          HttpClientTestingModule,
          NoopAnimationsModule,
          SharedModule
        ],
        providers: [
          MockSwProvider
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
