import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { StyleService } from 'src/app/services/style.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-moodboards',
  templateUrl: './moodboards.page.html',
  styleUrls: ['./moodboards.page.scss'],
})
export class MoodboardsPage implements OnInit {

  moodboards: [];
  styles: [];

  constructor(public popoverController: PopoverController, private moodboardService: MoodboardService, private styleService: StyleService) { }

  ngOnInit() {
    this.moodboardService.getMoodboards().subscribe((res: []) => {
      this.moodboards = res;
    })
    this.styleService.getStyles().subscribe((res: []) => {
      this.styles = res;
    })
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
