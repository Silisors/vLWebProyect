import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardCarousel2Component } from './yard-carousel2.component';

describe('YardCarousel2Component', () => {
  let component: YardCarousel2Component;
  let fixture: ComponentFixture<YardCarousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardCarousel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
