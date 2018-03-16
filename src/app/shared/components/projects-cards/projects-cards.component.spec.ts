import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed
}                                from '@angular/core/testing';
import {MockSwProvider}          from '../../../app.component.spec';
import {SharedModule}            from '../../shared.module';

import {ProjectsCardsComponent} from './projects-cards.component';

describe('ProjectsCardsComponent', () => {
  let component: ProjectsCardsComponent;
  let fixture: ComponentFixture<ProjectsCardsComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
          SharedModule
        ],
        providers: [
          MockSwProvider
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
