import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, ModalController, PopoverController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { AddPartnerModalComponent } from 'src/app/components/modals/add-partner-modal/add-partner-modal.component';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.page.html',
  styleUrls: ['./add-partner.page.scss'],
})
export class AddPartnerPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  partner;
  added: boolean;
  delete: boolean;

  item: {}

  options = {
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  }

  constructor(private modalController: ModalController, private route: ActivatedRoute, private router: Router,public popoverController: PopoverController, private partnerService: PartnerService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe(data => {
      this.partner = data.partner;
    })
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  async showSettings(e: Event, item) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {contact: true, item},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async openAddContactModal(partnerId) {
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {nextPage: true, partnerId: partnerId},
      cssClass: 'add-partner-contact-modal-css'
    });

    await modal.present();
  }

  deleteContact() {
    this.partnerService.deletePartnerContact(this.item['id']).subscribe(res => {
        location.reload();
    });
  }
  
  dismissModal() {
    this.modalController.dismiss();
  }

}
