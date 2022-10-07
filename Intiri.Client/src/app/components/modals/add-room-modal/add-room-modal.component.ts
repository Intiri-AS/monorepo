import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-add-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss'],
})
export class AddRoomModalComponent implements OnInit {

  constructor(private modalController: ModalController, private roomService: RoomService, private sanitizer: DomSanitizer) { }

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
    this.roomService.addRoom(this.room).subscribe(res => {
      if (typeof (res) === 'object') {
        this.roomService.getRooms();
        this.openSuccessModal();
      }
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom(this.item['id']).subscribe(res => {
        this.roomService.getRooms();
        this.modalController.dismiss();
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
