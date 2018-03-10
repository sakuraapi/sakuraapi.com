import {
  async,
  ComponentFixture,
  TestBed
}                     from '@angular/core/testing';
import {SharedModule} from '../../shared.module';

import {HeroImageComponent} from './hero-image.component';

describe('HeroImageComponent', () => {
  let component: HeroImageComponent;
  let fixture: ComponentFixture<HeroImageComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          SharedModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
