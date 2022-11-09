import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(public popoverController: PopoverController, private moodboardService: MoodboardService, private styleService: StyleService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.moodboardService.getMoodboards();
    this.styleService.getStyles();
    this.moodboards$.subscribe(moodboards => {
      this.spinner.hide();
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

  onTypeFilterChange(event){
    const selectedTypes = event.detail.value;
    this.moodboards$.pipe(take(1)).subscribe(moodboards => {
      if(selectedTypes.length > 0) {
        this.moodboards = []
        if(selectedTypes.includes('Template Moodboards')) {
          this.moodboards = moodboards.filter(moodboard => moodboard.isTemplate);
        }
        if(selectedTypes.includes('Non-Template Moodboards')) {
          this.moodboards = [...this.moodboards, ...moodboards.filter(moodboard => !moodboard.isTemplate)];
        }
      } else {
        this.moodboards = moodboards;
      }
    })
  }

}
