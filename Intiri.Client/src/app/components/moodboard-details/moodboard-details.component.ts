import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Moodboard } from 'src/app/models/moodboard.model';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user.model';
import { Router  } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-moodboard-details',
  templateUrl: './moodboard-details.component.html',
  styleUrls: ['./moodboard-details.component.scss'],
})
export class MoodboardDetailsComponent implements OnInit {
  // @ViewChild('slides') slides: IonSlides;

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
  };

  loggedUser$ = this.accountService.currentUser$;
  userData: User
  currentRoute: string = '';

  previousSlotId: any = null;
  currentSlotId: any = null;
  draggedShoppingListItem: any = null;

  MOODBOARD_SLOT_COUNT: number = 16;
  cropFeatureMap = {};
  isImageCroppingState: boolean = false;
  isImageDraggingState: boolean = false;
  lastMousePosition: any = null;

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private notifier: NotifierService,
    private accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log('moodboard-details', this.moodboard);

    this.initializeCropFeatureMap();

    this.loggedUser$.subscribe(res => this.userData = res );
    if (this.userData.roles[0] == 'Admin') {
      if (this.router.url.includes('/moodboard-details/') || this.router.url.includes('/edit-moodboard/')) { //Admin is viewing/editing existing moodboard
        if (this.moodboard.slotInfo && typeof this.moodboard.slotInfo === 'string') {
          this.moodboard.slotInfo = JSON.parse(this.moodboard.slotInfo);
        }
      } else { //Admin is creating new moodboard
        // check if slot-data are already available in Moodboard state
        let areMoodBoardSlotsSet: boolean = !Object.keys(this.moodboard.slotInfo).every(slotKey => {
          return this.isSlotEmpty(this.moodboard.slotInfo[slotKey])
        });
        if (!areMoodBoardSlotsSet) {
          this.assignDefaultSlots();
        }
      }
    } else if (this.userData.roles[0] == 'FreeEndUser') {
      if (this.router.url.includes('/new-project') //If Client is creating new Project
        || this.router.url.includes('/project-details') //If Client is viewing existing project moodboard
        || this.router.url.includes('/edit-moodboard') // If Client is editing a moodboard
      ) {
        if (this.moodboard.slotInfo && typeof this.moodboard.slotInfo == 'string') {
          this.moodboard.slotInfo = JSON.parse(this.moodboard.slotInfo);
        } else {
          // this.assignDefaultSlots();
        }
      } else { //If User viewing existing moodboard in a Project
        this.assignDefaultSlots();
      }
    }
  }

  setNaturalImageDimensions (slotId) {
    // Get the image element
    var image = document.getElementById(`slot-${slotId}-img`) as HTMLImageElement;

    // Set the height and width to the actual size
    image.style.height = image.naturalHeight + 'px';
    image.style.width = image.naturalWidth + 'px';
  }

  initializeCropFeatureMap () {
    for (let i = 0; i < this.MOODBOARD_SLOT_COUNT; i++) {
      this.cropFeatureMap[i] = {
        showCropButton: false,
        isImageCroppingState: false,
      }
    }
  }

  ngOnChanges () {
    if (this.router.url.includes('edit-moodboard') ||
      this.router.url.includes('new-project')) {
      this.refineMoodboardSlots();
    }
  }

  refineMoodboardSlots () {
    Object.keys(this.moodboard.slotInfo).map(key => {
      if (this.moodboard.slotInfo[key].entity === 'product') {
        let product = this.moodboard.products.filter(p => p.id == this.moodboard.slotInfo[key].entityId);
        if (!product.length) {
          this.resetMoodboardSlot(key);
        }
      } else if (this.moodboard.slotInfo[key].entity === 'material') {
        let material = this.moodboard.materials.filter(m => m.id == this.moodboard.slotInfo[key].entityId);
        if (!material.length) {
          this.resetMoodboardSlot(key);
        }
      } else if (this.moodboard.slotInfo[key].entity === 'styleImages') {
        let styleImage = this.moodboard.styleImages.filter(s => s.id == this.moodboard.slotInfo[key].entityId);
        if (!styleImage.length) {
          this.resetMoodboardSlot(key);
        }
      }
    })
  }

  assignDefaultSlots () {
     // Assign materials to assigned moodboardSlots
     if (this.moodboard.materials.length >= 4) {
       this.assignItemToMoodboardSlot(0, 'material', this.moodboard.materials[0].id, this.moodboard.materials[0].name, this.moodboard.materials[0].imagePath);
       this.assignItemToMoodboardSlot(1, 'material', this.moodboard.materials[1].id, this.moodboard.materials[1].name, this.moodboard.materials[1].imagePath);
       this.assignItemToMoodboardSlot(2, 'material', this.moodboard.materials[2].id, this.moodboard.materials[2].name, this.moodboard.materials[2].imagePath);
       this.assignItemToMoodboardSlot(3, 'material', this.moodboard.materials[3].id, this.moodboard.materials[3].name, this.moodboard.materials[3].imagePath);
     }

     // Assign products to assigned moodboardSlots
     if (this.moodboard.products.length >= 2) {
       this.assignItemToMoodboardSlot(9, 'product', this.moodboard.products[0].id, this.moodboard.products[0].name, this.moodboard.products[0].imagePath);
       this.assignItemToMoodboardSlot(10, 'product', this.moodboard.products[1].id, this.moodboard.products[1].name, this.moodboard.products[1].imagePath);
     }
  }

  initializeSlotInfo () {
    for (let i = 0; i < this.moodboard.SLOT_COUNT; i++) {
      this.moodboard.slotInfo[i] = {
        entity: null,
        entityId: null,
        entityName: null,
        entityImagePath: null
      }
    }
  }

  resetMoodboardSlot (key) {
    this.moodboard.slotInfo[key] = {
      entity: null,
      entityId: null,
      entityName: null,
      entityImagePath: null
    }
  }

  isSlotEmpty (slotInfo) {
    return !slotInfo.entity && !slotInfo.entityId && !slotInfo.entityName && !slotInfo.entityImagePath;
  }

  isItemDragAndDroppable () {
    if (this.userData.roles[0] == 'FreeEndUser') {
      if (!(this.router.url.includes('new-project') || this.router.url.includes('edit-moodboard'))) {
        return false;
      }
    } else if (this.userData.roles[0] == 'Admin' && this.router.url.includes('/moodboard-details/')) { //Admin is viewing moodboard, hence can't edit
      return false;
    }
    return true;
  }

  assignItemToMoodboardSlot (slotId, entity, entityId, entityName, entityImagePath) {
    let currentSlotDetails = {
      entity,
      entityId,
      entityName,
      entityImagePath
    };
    if (!this.moodboard.slotInfo) {
      this.moodboard.slotInfo = {};
      this.initializeSlotInfo();
    }
    this.moodboard.slotInfo[slotId] = currentSlotDetails;
  }

  normalizeSlashes(string): string {
    return string && string.replaceAll("\\", "/")
  }

  next() {
    // this.slides.slideNext();
  }

  prev() {
    // this.slides.slidePrev();
  }

  async openImageInModal(image) {
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

  onMouseDown (event, slotId) {
    if (!this.cropFeatureMap[slotId].isImageCroppingState) return;

    // let slot = document.getElementById(`slot-${slotId}`);
    // let rect = slot.getBoundingClientRect();
    // let parent_pos_in_document = {
      //   top: rect.top + window.scrollY,
      //   left: rect.left + window.scrollX,
      // };
    let _DIV_OFFSET = $(`#slot-${slotId}`).offset();
    console.log("mouseDown _DIV_OFFSET", _DIV_OFFSET);

    this.isImageDraggingState = true;
    // this.lastMousePosition = {x: event.pageX - parent_pos_in_document.left, y: event.pageY - parent_pos_in_document.top};
    this.lastMousePosition = {x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top};
  }

  onMouseUp (event, slotId) {
    if (!this.cropFeatureMap[slotId].isImageCroppingState) return;

    console.log('onMouseUp', event, slotId);
    this.isImageDraggingState = false;
  }



  onMouseMove (event, slotId) {
    if (!this.cropFeatureMap[slotId].isImageCroppingState) {
      return;
    }
    if (this.isImageCroppingState && this.isImageDraggingState) {
      console.log('onMouseMove', slotId);

      let slot = document.getElementById(`slot-${slotId}`);
      let rect = slot.getBoundingClientRect();

      let parent_pos_in_document = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      };

      let slotImage = document.getElementById(`slot-${slotId}-img`);

      let _CONTAINER_WIDTH = $(`#slot-${slotId}`).outerWidth();
      let _CONTAINER_HEIGHT = $(`#slot-${slotId}`).outerHeight();
      console.log('_CONTAINER_WIDTH', _CONTAINER_WIDTH);
      console.log('_CONTAINER_HEIGHT', _CONTAINER_HEIGHT);

      let _IMAGE_HEIGHT = $(`#slot-${slotId}-img`).height();
      let _IMAGE_WIDTH = $(`#slot-${slotId}-img`).width();
      console.log('_IMAGE_WIDTH', _IMAGE_WIDTH);
      console.log('_IMAGE_HEIGHT', _IMAGE_HEIGHT);

      let currentMousePosition = { x: event.pageX - parent_pos_in_document.left, y: event.pageY - parent_pos_in_document.top };
      console.log('currentMousePosition', currentMousePosition);
      console.log('lastMousePosition', this.lastMousePosition);
      let change_x = currentMousePosition.x - this.lastMousePosition.x;
      let change_y = currentMousePosition.y - this.lastMousePosition.y;

      this.lastMousePosition = currentMousePosition;

      var img_top = parseInt($(`#slot-${slotId}-img`).css('top'), 10);
      var img_left = parseInt($(`#slot-${slotId}-img`).css('left'), 10);
      console.log('img_top', img_top, 'img_left', img_left);

      let img_top_new = (img_top + change_y);
      let img_left_new = (img_left + change_x);
      console.log('img_top_new',img_top_new, 'img_left_new', img_left_new);

      console.log('after update img_top_new',img_top_new, 'img_left_new', img_left_new);

      slotImage.style.top = img_top_new + 'px';
      slotImage.style.left = img_left_new + 'px';
      return;
    }
  }

  getOuterHeight(element) {
    var style = getComputedStyle(element);
    var height = element.offsetHeight;
    var marginTop = parseFloat(style.marginTop);
    var marginBottom = parseFloat(style.marginBottom);
    return height + marginTop + marginBottom;
  }


  getOuterWidth(element) {
    var style = getComputedStyle(element);
    var width = element.offsetWidth;
    var marginLeft = parseFloat(style.marginLeft);
    var marginRight = parseFloat(style.marginRight);

    return width + marginLeft + marginRight;
  }

  dragStart (event, slotId) {
    if (this.isImageCroppingState) {
      event.preventDefault();
      return;
    }
    if (typeof slotId == 'string') { // Admin can drag & drop anything from shopping list
      this.draggedShoppingListItem = slotId;

      let id = this.userData.roles[0] == 'Admin' ? '#AdminCard' : '#ClientCard';
      let cardElement = document.querySelector(id);
      if (cardElement){
        cardElement.scrollIntoView({behavior: 'smooth'});
      }
    } else {
      this.previousSlotId = slotId;
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
    try {
      if (!this.isItemDragAndDroppable()) {
        return;
      }
      if (this.previousSlotId == null && !this.draggedShoppingListItem) {
        this.notifier.show({
          message: this.translate.instant("MOODBOARD-DETAILS.item-not-draggable"),
          type: "success"
        });
        this.previousSlotId = null;
        this.draggedShoppingListItem = null;
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
        if (!this.moodboard.slotInfo[currentSlotId]) { //Handling edge-case error
          this.moodboard.slotInfo[currentSlotId] = {
            entity: null,
            entityId: null,
            entityName: null,
            entityImagePath: null
          }
        }

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
    } catch (e) {
      this.previousSlotId = null;
      this.draggedShoppingListItem = null;
    }
  }

  getToolTipShoppingList (type, item) {
    if (type === 'product') {
      return !item.productLink || item.productLink == 'null'
        ? this.translate.instant('TOOLTIP-TEXT.no-link-found-for-this-product')
        : item.productLink;
    } else if (type == 'material') {
      return !item.link || item.link == 'null'
        ? this.translate.instant('TOOLTIP-TEXT.no-link-found-for-this-material')
        : item.link;
    } else if (type == 'inspirationalPhoto') {
      return item.provider
        ? this.translate.instant('TOOLTIP-TEXT.provider') +  ': ' + item.provider
        : this.translate.instant('TOOLTIP-TEXT.no-providers-found-for-this-inspirational-photo');
    }
    return ''
  }

  getToolTipMoodboardItem (slotId) {
    if (this.isImageCroppingState) {
      return;
    }

    if (this.moodboard.slotInfo[slotId].entity == 'inspirationalPhotos' && this.moodboard.styleImages) {
      let provider = this.moodboard.styleImages.filter(ip => ip.id == this.moodboard.slotInfo[slotId].entityId)[0].provider;
      return provider
        ? this.translate.instant('TOOLTIP-TEXT.provider') + ': ' + provider
        : this.translate.instant('TOOLTIP-TEXT.no-providers-found-for-this-inspirational-photo');
    } else if (this.moodboard.slotInfo[slotId].entity === 'material') {
      let material = this.moodboard.materials.filter(m => m.id == this.moodboard.slotInfo[slotId].entityId)[0];
      if (material) {
        if (material.link == 'null' || !material.link) {
          return this.translate.instant('TOOLTIP-TEXT.no-link-found-for-this-material');
        } else {
          return material.link;
        }
      } else {
        return '';
      }
    } else if (this.moodboard.slotInfo[slotId].entity === 'product') {
      let product = this.moodboard.products.filter(p => p.id == this.moodboard.slotInfo[slotId].entityId)[0];
      if (product) {
        if (product.productLink == 'null' || !product.productLink) {
          return this.translate.instant('TOOLTIP-TEXT.no-link-found-for-this-product')
        } else {
          return product.productLink
        }
      } else {
        return ''
      }
    }else {
      return ''
    }
  }

  redirectToEntityPartnerLink (slotId) {
    if (this.isImageCroppingState) {
      return;
    }
    if (this.moodboard.slotInfo[slotId].entity == 'inspirationalPhotos' && this.moodboard.styleImages) {
      //
    } else if (this.moodboard.slotInfo[slotId].entity === 'material') {
      let material = this.moodboard.materials.filter(m => m.id == this.moodboard.slotInfo[slotId].entityId)[0];
      material.link && material.link != 'null' && window.open(material.link, '_blank');
    } else if (this.moodboard.slotInfo[slotId].entity === 'product') {
      let product = this.moodboard.products.filter(p => p.id == this.moodboard.slotInfo[slotId].entityId)[0];
      product.productLink && product.productLink != 'null' && window.open(product.productLink, '_blank');
    }else {
      return;
    }
  }

  redirectToColorsPartner () {
    window.open('https://www.flugger.com/', '_blank');
  }

  toggleCropButtonVisibility (slotId) {
    if (this.isImageCroppingState) return;
    if (this.userData.roles[0] == 'Admin') {
      if (this.router.url.includes('edit-moodboard')) {
        this.cropFeatureMap[slotId].showCropButton = !this.cropFeatureMap[slotId].showCropButton;
      }
    }
  }

  onCropButtonClick (slotId) {
    this.isImageCroppingState = true;

    this.cropFeatureMap[slotId].showCropButton = false;
    this.cropFeatureMap[slotId].isImageCroppingState = true;

    // this.setNaturalImageDimensions(slotId);
  }

  onCroppingDone (slotId) {
    this.isImageCroppingState = false;
    this.cropFeatureMap[slotId].isImageCroppingState = false;
  }
}
