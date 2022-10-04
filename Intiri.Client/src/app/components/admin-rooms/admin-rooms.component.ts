import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { RoomService } from 'src/app/services/room.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddRoomModalComponent } from '../modals/add-room-modal/add-room-modal.component';

@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss'],
})
export class AdminRoomsComponent implements OnInit {

  rooms: any[];

  constructor(public popoverController: PopoverController, private modalController: ModalController, private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe((res: any[]) => {
      this.rooms = res;
    })
  }

  async showSettings(e: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {material: true},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addMaterials() {
    const modal = await this.modalController.create({
      component: AddRoomModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

}
