import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Moodboard } from 'src/app/models/moodboard.model';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';

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

  // Moodboard creator must choose at least 4 materials & 2 products
  moodboardSlotDetails = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null, // This is initially mapped to product 1
    8: null, // This is initially mapped to product 2
    9: null,
    10: null, // This is initially mapped to material 1
    11: null, // This is initially mapped to material 2
    12: null, // This is initially mapped to material 3
    13: null, // This is initially mapped to material 4
    14: null,
    15: null,
  }

  previousSlotId: any = null;
  currentSlotId: any = null;
  draggedShoppingListItem: any = null;

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private notifier: NotifierService,
  ) {
      // Initialize "moodboardSlotDetails" with required fields
      Object.keys(this.moodboardSlotDetails).forEach(ele => {
        this.moodboardSlotDetails[ele] = {
         entity: '',
         entityId: '',
         entityName: '',
         entityImagePath: ''
       }
     });
     }

  ngOnInit() {
    // Assign materials to assigned moodboardSlots
    this.assignItemToMoodboardSlot(0, 'material', this.moodboard.materials[0].id, this.moodboard.materials[0].name, this.moodboard.materials[0].imagePath);
    this.assignItemToMoodboardSlot(1, 'material', this.moodboard.materials[1].id, this.moodboard.materials[1].name, this.moodboard.materials[1].imagePath);
    this.assignItemToMoodboardSlot(2, 'material', this.moodboard.materials[2].id, this.moodboard.materials[2].name, this.moodboard.materials[2].imagePath);
    this.assignItemToMoodboardSlot(3, 'material', this.moodboard.materials[3].id, this.moodboard.materials[3].name, this.moodboard.materials[3].imagePath);

    // Assign products to assigned moodboardSlots
    this.assignItemToMoodboardSlot(9, 'product', this.moodboard.products[0].id, this.moodboard.products[0].name, this.moodboard.products[0].imagePath);
    this.assignItemToMoodboardSlot(10, 'product', this.moodboard.products[1].id, this.moodboard.products[1].name, this.moodboard.products[1].imagePath);
  }

  assignItemToMoodboardSlot (slotId, entity, entityId, entityName, entityImagePath) {
    if (entityId) {
      this.moodboardSlotDetails[slotId] = {
        entity,
        entityId,
        entityName,
        entityImagePath
      }
    } else {
      console.error('Can not assign null to a Moodboard Slot');
    }
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
    if (typeof inputNo == 'string') { // Admin drags anything from shopping list
      this.draggedShoppingListItem = inputNo;
    } else {
      this.previousSlotId = inputNo;
    }
  }

  allowDrop (event) {
    event.preventDefault();
  }

  isItemAlreadyOnMoodboard (item) {
    return Object.keys(this.moodboardSlotDetails).some(slotKey => {
      return (
        this.moodboardSlotDetails[slotKey].entity == item.entity &&
        this.moodboardSlotDetails[slotKey].entityId == item.entityId
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

      this.moodboardSlotDetails[currentSlotId] = this.draggedShoppingListItem;

      // reset "draggedShoppingListItem" after drop is done
      this.draggedShoppingListItem = null;
    } else {
      // Swap images on drop
      let temp = this.moodboardSlotDetails[currentSlotId];
      this.moodboardSlotDetails[currentSlotId] = this.moodboardSlotDetails[this.previousSlotId];
      this.moodboardSlotDetails[this.previousSlotId] = temp;

      // reset "previousSlotId" after drop is done
      this.previousSlotId = null;
    }
  }
}
