import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddRoomModalComponent } from '../modals/add-room-modal/add-room-modal.component';

@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss'],
})
export class AdminRoomsComponent implements OnInit {

  rooms$: Observable<any> = this.roomService.rooms$;
  roomTypes: [];

  constructor(public popoverController: PopoverController, private modalController: ModalController, private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms()
    this.roomService.getRoomTypes().subscribe((res: []) => {
      this.roomTypes = res;
    })
  }

  async showSettings(e: Event, room) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {room: true, item: room},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addRoom() {
    const modal = await this.modalController.create({
      component: AddRoomModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
