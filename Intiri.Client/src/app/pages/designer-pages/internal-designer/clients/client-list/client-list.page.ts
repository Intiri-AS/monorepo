import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { DesignerService } from 'src/app/services/designer.service';

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

  star = 1;
  rating = 0;
  numberOfRatings = 0;

  designerStatistic = null;

  //Rating percentage for setting span width
  rate0 = 0;
  rate1 = 0;
  rate2 = 0;
  rate3 = 0;
  rate4 = 0;

  //Array with numbers of rating goin in order Excelent, Very Good, Average, Poor, Terrible
  ratingArray = [];

  currentSlide = 0;

  clients = []

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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private spinner: NgxSpinnerService,
    private designerService: DesignerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this._route.queryParams.subscribe(params => {
      if(params.section) {
        this.options.initialSlide = params.section;
      }
    });

    this.designerService.getDesignerClients().subscribe((res: any[]) => {
      this.clients = res
    })

    this.designerService.getDesignerStatistic().subscribe(res => {
      this.designerStatistic = res;
    })

    this.designerService.getDesignerRating().subscribe((res: any) => {
      this.spinner.hide();
      this.ratingArray = [res.fiveStar, res.fourStar, res.threeStar, res.twoStar, res.oneStar];
      this.rating = res.averageRating;
      this.star = Math.round(res.averageRating);
      this.numberOfRatings = this.ratingArray.reduce((a, b) => a + b, 0);

      const max = Math.max(...this.ratingArray);
      this.ratingArray.forEach((num, index) => {
        this['rate' + index] = Math.round(num / max * 100);
      });
    })

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
