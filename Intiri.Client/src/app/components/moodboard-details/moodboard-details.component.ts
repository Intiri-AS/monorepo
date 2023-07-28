import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Moodboard } from 'src/app/models/moodboard.model';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-moodboard-details',
  templateUrl: './moodboard-details.component.html',
  styleUrls: ['./moodboard-details.component.scss'],
})
export class MoodboardDetailsComponent implements OnInit {

  @ViewChild('slides') slides: IonSlides;
  @Input() moodboard: Moodboard;
  @Input() bigCardOnly: boolean | null;
  @Input() withSlides: boolean | null;

  options = {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  }

  previousSlotId: any = null;
  currentSlotId: any = null;
  draggedShoppingListItem: any = null;

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private notifier: NotifierService,
    private storage: Storage
  ) {}

  ngOnInit() {
    // check if slot-data are already Moodboard state
    let areMoodBoardSlotsSet: boolean = !Object.keys(this.moodboard.slotInfo).every(slotKey => {
      return this.isSlotEmpty(this.moodboard.slotInfo[slotKey])
    })
    console.log('areMoodBoardSlotsSet', areMoodBoardSlotsSet);

    if (!areMoodBoardSlotsSet) {
      // Assign materials to assigned moodboardSlots
      this.assignItemToMoodboardSlot(0, 'material', this.moodboard.materials[0].id, this.moodboard.materials[0].name, this.moodboard.materials[0].imagePath);
      this.assignItemToMoodboardSlot(1, 'material', this.moodboard.materials[1].id, this.moodboard.materials[1].name, this.moodboard.materials[1].imagePath);
      this.assignItemToMoodboardSlot(2, 'material', this.moodboard.materials[2].id, this.moodboard.materials[2].name, this.moodboard.materials[2].imagePath);
      this.assignItemToMoodboardSlot(3, 'material', this.moodboard.materials[3].id, this.moodboard.materials[3].name, this.moodboard.materials[3].imagePath);

      // Assign products to assigned moodboardSlots
      this.assignItemToMoodboardSlot(9, 'product', this.moodboard.products[0].id, this.moodboard.products[0].name, this.moodboard.products[0].imagePath);
      this.assignItemToMoodboardSlot(10, 'product', this.moodboard.products[1].id, this.moodboard.products[1].name, this.moodboard.products[1].imagePath);
    }
  }

  isSlotEmpty (slotInfo) {
    return !slotInfo.entity && !slotInfo.entityId && !slotInfo.entityName && !slotInfo.entityImagePath;
  }


  assignItemToMoodboardSlot (slotId, entity, entityId, entityName, entityImagePath) {
    let currentSlotDetails = {
      entity,
      entityId,
      entityName,
      entityImagePath
    };
    this.moodboard.slotInfo[slotId] = currentSlotDetails;
    console.log("moodboard after re-assigning slots", this.moodboard);
  }

  normalizeSlashes(string): string {
    return string && string.replaceAll("\\", "/")
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

  dragStart (event, inputNo) {
    if (typeof inputNo == 'string') { // Admin can drag & drop anything from shopping list
      this.draggedShoppingListItem = inputNo;
    } else {
      this.previousSlotId = inputNo;
    }
  }

  allowDrop (event) {
    event.preventDefault();
  }

  isItemAlreadyOnMoodboard (item) {
    return Object.keys(this.moodboard.slotInfo).some(slotKey => {
      return (
        this.moodboard.slotInfo[slotKey].entity == item.entity &&
        this.moodboard.slotInfo[slotKey].entityId == item.entityId
      )
    });
  }

  onDrop (event, currentSlotId) {
    if (!this.previousSlotId && !this.draggedShoppingListItem) {
      this.notifier.show({
        message: this.translate.instant("MOODBOARD-DETAILS.item-not-draggable"),
        type: "success"
      });
      return;
    }
    if (this.draggedShoppingListItem) {
      let [entity, entityName, entityId, entityImagePath] = this.draggedShoppingListItem.split('__');
       this.draggedShoppingListItem = {
        entity,
        entityName,
        entityId,
        entityImagePath
      };
      if (this.isItemAlreadyOnMoodboard(this.draggedShoppingListItem)) {
        this.notifier.show({
          message: this.translate.instant("MOODBOARD-DETAILS.item-already-in-moodboard"),
          type: "success"
        });
        return;
      }
      this.assignItemToMoodboardSlot(currentSlotId, entity, entityId, entityName, entityImagePath);

      // reset "draggedShoppingListItem" after drop is done
      this.draggedShoppingListItem = null;
    } else {
      // Swap images on drop
      let temp = this.moodboard.slotInfo[currentSlotId];
      this.assignItemToMoodboardSlot(
        currentSlotId,
        this.moodboard.slotInfo[this.previousSlotId].entity,
        this.moodboard.slotInfo[this.previousSlotId].entityId,
        this.moodboard.slotInfo[this.previousSlotId].entityName,
        this.moodboard.slotInfo[this.previousSlotId].entityImagePath,
      );
      this.assignItemToMoodboardSlot(
        this.previousSlotId,
        temp.entity,
        temp.entityId,
        temp.entityName,
        temp.entityImagePath,
      );

      // reset "previousSlotId" after drop is done
      this.previousSlotId = null;
    }
  }
}
