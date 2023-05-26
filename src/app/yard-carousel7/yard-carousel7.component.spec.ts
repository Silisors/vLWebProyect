import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel7Component } from './yard-carousel7.component';

describe('YardCarousel7Component', () => {
  let component: YardCarousel7Component;
  let fixture: ComponentFixture<YardCarousel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
