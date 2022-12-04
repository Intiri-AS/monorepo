import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-add-picture-modal',
  templateUrl: './add-picture-modal.component.html',
  styleUrls: ['./add-picture-modal.component.scss'],
})
export class AddPictureModalComponent implements OnInit {
  public addPictureForm: FormGroup;
  public editPictureForm: FormGroup;
  public isFormSubmited = false;

  get styleErrors() {
    return this.addPictureForm.controls.style.errors;
  }

  get imageFileErrors() {
    return this.addPictureForm.controls.imageFile.errors;
  }

  get editStyleErrors() {
    return this.editPictureForm.controls.style.errors;
  }

  constructor(
    private modalController: ModalController,
    private styleService: StyleService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {
    this.addPictureForm = this.formBuilder.group({
      style: ['', [Validators.required]],
      imageFile: ['', [Validators.required]]
    });
    this.editPictureForm = this.formBuilder.group({
      style: ['', [Validators.required]],
      imageFile: ['']
    });
  }

  add: boolean;
  added: boolean;
  delete: boolean;
  edit: boolean;

  item: any

  styleImage = {
    styleId: null,
    imageFile: null
  }

  imagePath = null;

  styles$: Observable<any> = this.styleService.styles$;

  ngOnInit() {
    this.styleService.getStyles();
    if (this.edit) {
      this.styleImage.styleId = this.item.styleId;
    }
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
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addPictureForm.valid) {
      this.spinner.hide();
      return;
    }
    this.styleService.addStyleImage(this.styleImage).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.styleService.getStyleImages();
        this.openSuccessModal();
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: this.translate.instant('NOTIFY.error'),
        type: 'error',
      });
    });
  }

  deleteStyleImage() {
    this.styleService.deleteStyleImage(this.item['id']).subscribe(res => {
        this.styleService.getStyleImages();
        this.modalController.dismiss();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.picture-deleted'),
          type: 'success',
        });
    }, e => {
      this.notifier.show({
        message: this.translate.instant('NOTIFY.error'),
        type: 'error',
      });
    });
  }

  editStyleImage() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.editPictureForm.valid) {
      this.spinner.hide();
      return;
    }
    this.styleService.editStyleImage(this.item.id, this.styleImage).subscribe(res => {
      this.spinner.hide();
      this.modalController.dismiss();
      if (typeof (res) === 'object') {
        this.styleService.getStyleImages();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.picture-saved'),
          type: 'success'
        });
      }
    }, e => {
      this.spinner.hide();
      this.notifier.show({
        message: this.translate.instant('NOTIFY.error'),
        type: 'error',
      });
    })
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
