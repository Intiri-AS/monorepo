import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { take } from 'rxjs/operators';
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
  moodboards: any[];
  styles$ = this.styleService.styles$;
  searchText: any;

  constructor(public popoverController: PopoverController, private moodboardService: MoodboardService, private styleService: StyleService) { }

  ngOnInit() {
    this.moodboardService.getMoodboards();
    this.styleService.getStyles();
    this.moodboards$.subscribe(moodboards => {
      this.moodboards = moodboards;
    });
  }

  async showSettings(e: Event, mb) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {moodboard: true, item: mb},
      dismissOnSelect: true
    });

    await popover.present();
  }

  onFilterChange(event){
    const selectedStyleNames = event.detail.value;
    this.moodboards$.pipe(take(1)).subscribe(moodboards => {
      if(selectedStyleNames.length > 0) {
        this.moodboards = moodboards.filter(moodboard => selectedStyleNames.includes(moodboard.style.name));  
      } else {
        this.moodboards = moodboards;
      }
    })
}

}
