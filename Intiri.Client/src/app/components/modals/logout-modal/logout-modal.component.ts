import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent implements OnInit {

  constructor(private modalController: ModalController,  private nav: NavController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({'dismissed': true})
  }

  logout() {
    this.dismiss();
    this.nav.navigateRoot('/login');
  }

}
