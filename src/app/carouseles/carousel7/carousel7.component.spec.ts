import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel7Component } from './carousel7.component';

describe('Carousel7Component', () => {
  let component: Carousel7Component;
  let fixture: ComponentFixture<Carousel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carousel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
