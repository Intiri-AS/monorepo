import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { MaterialService } from 'src/app/services/material.service';
import { PartnerService } from 'src/app/services/partner.service';
import { ColorService } from '../../../services/color.service'

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  submitted = false;

  item: {}
  delete;

  imagePath = null;
  userForm: FormGroup

  colorPallete = {
    name: '',
    number: null,
    mainColor: '',
  }

  colors$ = this.colorService.colors$
  materials$ = this.materialService.materials$
  productsType: any = [];
  materials: any = [];
  colors: any = [];
  colorHexValue = ''

  productData: any = {
    productName: "",
    productType: "",
    productMaterial: "",
    color: "",
    price: "",
    description: "",
    imageFile: ""
  }

  constructor(private sanitizer: DomSanitizer,
              private modalController: ModalController, 
              private fb: FormBuilder,
              private colorService: ColorService,
              private materialService: MaterialService,
              private partnerService: PartnerService,
              private notifier: NotifierService,
              private spinner: NgxSpinnerService,
              ) { }

  ngOnInit() {
    this.colorService.getColors()
    this.materialService.getMaterials()
    this.partnerService.getProductsType().subscribe( response => {
      this.productsType = response  
    })
   this.colors$.subscribe(response => {
    this.colors = response
   }) ;
   this.materials$.subscribe(response => {
    this.materials = response
   }) ;

    this.userForm = this.fb.group({
        productName: ['' || undefined, Validators.required],
        productType: ['', Validators.required],
        productMaterial: ['', Validators.required],
        color: ['', Validators.required],
        price: ['', Validators.required],
        imageUrl: ['', Validators.required],
        description: "",
  });
  }

  get form() { return this.userForm.controls; }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.productData.imageFile = event.target.files[0];
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
    this.AddProduct()
}

  AddProduct() {  
    this.productData = {
      name: this.userForm.value.productName,
      productTypeId: Number(this.userForm.value.productType),
      materialId: Number(this.userForm.value.productMaterial),
      color: this.userForm.value.color,
      price: Number(this.userForm.value.price),
      description: this.userForm.value?.description || undefined,
      imageFile: this.productData.imageFile
    }
    this.partnerService.addPartnerProduct(this.productData).subscribe( response => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Product added successfully',
        type: 'success',
      });
      this.partnerService.getProductsFromThatPartner().subscribe();
      this.dismissModal()
    }, error => {
      this.spinner.hide();
      this.notifier.show({
        message: error.error,
        type: 'error',
      });
      setTimeout(() => this.dismissModal(), 2000)
    });
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
