import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent implements OnInit {

  constructor(public accountService: AccountService, private modalController: ModalController,  private nav: NavController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({'dismissed': true})
  }

  logout() {
    this.dismiss();
    this.accountService.logout();
    this.nav.navigateRoot('/login');
  }

}
