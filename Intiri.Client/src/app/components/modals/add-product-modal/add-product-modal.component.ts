import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ColorService } from '../../../services/color.service'

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  imagePath = null;
  userForm: FormGroup

  colors$ = this.colorService.colorPalettes$

  room = {
    name: '',
    roomTypeId: null,
    imageFile: null,
    description: ''
  }

  constructor(private sanitizer: DomSanitizer,
              private modalController: ModalController, 
              private fb: FormBuilder,
              private colorService: ColorService) { }

  ngOnInit() {
    this.colorService.getColorPalettes()
    this.userForm = this.fb.group({
        productName: "",
        productType: "",
        productMaterial: "",
        color: "",
        price: "",
        description: "",
        productImage: ""
  });
  }

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
