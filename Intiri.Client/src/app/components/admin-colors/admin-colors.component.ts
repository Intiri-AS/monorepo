import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddColorModalComponent } from '../modals/add-color-modal/add-color-modal.component';

@Component({
  selector: 'app-admin-colors',
  templateUrl: './admin-colors.component.html',
  styleUrls: ['./admin-colors.component.scss'],
})
export class AdminColorsComponent implements OnInit {

  colorPalettes$: Observable<any> = this.colorService.colorPalettes$;

  constructor(public popoverController: PopoverController, private modalController: ModalController, private colorService: ColorService) { }

  ngOnInit() {
    this.colorService.getColorPalettes();
  }

  async showSettings(e: Event, color) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {color: true, item: color},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addColor() {
    const modal = await this.modalController.create({
      component: AddColorModalComponent,
      componentProps: {add: true},
      cssClass: 'add-color-modal-css'
    });

    await modal.present();
  }

}
