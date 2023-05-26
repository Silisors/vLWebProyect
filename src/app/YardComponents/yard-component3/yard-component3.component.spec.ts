import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent3Component } from './yard-component3.component';

describe('YardComponent3Component', () => {
  let component: YardComponent3Component;
  let fixture: ComponentFixture<YardComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
