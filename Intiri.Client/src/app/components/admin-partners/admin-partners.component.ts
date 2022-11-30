import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PartnerService } from 'src/app/services/partner.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddPartnerModalComponent } from '../modals/add-partner-modal/add-partner-modal.component';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss'],
})
export class AdminPartnersComponent implements OnInit {

  partners: any[];
  partners$: Observable<any> = this.partnerService.partners$;
  searchText: any;

  constructor(
    private modalController: ModalController,
    private partnerService: PartnerService,
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    this.partnerService.getPartners();
    this.partners$.pipe(take(1)).subscribe(partners => {
      this.partners = partners;
    });
  }

  async addPartner() {
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {nextPage: false},
      cssClass: 'add-partner-modal-css'
    });

    await modal.present();
  }

  async showSettings(e: Event, partner) {
    e.stopPropagation();
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {partner: true, item: partner},
      dismissOnSelect: true
    });

    await popover.present();
  }

}
