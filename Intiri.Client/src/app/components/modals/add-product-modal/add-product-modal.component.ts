import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PartnerService } from 'src/app/services/partner.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';

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

  item: {}
  delete;


  constructor(private sanitizer: DomSanitizer, private modalController: ModalController, private partnerService: PartnerService, private spinner: NgxSpinnerService, private notifier: NotifierService) { }

  ngOnInit() {
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

  deleteProduct() {
    this.spinner.show();
    this.partnerService.deleteProduct(this.item['id']).subscribe(res => {
        this.spinner.hide();
        this.modalController.dismiss();
        location.reload();
    }, () => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Cannot remove product.',
        type: 'error',
      });
    });
  }

}
