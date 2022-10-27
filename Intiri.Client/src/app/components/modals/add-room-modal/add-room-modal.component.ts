import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
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
  public isFormSubmited = false;

  get nameErrors() {
    return this.addRoomForm.controls.name.errors;
  }

  get typeErrors() {
    return this.addRoomForm.controls.type.errors;
  }

  get descriptionErrors() {
    return this.addRoomForm.controls.description.errors;
  }

  get imageFileErrors() {
    return this.addRoomForm.controls.imageFile.errors;
  }

  constructor(
    private modalController: ModalController,
    private roomService: RoomService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {
    this.addRoomForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageFile: ['', [Validators.required]]
    });
  }

  add: boolean;
  added: boolean;
  delete: boolean;

  item: {}

  room = {
    name: '',
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
        message: 'Something went wrong!',
        type: 'error',
      });
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom(this.item['id']).subscribe(res => {
        this.roomService.getRooms();
        this.modalController.dismiss();
        this.notifier.show({
          message: 'Room deleted successfully',
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
      component: AddRoomModalComponent,
      componentProps: {added: true},
      cssClass: 'added-designer-modal-css'
    });

    await modal.present();
  }

}
