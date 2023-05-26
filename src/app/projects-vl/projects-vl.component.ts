import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-vl',
  templateUrl: './projects-vl.component.html',
  styleUrls: ['./projects-vl.component.css']
})
export class ProjectsVlComponent  {
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
