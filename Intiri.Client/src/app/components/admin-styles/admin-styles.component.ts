import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddStyleModalComponent } from '../modals/add-style-modal/add-style-modal.component';

@Component({
  selector: 'app-admin-styles',
  templateUrl: './admin-styles.component.html',
  styleUrls: ['./admin-styles.component.scss'],
})
export class AdminStylesComponent implements OnInit {


  styles$: Observable<any> = this.styleService.styles$;

  constructor(public popoverController: PopoverController, private modalController: ModalController, private styleService: StyleService) { }

  ngOnInit() {
    this.styleService.getStyles();
  }

  async showSettings(e: Event, style) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {style: true, item: style},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addStyle() {
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }



}
