import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsVlComponent } from './projects-vl.component';

describe('ProjectsVlComponent', () => {
  let component: ProjectsVlComponent;
  let fixture: ComponentFixture<ProjectsVlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsVlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsVlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
