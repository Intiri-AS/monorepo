import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  imagePath = null;

  room = {
    name: '',
    roomTypeId: null,
    imageFile: null,
    description: ''
  }

  constructor(private sanitizer: DomSanitizer, private modalController: ModalController) { }

  ngOnInit() {}

  onFileChange(event) {
    if(event.target.files[0]) {
      this.room.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.room.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  AddProduct() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
