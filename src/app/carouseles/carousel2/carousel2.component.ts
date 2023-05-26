import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css']
})
export class Carousel2Component implements AfterViewInit {

  @ViewChild('carousel', { static: true })
  carousel!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      const nextButton = this.carousel.nativeElement.querySelector('.carousel-control-next');
      nextButton.click();
    }, 2500); // Cambiar el valor del intervalo según sea necesario
  }
  isMobile: boolean | undefined;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 900;
  }
}
