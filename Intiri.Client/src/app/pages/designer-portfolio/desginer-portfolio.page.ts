import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BookDesignerModalComponent } from 'src/app/components/modals/book-designer-modal/book-designer-modal.component';
import { Project } from 'src/app/models/project.model';
import { AccountService } from 'src/app/services/account.service';
import { DesignerService } from 'src/app/services/designer.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-designer-portfolio',
  templateUrl: './designer-portfolio.page.html',
  styleUrls: ['./designer-portfolio.page.scss'],
})

export class DesignerPortfolioPage implements OnInit, OnDestroy {

  @ViewChild('slides') slides: IonSlides;

  @ViewChild(IonContent) content: IonContent;

  isScrolledDown: boolean;

  designerId: any;
  designerDetails$: BehaviorSubject<any>;

  designerDetailsSubscription$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private designerService: DesignerService,
    private accountService: AccountService,
    private modalController: ModalController,
  ) {
    this.designerDetails$ = new BehaviorSubject(null);
  }


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

  ngOnInit(): void {
    this.designerId = this.route.snapshot.params.id;
    this.designerDetailsSubscription$ = this.designerService.getDesignerPortfolio(this.designerId).subscribe(res => {
      this.designerDetails$.next(res);
    });
  }

  ngOnDestroy(): void {
    this.designerDetailsSubscription$.unsubscribe();
  }

  async logScrollEnd() {
    const scrollElement = await this.content.getScrollElement(); // get scroll element
    this.isScrolledDown = scrollElement.scrollTop > 70;
  }

  getDesignerServices(): Array<string> {
    let services: Array<string>;
    this.designerDetails$.subscribe(res => {
      services = res.designerInfo.areaOfExpertise.split(',');
    })
    return services;
  }

  getOptions(){
    return window.innerWidth > 700 ? {slidesPerView: 2} : {slidesPerView: 1}
  }

  removeProjectDraft(){
    this.projectService.setCurrentProject(new Project());
  }

  checkIfUserLoggedIn(): boolean {
    let isUserLoggedIn = false;
    this.accountService.currentUser$.subscribe((user) => {
      if (user) {
        isUserLoggedIn = true;
      }
    });
    return isUserLoggedIn;
  }

  async paymentModal(designer) {
    const modal = await this.modalController.create({
      component: BookDesignerModalComponent,
      componentProps: {designer, moodboard: true},
      cssClass: 'book-designer-modal-css',
    });

    await modal.present();
  }

  bookConsultation(): void {
    if (this.checkIfUserLoggedIn()) {
      this.designerDetails$.subscribe(async res => {
        await this.paymentModal(res);
      })
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
