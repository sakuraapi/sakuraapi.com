import {
  async,
  ComponentFixture,
  TestBed
}                   from '@angular/core/testing';
import {CoreModule} from '../core/core.module';

import {PageNotFoundComponent} from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule
        ],
        declarations: [PageNotFoundComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
