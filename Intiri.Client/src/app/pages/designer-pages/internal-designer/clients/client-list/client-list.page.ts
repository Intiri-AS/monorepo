import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})

export class ClientListPage {
  @ViewChild('slides') slides: IonSlides;

  user = null;

  options = {
    slidesPerView: 1,
    initialSlide: 0
  }

  currentSlide = 0;

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
    },
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

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if(params.section) {
        this.options.initialSlide = params.section;
      }
    });
  }

  changeSlide(id) {
    this.slides.slideTo(id);
    this.currentSlide = id;
    this.changeQueryParam(id);
  }

  onSlideChange(){
    const currentSlideId = this.slides['el']['swiper']['activeIndex']
    this.currentSlide = currentSlideId;
    this.changeQueryParam(currentSlideId);
  }

  changeQueryParam(section){
    this._router.navigate([], {
     relativeTo: this._route,
     queryParams: {
       section
     },
   });
  }
}
