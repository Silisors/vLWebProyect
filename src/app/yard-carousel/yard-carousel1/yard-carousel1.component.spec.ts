import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel1Component } from './yard-carousel1.component';

describe('YardCarousel1Component', () => {
  let component: YardCarousel1Component;
  let fixture: ComponentFixture<YardCarousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
