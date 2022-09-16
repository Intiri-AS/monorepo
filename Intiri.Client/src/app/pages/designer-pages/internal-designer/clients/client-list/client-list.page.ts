import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})

export class ClientListPage {
  @ViewChild('slides') slides: IonSlides;

  options = {
    slidesPerView: 1,
    initialSlide: 0
  }

  activeBtn = 'clients';

  clients = [
    {
      avatar: '../../../../../assets/images/profile-img.png',
      name: 'Grace Dweler',
      email: 'test@test.com',
      style: 'Skandinavian Bright'
    },
    {
      avatar: '../../../../../assets/images/profile-img.png',
      name: 'Grace Dweler',
      email: 'test@test.com',
      style: 'Skandinavian Bright'
    },
    {
      avatar: '../../../../../assets/images/profile-img.png',
      name: 'Grace Dweler',
      email: 'test@test.com',
      style: 'Skandinavian Bright'
    }
  ]

  moodboards = [
    {
      image: '../../../../../assets/images/landing-img.png',
      style: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      style: 'Industrial'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      style: 'Minimal'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      style: 'Minimal'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      style: 'Minimal'
    }
  ]

  constructor() {}

  changeSlide(id, name) {
    this.slides.slideTo(id);
    this.activeBtn = name;
  }
}
