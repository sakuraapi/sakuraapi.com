import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineBannerComponent } from './tagline-banner.component';

describe('TaglineBannerComponent', () => {
  let component: TaglineBannerComponent;
  let fixture: ComponentFixture<TaglineBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaglineBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglineBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
