import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimercompComponent } from './primercomp.component';

describe('PrimercompComponent', () => {
  let component: PrimercompComponent;
  let fixture: ComponentFixture<PrimercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimercompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
