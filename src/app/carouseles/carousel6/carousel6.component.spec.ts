import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel6Component } from './carousel6.component';

describe('Carousel6Component', () => {
  let component: Carousel6Component;
  let fixture: ComponentFixture<Carousel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carousel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
