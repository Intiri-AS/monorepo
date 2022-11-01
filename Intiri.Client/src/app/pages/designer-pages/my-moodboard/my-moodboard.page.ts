import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, PopoverController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs/operators';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { StylePopoverComponent } from 'src/app/components/popovers/style-popover/style-popover.component';
import { Moodboard } from 'src/app/models/moodboard.model';
import { AccountService } from 'src/app/services/account.service';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { StyleService } from 'src/app/services/style.service';

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


  searchText: any;
  innerWidth;
  currentSlide = 0;
  moodboards$ = this.moodboardService.moodboards$;
  moodboards: Moodboard[];
  myMoodboards: Moodboard[];
  styles$ = this.styleService.styles$;
  loggedUser$ = this.accountService.currentUser$;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private popoverController: PopoverController,
    private moodboardService: MoodboardService,
    private styleService: StyleService,
    private accountService: AccountService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.moodboardService.getMoodboards();
    this.styleService.getStyles();

    this.moodboards$.subscribe(moodboards => {
      this.spinner.hide();
      this.moodboards = moodboards;
      this.accountService.currentUser$.subscribe((loggedUser) => {
        this.myMoodboards = this.moodboards.filter(m => m.designer.id === loggedUser.id)
      });
    });

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

  getMbPiecesNo(moodboard){
    let result = 0;
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    return result;
  }

  async showSettings(e: Event, mb) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {moodboard: true, designerMb: true, item: mb},
      dismissOnSelect: true
    });

    await popover.present();
  }

  onFilterChange(event){
    const selectedStyleNames = event.detail.value;
    this.moodboards$.pipe(take(1)).subscribe(moodboards => {
      if(selectedStyleNames.length > 0) {
        this.moodboards = moodboards.filter(moodboard => selectedStyleNames.includes(moodboard.style.name));
      } else {
        this.moodboards = moodboards;
      }
    })
  }

}
