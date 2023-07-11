import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddPictureModalComponent } from '../modals/add-picture-modal/add-picture-modal.component';
import { RoomService } from 'src/app/services/room.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-pictures',
  templateUrl: './admin-pictures.component.html',
  styleUrls: ['./admin-pictures.component.scss'],
})
export class AdminPicturesComponent implements OnInit {

  styleImages$: Observable<any> = this.styleService.styleImages$;
  styles$: Observable<any> = this.styleService.styles$;
  rooms$: Observable<any> = this.roomService.rooms$;
  searchText: any;

  styleImages: Array<any> = [];
  styleFilters: Array<number> = [];
  roomFilters: Array<string> = [];

  constructor(
    public popoverController: PopoverController,
    private styleService: StyleService,
    private modalController: ModalController,
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.styleService.getStyleImages();
    this.styleService.getStyles();
    this.roomService.getRooms();

    this.styleImages$.pipe().subscribe(styleImages => {
      this.styleImages = styleImages;
    });
  }

  async showSettings(e: Event, styleImage) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: {picture: true, item: styleImage},
      dismissOnSelect: true
    });

    await popover.present();
  }

  async addPicture() {
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: {add: true},
      cssClass: 'add-designer-modal-css'
    });

    await modal.present();
  }

  onRoomFilterChange (e) {
    this.roomFilters = e.detail.value;
    this.filterStyleImages();
  }


  onStyleFilterChange (e) {
    this.styleFilters = e.detail.value;
    this.filterStyleImages();
  }

  filterStyleImages (
    styleFilters = this.styleFilters,
    roomFilters = this.roomFilters
    ) {
      this.styleImages$.pipe().subscribe(styleImages => {
        if (styleFilters.length && roomFilters.length) {
          this.styleImages = styleImages.filter(styleImage => {
            return styleFilters.includes(styleImage.styleId.toString());
          })
          this.styleImages = this.styleImages.filter(styleImage => {
            return styleImage.roomId && roomFilters.includes(styleImage.roomId.toString());
          });
        } else if (styleFilters.length && !roomFilters.length) {
          this.styleImages = styleImages.filter(styleImage => {
            return styleFilters.includes(styleImage.styleId.toString());
          });
        } else if (!styleFilters.length && roomFilters.length) {
          this.styleImages = styleImages.filter(styleImage => {
            return styleImage.roomId && roomFilters.includes(styleImage.roomId.toString());
          });
        } else {
          this.styleImages = styleImages;
        }
      });
  }

}
