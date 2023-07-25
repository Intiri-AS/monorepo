import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-add-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss'],
})
export class AddRoomModalComponent implements OnInit {
  public addRoomForm: FormGroup;
  public editRoomForm: FormGroup;
  public isFormSubmited = false;

  get nameErrors() {
    return this.addRoomForm.controls.name.errors;
  }

  get typeErrors() {
    return this.addRoomForm.controls.type.errors;
  }

  get nameNorwegianErrors () {
    return this.addRoomForm.controls.nameNorwegian.errors;
  }

  get descriptionErrors() {
    return this.addRoomForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addRoomForm.controls.imageFile.errors;
  }

  get editNameErrors() {
    return this.editRoomForm.controls.name.errors;
  }

  get editTypeErrors() {
    return this.editRoomForm.controls.type.errors;
  }

  get editDescriptionErrors() {
    return this.editRoomForm.controls.description.errors;
  }

  constructor(
    private modalController: ModalController,
    private roomService: RoomService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private translate: TranslateService
  ) {
    this.addRoomForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      nameNorwegian: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFile: ['', [Validators.required]]
    });
    this.editRoomForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFile: ['']
    });
  }

  add: boolean;
  added: boolean;
  delete: boolean;
  edit: boolean;

  item: any;

  room = {
    name: '',
    nameNorwegian: '',
    roomTypeId: null,
    imageFile: null,
    description: ''
  }

  imagePath = null;

  roomTypes: any[];

  ngOnInit() {
    this.roomService.getRoomTypes().subscribe((res: []) => {
      this.roomTypes = res;
    })
    if (this.edit) {
      this.room.name = this.item.name;
      this.room.roomTypeId = this.item.roomTypeId;
      this.room.description = this.item.description;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.room.imageFile = event.target.files[0];
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.room.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  addRoom() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.addRoomForm.valid) {
      this.spinner.hide();
      return;
    }
    this.roomService.addRoom(this.room).subscribe(res => {
      this.spinner.hide();
      if (typeof (res) === 'object') {
        this.roomService.getRooms();
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

  deleteRoom() {
    this.roomService.deleteRoom(this.item['id']).subscribe(res => {
        this.roomService.getRooms();
        this.modalController.dismiss();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.room-deleted'),
          type: 'success',
        });
    }, e => {
      this.notifier.show({
        message: this.translate.instant('NOTIFY.error'),
        type: 'error',
      });
    });
  }

  editRoom() {
    this.spinner.show();
    this.isFormSubmited = true;
    if (!this.editRoomForm.valid) {
      this.spinner.hide();
      return;
    }
    this.roomService.editRoom(this.item.id, this.room).subscribe(res => {
      this.spinner.hide();
      this.modalController.dismiss();
      if (typeof (res) === 'object') {
        this.roomService.getRooms();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.room-saved'),
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
      component: AddRoomModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
