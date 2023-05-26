import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel3Component } from './yard-carousel3.component';

describe('YardCarousel3Component', () => {
  let component: YardCarousel3Component;
  let fixture: ComponentFixture<YardCarousel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
