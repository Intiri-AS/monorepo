import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialService } from 'src/app/services/material.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  submitted = false;

  added;
  add: boolean;
  edit: boolean;

  item: any = {};
  delete;

  imagePath = null;
  userForm: FormGroup;
  editProductForm: FormGroup;

  colorPallete = {
    name: '',
    number: null,
    mainColor: '',
  };

  colors$ = this.colorService.colors$;
  materials$ = this.materialService.materials$;
  productsType: any = [];
  materials: any = [];
  colors: any = [];
  colorHexValue = '';

  productData: any = {
    productName: '',
    productType: '',
    productMaterial: '',
    color: '',
    price: '',
    description: '',
    imageFile: ''
  };

  product: any = {
    name: '',
    materialId: null,
    productTypeId: null,
    price: null,
    color: '',
    description: '',
    imageFile: null,
  }

  constructor(private sanitizer: DomSanitizer,
              private modalController: ModalController,
              private fb: FormBuilder,
              private colorService: ColorService,
              private materialService: MaterialService,
              private partnerService: PartnerService,
              private notifier: NotifierService,
              private spinner: NgxSpinnerService,
              ) {
                this.editProductForm = this.fb.group({
                  productName: ['' || undefined, Validators.required],
                  productType: ['', Validators.required],
                  productMaterial: ['', Validators.required],
                  color: ['', Validators.required],
                  price: ['', Validators.required],
                  imageFile: [''],
                  description: [''],
                });
              }

  get form() { return this.userForm.controls; }
  get editForm() { return this.editProductForm.controls; }

  ngOnInit() {
    this.colorService.getColors();
    this.materialService.getMaterials();
    this.partnerService.getProductsType().subscribe( response => {
      this.productsType = response;
    });
    this.colors$.subscribe(response => {
      this.colors = response;
    }) ;
    this.materials$.subscribe(response => {
      this.materials = response;
    }) ;
    if (this.edit) {
      const {id, imagePath, ...others} = this.item;
      this.product = others;
    }
    this.userForm = this.fb.group({
        productName: ['' || undefined, Validators.required],
        productType: ['', Validators.required],
        productMaterial: ['', Validators.required],
        color: ['', Validators.required],
        price: ['', Validators.required],
        imageUrl: ['', Validators.required],
        description: '',
    });
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.productData.imageFile = event.target.files[0];
      this.product.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.productData.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    if (this.userForm.invalid) {
    this.spinner.hide();
    return;
    }
    this.addProduct();
}

  addProduct() {
    this.productData = {
      name: this.userForm.value.productName,
      productTypeId: Number(this.userForm.value.productType),
      materialId: Number(this.userForm.value.productMaterial),
      color: this.userForm.value.color,
      price: Number(this.userForm.value.price),
      description: this.userForm.value?.description || undefined,
      imageFile: this.productData.imageFile
    };
    this.partnerService.addPartnerProduct(this.productData).subscribe( response => {
      this.spinner.hide();
      this.openSuccessModal();
      this.partnerService.getProductsFromThatPartner();
      this.dismissModal();
    }, error => {
      this.spinner.hide();
      this.notifier.show({
        message: error.error,
        type: 'error',
      });
      setTimeout(() => this.dismissModal(), 2000);
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  deleteProduct() {
    this.spinner.show();
    this.partnerService.deleteProduct(this.item.id).subscribe(res => {
        this.spinner.hide();
        this.modalController.dismiss();
        this.partnerService.getProductsFromThatPartner();
    }, () => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Cannot remove product.',
        type: 'error',
      });
    });
  }

  editProduct() {
    this.spinner.show();
    this.submitted = true;
    if (!this.editProductForm.valid) {
      this.spinner.hide();
      return;
    }
    this.partnerService.editProduct(this.item.id, this.product).subscribe(res => {
      this.spinner.hide();
      this.modalController.dismiss();
      if (typeof (res) === 'object') {
        this.partnerService.getProductsFromThatPartner();
        this.notifier.show({
          message: "Product changes saved successfully!",
          type: 'success'
        });
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    })
  }

    async openSuccessModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: AddProductModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
