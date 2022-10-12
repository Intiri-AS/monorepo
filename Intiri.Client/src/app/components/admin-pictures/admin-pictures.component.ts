import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddPictureModalComponent } from '../modals/add-picture-modal/add-picture-modal.component';

@Component({
  selector: 'app-admin-pictures',
  templateUrl: './admin-pictures.component.html',
  styleUrls: ['./admin-pictures.component.scss'],
})
export class AdminPicturesComponent implements OnInit {

  styleImages$: Observable<any> = this.styleService.styleImages$;
  searchText: any;

  constructor(public popoverController: PopoverController, private styleService: StyleService, private modalController: ModalController) { }

  ngOnInit() {
    this.styleService.getStyleImages();
  }

  async showSettings(e: Event, styleImage) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {picture: true, item: styleImage},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addPicture() {
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
