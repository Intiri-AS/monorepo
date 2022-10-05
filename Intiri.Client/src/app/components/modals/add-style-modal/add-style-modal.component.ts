import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { StyleService } from 'src/app/services/style.service';
@Component({
  selector: 'app-add-style-modal',
  templateUrl: './add-style-modal.component.html',
  styleUrls: ['./add-style-modal.component.scss'],
})
export class AddStyleModalComponent implements OnInit {

  constructor(private modalController: ModalController, private styleService: StyleService, private sanitizer: DomSanitizer) { }

  add: boolean;
  added: boolean;
  delete: boolean;

  item: {}

  style = {
    name: '',
    description: '',
    imageFile: null
  }

  imagePath = null;

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.style.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.style.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addStyle() {
    this.styleService.addStyle(this.style).subscribe(res => {
      if (typeof (res) === 'object') {
        this.styleService.getStyles();
        this.openSuccessModal();
      }
    });
  }

  deleteStyle() {
    this.styleService.deleteStyle(this.item['id']).subscribe(res => {
        this.styleService.getStyles();
        this.modalController.dismiss();
    });
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddStyleModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
