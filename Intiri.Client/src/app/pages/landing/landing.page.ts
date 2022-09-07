import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage {

  @ViewChild('slides') slides: IonSlides;

  public comments = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris.',
      author: 'John Doe'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'John Boe'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'John Bro'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'Ide Ide'
    },
  ];

  isScrolledDown: boolean;

  constructor() {}

  @ViewChild(IonContent) content: IonContent;

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  getOptions(){
    return window.innerWidth > 700 ? {slidesPerView: 2} : {slidesPerView: 1}
  }

  async logScrollEnd() {
    const scrollElement = await this.content.getScrollElement(); // get scroll element
    this.isScrolledDown = scrollElement.scrollTop > 50;

  }
}
