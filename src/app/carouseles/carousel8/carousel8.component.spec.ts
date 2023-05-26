import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel8Component } from './carousel8.component';

describe('Carousel8Component', () => {
  let component: Carousel8Component;
  let fixture: ComponentFixture<Carousel8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carousel8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
