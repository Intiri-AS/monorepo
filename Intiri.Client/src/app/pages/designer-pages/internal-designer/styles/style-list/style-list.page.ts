import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StylePopoverComponent } from 'src/app/components/popovers/style-popover/style-popover.component';

@Component({
  selector: 'app-style-list-page',
  templateUrl: './style-list.page.html',
  styleUrls: ['./style-list.page.scss'],
})

export class StyleListPage {

  styles = [
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
    {
      image: '../../../../../assets/images/landing-img.png',
      name: 'Vintage'
    },
  ]

  constructor(
    private popoverController: PopoverController
  ) {}

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: StylePopoverComponent,
      event: e,
      dismissOnSelect: true
    });

    await popover.present();
  }
}
