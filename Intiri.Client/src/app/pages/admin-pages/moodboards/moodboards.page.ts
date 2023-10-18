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

  private selectedStyleNames: any[] = [];
  private selectedTypes: any[] = [];

  constructor(
    public popoverController: PopoverController,
    private moodboardService: MoodboardService,
    private styleService: StyleService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.moodboardService.getMoodboards();
    this.styleService.getStyles();
    this.moodboards$.subscribe((moodboards) => {
      this.moodboards = moodboards;
      this.spinner.hide();
    });
  }

  async showSettings(e: Event, mb) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: { moodboard: true, item: mb },
      dismissOnSelect: true,
    });

    await popover.present();
  }

  onFilterChange(event) {
    this.selectedStyleNames = event.detail.value;
    this.moodboards$.pipe(take(1)).subscribe((moodboards) => {
      if (this.selectedStyleNames.length > 0 && this.selectedTypes.length > 0) {
        this.moodboards = moodboards.filter((moodboard) =>
          this.selectedStyleNames.includes(moodboard.style.name)
        );
        if (this.selectedTypes.length == 2) {
          this.moodboards = this.moodboards;
        } else {
          if (this.selectedTypes.includes('Template Moodboards')) {
            this.moodboards = this.moodboards.filter(
              (moodboard) => moodboard.isTemplate
            );
          } else if (this.selectedTypes.includes('Non-Template Moodboards')) {
            this.moodboards = this.moodboards.filter(
              (moodboard) => !moodboard.isTemplate
            );
          }
        }
      } else if (
        this.selectedStyleNames.length > 0 &&
        this.selectedTypes.length == 0
      ) {
        this.moodboards = moodboards.filter((moodboard) =>
          this.selectedStyleNames.includes(moodboard.style.name)
        );
      } else if (
        this.selectedStyleNames.length == 0 &&
        this.selectedTypes.length > 0
      ) {
        if (this.selectedTypes.length == 2) {
          this.moodboards = moodboards;
        } else {
          if (this.selectedTypes.includes('Template Moodboards')) {
            this.moodboards = moodboards.filter(
              (moodboard) => moodboard.isTemplate
            );
          } else if (this.selectedTypes.includes('Non-Template Moodboards')) {
            this.moodboards = moodboards.filter(
              (moodboard) => !moodboard.isTemplate
            );
          }
        }
      } else {
        this.moodboards = moodboards;
      }
    });
  }

  onTypeFilterChange(event) {
    this.selectedTypes = event.detail.value;
    this.moodboards$.pipe(take(1)).subscribe((moodboards) => {
      if (this.selectedStyleNames.length > 0 && this.selectedTypes.length > 0) {
        this.moodboards = moodboards.filter((moodboard) =>
          this.selectedStyleNames.includes(moodboard.style.name)
        );
        if (this.selectedTypes.length == 2) {
          this.moodboards = this.moodboards;
        } else {
          if (this.selectedTypes.includes('Template Moodboards')) {
            this.moodboards = this.moodboards.filter(
              (moodboard) => moodboard.isTemplate
            );
          } else if (this.selectedTypes.includes('Non-Template Moodboards')) {
            this.moodboards = this.moodboards.filter(
              (moodboard) => !moodboard.isTemplate
            );
          }
        }
      } else if (
        this.selectedStyleNames.length > 0 &&
        this.selectedTypes.length == 0
      ) {
        this.moodboards = moodboards.filter((moodboard) =>
          this.selectedStyleNames.includes(moodboard.style.name)
        );
      } else if (
        this.selectedStyleNames.length == 0 &&
        this.selectedTypes.length > 0
      ) {
        if (this.selectedTypes.length == 2) {
          this.moodboards = moodboards;
        } else {
          if (this.selectedTypes.includes('Template Moodboards')) {
            this.moodboards = moodboards.filter(
              (moodboard) => moodboard.isTemplate
            );
          } else if (this.selectedTypes.includes('Non-Template Moodboards')) {
            this.moodboards = moodboards.filter(
              (moodboard) => !moodboard.isTemplate
            );
          }
        }
      } else {
        this.moodboards = moodboards;
      }
    });
  }
}
