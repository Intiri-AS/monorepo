import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StyleService } from 'src/app/services/style.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';
import { AddPictureModalComponent } from '../modals/add-picture-modal/add-picture-modal.component';
import { RoomService } from 'src/app/services/room.service';
import { take } from 'rxjs/operators';
import { CommonUtilsService } from 'src/app/services/CommonUtils.service';

@Component({
  selector: 'app-admin-pictures',
  templateUrl: './admin-pictures.component.html',
  styleUrls: ['./admin-pictures.component.scss'],
})
export class AdminPicturesComponent implements OnInit {
  styleImages$: Observable<any> = this.styleService.styleImages$;
  styles$: Observable<any> = this.styleService.styles$;
  rooms$: Observable<any> = this.roomService.rooms$;
  inspirationalPhotosProviders: Array<any> =
    this.commonUtilsService.inspirationalPhotosProviders;
  searchText: any;

  styleImages: Array<any> = [];
  styleFilters: Array<number> = [];
  roomFilters: Array<string> = [];
  partnerFilters: Array<any> = [];

  constructor(
    public popoverController: PopoverController,
    private styleService: StyleService,
    private modalController: ModalController,
    private roomService: RoomService,
    private commonUtilsService: CommonUtilsService
  ) {}

  ngOnInit() {
    this.styleService.getStyleImages();
    this.styleService.getStyles();
    this.roomService.getRooms();

    this.styleImages$.pipe().subscribe((styleImages) => {
      this.styleImages = styleImages;
    });
  }

  async showSettings(e: Event, styleImage) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: e,
      componentProps: { picture: true, item: styleImage },
      dismissOnSelect: true,
    });

    await popover.present();
  }

  async addPicture() {
    const modal = await this.modalController.create({
      component: AddPictureModalComponent,
      componentProps: { add: true },
      cssClass: 'add-designer-modal-css',
    });

    await modal.present();
  }

  onRoomFilterChange(e) {
    this.roomFilters = e.detail.value;
    this.filterStyleImages();
  }

  onStyleFilterChange(e) {
    this.styleFilters = e.detail.value;
    this.filterStyleImages();
  }

  onPartnerFilterChange(e) {
    this.partnerFilters = e.detail.value;
    this.filterStyleImages();
  }

  filterStyleImages() {
    this.styleImages$.pipe().subscribe((styleImages) => {
      this.styleImages = styleImages;

      if (this.styleFilters.length > 0) {
        this.styleImages = styleImages.filter((styleImage) => {
          return this.styleFilters.includes(styleImage.styleId.toString());
        });
      }

      if (this.roomFilters.length) {
        this.styleImages = this.styleImages.filter((styleImage) => {
          return (
            styleImage.roomId &&
            this.roomFilters.includes(styleImage.roomId.toString())
          );
        });
      }

      if (this.partnerFilters.length) {
        this.styleImages = this.styleImages.filter((styleImage) => {
          return this.partnerFilters.includes(styleImage.provider);
        });
      }

      if (
        !this.styleFilters.length &&
        !this.roomFilters.length &&
        !this.partnerFilters.length
      ) {
        this.styleImages = styleImages;
      }
    });
  }
}
