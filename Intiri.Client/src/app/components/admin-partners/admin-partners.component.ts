import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPartnerModalComponent } from '../modals/add-partner-modal/add-partner-modal.component';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss'],
})
export class AdminPartnersComponent implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
      
  }

  async addPartner() {
    const modal = await this.modalController.create({
      component: AddPartnerModalComponent,
      componentProps: {nextPage: false},
      cssClass: 'add-partner-modal-css'
    });

    await modal.present();
  }

}
