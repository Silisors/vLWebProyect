import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent2Component } from './yard-component2.component';

describe('YardComponent2Component', () => {
  let component: YardComponent2Component;
  let fixture: ComponentFixture<YardComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
