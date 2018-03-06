import {
  async,
  ComponentFixture,
  TestBed
}                            from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ComponentsModule}    from '../components.module';
import {FooterComponent}     from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          ComponentsModule,
          RouterTestingModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
