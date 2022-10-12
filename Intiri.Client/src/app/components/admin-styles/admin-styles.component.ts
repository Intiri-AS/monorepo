import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { StyleService } from 'src/app/services/style.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddStyleModalComponent } from '../modals/add-style-modal/add-style-modal.component';

@Component({
  selector: 'app-admin-styles',
  templateUrl: './admin-styles.component.html',
  styleUrls: ['./admin-styles.component.scss'],
})
export class AdminStylesComponent implements OnInit {

  searchText: any;
  styles$: Observable<any> = this.styleService.styles$;
  styles: any[];

  constructor(public popoverController: PopoverController, private modalController: ModalController, private styleService: StyleService) { }

  ngOnInit() {
    this.styleService.getStyles();

    this.styles$.pipe(take(1)).subscribe(styles => { 
      this.styles = styles;
    });
  }

  async showSettings(e: Event, style) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {style: true, item: style},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addStyle() {
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

  onFilterChange(event){
      const selectedStyleNames = event.detail.value;
      this.styles$.pipe(take(1)).subscribe(styles => {
        if(selectedStyleNames.length > 0) {
          this.styles = styles.filter(style => selectedStyleNames.includes(style.name));  
        } else {
          this.styles = styles;
        }
      })
  }

}
