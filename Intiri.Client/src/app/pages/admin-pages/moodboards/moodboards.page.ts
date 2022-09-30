import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';

@Component({
  selector: 'app-moodboards',
  templateUrl: './moodboards.page.html',
  styleUrls: ['./moodboards.page.scss'],
})
export class MoodboardsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {moodboard: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

}
