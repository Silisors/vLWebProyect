import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardComponent4Component } from './yard-component4.component';

describe('YardComponent4Component', () => {
  let component: YardComponent4Component;
  let fixture: ComponentFixture<YardComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardComponent4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
