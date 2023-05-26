import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent8Component } from './yard-component8.component';

describe('YardComponent8Component', () => {
  let component: YardComponent8Component;
  let fixture: ComponentFixture<YardComponent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
