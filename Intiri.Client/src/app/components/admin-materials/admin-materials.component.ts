import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { MaterialService } from 'src/app/services/material.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddMaterialsModalComponent } from '../modals/add-materials-modal/add-materials-modal.component';

@Component({
  selector: 'app-admin-materials',
  templateUrl: './admin-materials.component.html',
  styleUrls: ['./admin-materials.component.scss'],
})
export class AdminMaterialsComponent implements OnInit {

  materials$: Observable<any> = this.materialService.materials$;
  materials: any[];
  materialTypes: any[];

  constructor(public popoverController: PopoverController, private modalController: ModalController, private materialService: MaterialService) { }

  ngOnInit() {
    this.materialService.getMaterials();
    this.materialService.getMaterialTypes().subscribe((res: []) => {
      this.materialTypes = res;
    })
    this.materials$.pipe(take(1)).subscribe(materials => { 
      this.materials = materials;
    });
  }

  async showSettings(e: Event, material) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {material: true, item: material},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addMaterials() {
    const modal = await this.modalController.create({
      component: AddMaterialsModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

  onFilterChange(event){
    console.log(event)
    const selectedTypeNames = event.detail.value;
    this.materials$.pipe(take(1)).subscribe(materials => {
      if(selectedTypeNames.length > 0) {
        this.materials = materials.filter(material => selectedTypeNames.includes(material.materialTypeName));  
      } else {
        this.materials = materials;
      }
    })
}

}
