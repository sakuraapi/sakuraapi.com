import {
  async,
  ComponentFixture,
  TestBed
}                         from '@angular/core/testing';
import {ComponentsModule} from '../components.module';

import {MenuComponent} from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          ComponentsModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
