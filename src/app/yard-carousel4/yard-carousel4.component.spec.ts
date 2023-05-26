import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel4Component } from './yard-carousel4.component';

describe('YardCarousel4Component', () => {
  let component: YardCarousel4Component;
  let fixture: ComponentFixture<YardCarousel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
