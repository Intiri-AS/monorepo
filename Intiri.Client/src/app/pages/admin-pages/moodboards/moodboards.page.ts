import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-moodboards',
  templateUrl: './moodboards.page.html',
  styleUrls: ['./moodboards.page.scss'],
})
export class MoodboardsPage implements OnInit {

  moodboards$ = this.moodboardService.moodboards$;
  styles$ = this.styleService.styles$;

  constructor(public popoverController: PopoverController, private moodboardService: MoodboardService, private styleService: StyleService) { }

  ngOnInit() {
    this.moodboardService.getMoodboards();
    this.styleService.getStyles();
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
