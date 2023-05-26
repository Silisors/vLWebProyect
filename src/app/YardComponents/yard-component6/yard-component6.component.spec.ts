import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent6Component } from './yard-component6.component';

describe('YardComponent6Component', () => {
  let component: YardComponent6Component;
  let fixture: ComponentFixture<YardComponent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
