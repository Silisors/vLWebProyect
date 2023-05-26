import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent5Component } from './yard-component5.component';

describe('YardComponent5Component', () => {
  let component: YardComponent5Component;
  let fixture: ComponentFixture<YardComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
