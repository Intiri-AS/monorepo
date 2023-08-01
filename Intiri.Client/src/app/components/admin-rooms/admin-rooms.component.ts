import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddRoomModalComponent } from '../modals/add-room-modal/add-room-modal.component';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.scss'],
})
export class AdminRoomsComponent implements OnInit {

  rooms$: Observable<any> = this.roomService.rooms$;
  roomTypes: [];
  searchText: any;
  language$: Observable<any>;
  language: any

  constructor(
    public popoverController: PopoverController,
    private modalController: ModalController,
    private roomService: RoomService,
    private languageService: LanguageService
  ) {
  }

  ngOnInit() {
    this.roomService.getRooms()
    this.roomService.getRoomTypes().subscribe((res: []) => {
      this.roomTypes = res;
    })

    this.languageService.languageChange$.subscribe(res => {
      this.language = res;
    })
  }

  async showSettings(e: Event, room) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {room: true, item: room},
      dismissOnSelect: true,
    });

    await popover.present();
  }

  async addRoom() {
    const modal = await this.modalController.create({
      component: AddRoomModalComponent,
      componentProps: {add: true},
      cssClass: 'add-room-modal-css'
    });

    await modal.present();
  }

}
