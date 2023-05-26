import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesPriceComponent } from './botones-price.component';

describe('BotonesPriceComponent', () => {
  let component: BotonesPriceComponent;
  let fixture: ComponentFixture<BotonesPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
