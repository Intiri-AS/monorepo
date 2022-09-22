import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, PopoverController } from '@ionic/angular';
import { StylePopoverComponent } from 'src/app/components/popovers/style-popover/style-popover.component';

@Component({
  selector: 'app-my-moodboard-page',
  templateUrl: './my-moodboard.page.html',
  styleUrls: ['./my-moodboard.page.scss'],
})

export class MyMoodboardPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  options = {
    slidesPerView: 1,
    initialSlide: 0
  }

  currentSlide = 0;

  myMoodboards = [
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Vintage'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Industrial'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Minimal'
    },
  ]

  allMoodboards = [
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Vintage'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Industrial'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Minimal'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      style: 'Funky'
    },
  ]

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private popoverController: PopoverController
  ) {}

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

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: StylePopoverComponent,
      event: e,
      dismissOnSelect: true
    });

    await popover.present();
  }

}
