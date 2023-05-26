import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones-price',
  templateUrl: './botones-price.component.html',
  styleUrls: ['./botones-price.component.css']
})
export class BotonesPriceComponent  {
  @Input() startingPrice: number = 100;
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  get buttonText() {
    return this.isHovered ? 'Learn More' : `Starting at ${this.startingPrice}$`;
  }

}
