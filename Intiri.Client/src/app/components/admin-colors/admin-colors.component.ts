import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ColorService } from 'src/app/services/color.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddColorModalComponent } from '../modals/add-color-modal/add-color-modal.component';

@Component({
  selector: 'app-admin-colors',
  templateUrl: './admin-colors.component.html',
  styleUrls: ['./admin-colors.component.scss'],
})
export class AdminColorsComponent implements OnInit {

  colorPalettes: any[];
  constructor(public popoverController: PopoverController, private modalController: ModalController, private colorService: ColorService) { }

  ngOnInit() {
    this.colorService.getColorPalettes().subscribe((res: any[]) => {
      this.colorPalettes = res;
    })
  }

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {material: true},
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
