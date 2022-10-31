import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { StyleService } from 'src/app/services/style.service';
@Component({
  selector: 'app-add-style-modal',
  templateUrl: './add-style-modal.component.html',
  styleUrls: ['./add-style-modal.component.scss'],
})
export class AddStyleModalComponent implements OnInit {
  public addStyleForm: FormGroup;
  public isFormSubmited = false;

  get nameErrors() {
    return this.addStyleForm.controls.name.errors;
  }

  get descriptionErrors() {
    return this.addStyleForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addStyleForm.controls.imageFile.errors;
  }

  constructor(
    private modalController: ModalController,
    private styleService: StyleService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {
    this.addStyleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFile: ['', [Validators.required]]
    });
  }

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
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addStyleForm.valid) {
      this.spinner.hide();
      return;
    }
    this.styleService.addStyle(this.style).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.styleService.getStyles();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
    });
  }

  deleteStyle() {
    this.styleService.deleteStyle(this.item['id']).subscribe(res => {
        this.styleService.getStyles();
        this.modalController.dismiss();
        this.notifier.show({
          message: 'Style deleted successfully',
          type: 'success',
        });
    }, e => {
      this.notifier.show({
        message: 'Something went wrong!',
        type: 'error',
      });
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
