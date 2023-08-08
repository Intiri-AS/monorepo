import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
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

  get roomTypeErrors () {
    return this.addPictureForm.controls.roomType.errors;
  }

  get providerErrors () {
    return this.addPictureForm.controls.provider.errors;
  }

  get imageFileErrors() {
    return this.addPictureForm.controls.imageFiles.errors;
  }

  get editStyleErrors() {
    return this.editPictureForm.controls.style.errors;
  }

  get editRoomTypeErrors() {
    return this.editPictureForm.controls.roomType.errors;
  }

  get editProviderErrors() {
    return this.editPictureForm.controls.provider.errors;
  }

  constructor(
    private modalController: ModalController,
    private styleService: StyleService,
    private roomService: RoomService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {
    this.addPictureForm = this.formBuilder.group({
      style: ['', [Validators.required]],
      roomType: ['', [Validators.required]],
      provider: ['', Validators.required],
      imageFiles: ['', [Validators.required]]
    });
    this.editPictureForm = this.formBuilder.group({
      style: ['', [Validators.required]],
      roomType: [''],
      provider: [''],
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
    roomId: null,
    imageFiles: [],
    provider: ''
  }

  imagePath = null;
  imagePaths:Array<any> = [];

  MAX_FILE_SIZE_LIMIT = 5000000;
  imageFileSizeExceededMaxLimit: boolean = false;

  styles$: Observable<any> = this.styleService.styles$;
  rooms$: Observable<any> = this.roomService.rooms$;
  providers$: Array<any> = [
    'Flügger',
    'Tarkett',
    'Flotte gulv',
    'Epoq',
    'Rotpunkt',
    'Lampemagasinet',
    'Flisekompaniet',
    'Ellos'
  ];

  ngOnInit() {
    this.styleService.getStyles();
    this.roomService.getRooms();
    if (this.edit) {
      console.log('edit', this.item);
      this.styleImage.styleId = this.item.styleId;
      this.styleImage.roomId = this.item.roomId;
      this.styleImage.provider = this.item.provider;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.styleImage.imageFiles = event.target.files;

      let fileSizeExceedslimit= Object.keys(this.styleImage.imageFiles).some((key, i) => this.checkIfFileSizeExceedMaxLimit(this.styleImage.imageFiles[key]))

      if (fileSizeExceedslimit) {
        this.imageFileSizeExceededMaxLimit = true;
        this.styleImage.imageFiles = [];
        this.imagePaths = [];
        return;
      } else {
        this.imageFileSizeExceededMaxLimit = false;
        this.imagePaths = Object.keys(this.styleImage.imageFiles).map((key, i) => {
          return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.styleImage.imageFiles[key]))
        });
      }
    }
  }

  checkIfFileSizeExceedMaxLimit (file) {
    return file.size > this.MAX_FILE_SIZE_LIMIT;
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
    console.log('editStyleImage', this.styleImage);
    // return;
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
