import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent7Component } from './yard-component7.component';

describe('YardComponent7Component', () => {
  let component: YardComponent7Component;
  let fixture: ComponentFixture<YardComponent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
