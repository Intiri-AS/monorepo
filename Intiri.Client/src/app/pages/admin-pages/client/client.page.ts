import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  options = {
    slidesPerView: 1,
    initialSlide: 0
  }

  currentSlide = 0;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if (params.section) {
        this.options.initialSlide = params.section;
      }
    });
  }

  changeSlide(id) {
    this.slides.slideTo(id);
    this.currentSlide = id;
    this.changeQueryParam(id);
  }

  onSlideChange() {
    const currentSlideId = this.slides['el']['swiper']['activeIndex']
    this.currentSlide = currentSlideId;
    this.changeQueryParam(currentSlideId);
  }

  changeQueryParam(section) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        section
      },
    });
  }

}
