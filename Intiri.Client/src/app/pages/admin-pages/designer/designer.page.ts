import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component';
import { AddDesignerModalComponent } from 'src/app/components/modals/add-designer-modal/add-designer-modal.component';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-designer-page',
  templateUrl: './designer.page.html',
  styleUrls: ['./designer.page.scss'],
})

export class DesignerPage {

  languages = this.designerService.languages;
  designers$: Observable<any> = this.designerService.designers$;
  designers: any[];

  searchText: any;

  constructor( public popoverController: PopoverController, private modalController: ModalController, private designerService: DesignerService) {}

  ngOnInit() {
    this.designerService.getDesigners();
    this.designers$.pipe(take(1)).subscribe(designers => { 
      this.designers = designers;
    });
  }

  getDesignerType(d) {
    const role = d.roles[0].name;
    if(role === 'InternalDesigner') {
      return 'Intiri Designer'
    } else if(role === 'ExternalDesigner') {
      return 'External Designer'
    }
    return role;
  }

  async showSettings(e: Event, designer) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {designer: true, item: designer},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addDesigner() {
    const modal = await this.modalController.create({
      component: AddDesignerModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

  onFilterChange(event){
    const selectedStatus = event.detail.value;
    this.designers$.pipe(take(1)).subscribe(designers => {
      if(selectedStatus.length > 0) {
        this.designers = designers.filter(designer => selectedStatus.includes(designer.roles[0].name));
      } else {
        this.designers = designers;
      }
    })
  }

}
