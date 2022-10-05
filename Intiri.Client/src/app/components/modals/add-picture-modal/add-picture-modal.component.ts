import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-add-picture-modal',
  templateUrl: './add-picture-modal.component.html',
  styleUrls: ['./add-picture-modal.component.scss'],
})
export class AddPictureModalComponent implements OnInit {

  constructor(private modalController: ModalController, private styleService: StyleService, private sanitizer: DomSanitizer) { }

  add: boolean;
  added: boolean;
  delete: boolean;

  item: {}

  styleImage = {
    styleId: null,
    imageFile: null
  }

  imagePath = null;

  styles$: Observable<any> = this.styleService.styles$;

  ngOnInit() {
    this.styleService.getStyles();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.styleImage.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.styleImage.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addStyleImage() {
    this.styleService.addStyleImage(this.styleImage).subscribe(res => {
      if (typeof (res) === 'object') {
        this.styleService.getStyleImages();
        this.openSuccessModal();
      }
    });
  }

  deleteStyleImage() {
    this.styleService.deleteStyleImage(this.item['id']).subscribe(res => {
        this.styleService.getStyleImages();
        this.modalController.dismiss();
    });
  }

  async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
