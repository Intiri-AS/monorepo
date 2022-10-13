import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.page.html',
  styleUrls: ['./add-partner.page.scss'],
})
export class AddPartnerPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  options = {
    slidesPerView: 5,
    spaceBetween: 20,
  }

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
