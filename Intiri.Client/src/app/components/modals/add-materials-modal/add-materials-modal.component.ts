import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-add-materials-modal',
  templateUrl: './add-materials-modal.component.html',
  styleUrls: ['./add-materials-modal.component.scss'],
})
export class AddMaterialsModalComponent implements OnInit {

  constructor(private modalController: ModalController, private materialService: MaterialService, private sanitizer: DomSanitizer) { }

  add: boolean;
  added: boolean;
  delete: boolean;

  item: {}

  material = {
    name: '',
    materialTypeId: null,
    imageFile: null,
    description: ''
  }

  imagePath = null;

  materialTypes: any[];

  ngOnInit() {
    this.materialService.getMaterialTypes().subscribe((res: []) => {
      this.materialTypes = res;
    })
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.material.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.material.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addMaterial() {
    this.materialService.addMaterial(this.material).subscribe(res => {
      if (typeof (res) === 'object') {
        this.materialService.getMaterials();
        this.openSuccessModal();
      }
    });
  }

  deleteMaterial() {
    this.materialService.deleteMaterial(this.item['id']).subscribe(res => {
        this.materialService.getMaterials();
        this.modalController.dismiss();
    });
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddMaterialsModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
