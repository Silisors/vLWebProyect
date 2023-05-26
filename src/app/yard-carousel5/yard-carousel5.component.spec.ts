import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel5Component } from './yard-carousel5.component';

describe('YardCarousel5Component', () => {
  let component: YardCarousel5Component;
  let fixture: ComponentFixture<YardCarousel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
