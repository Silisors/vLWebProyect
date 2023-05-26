import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel6Component } from './yard-carousel6.component';

describe('YardCarousel6Component', () => {
  let component: YardCarousel6Component;
  let fixture: ComponentFixture<YardCarousel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
