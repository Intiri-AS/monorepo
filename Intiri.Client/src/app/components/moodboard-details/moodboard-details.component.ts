import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Moodboard } from 'src/app/models/moodboard.model';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router  } from '@angular/router';
import * as $ from 'jquery'
import { Project } from 'src/app/models/project.model';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-moodboard-details',
  templateUrl: './moodboard-details.component.html',
  styleUrls: ['./moodboard-details.component.scss'],
})
export class MoodboardDetailsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() project?: Project;
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
  currentZoom: number = 1;

  itemsInMoodboard$: BehaviorSubject<any>;
  showLoader: boolean = false;

  // Component subscriptions
  getMoodboardSubscription: Subscription = null;

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private notifier: NotifierService,
    private accountService: AccountService,
    private router: Router,
    private moodboardService: MoodboardService,
    private projectService: ProjectService,
    private activateRoute: ActivatedRoute,
  ) {
    this.itemsInMoodboard$ = new BehaviorSubject(null);
  }

  ngOnInit(): void {
    console.log('Project in moodboard-details', this.project)
    console.log('moodboard-details', this.moodboard);

    this.loggedUser$.subscribe(res => this.userData = res );

    if (this.userData.roles[0] == 'Admin') {
      if (this.areMoodboardColorPaletteSlotsEmpty()) {
        this.assignToColorPaletteSlots();
      }
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

    // configure crop feature on Initial load
    this.initializeCropFeatureMap();
  }

  ngOnChanges (): void {
    if (this.router.url.includes('edit-moodboard') ||
      this.router.url.includes('new-project')) {
      this.refineMoodboardSlots();
    }
  }

  ngAfterContentInit (): void {
    if (this.userData.roles[0] == 'FreeEndUser') {
      if (!this.project) {
        this.itemsInMoodboard$.next(this.moodboard);
        return
      };
      this.itemsInMoodboard$.next(this.project.currentMoodboard);

      if (!this.shouldLoadMoodboardItems()) return;
      if (!this.moodboard.id) return;

      this.showLoader = true;
      this.getMoodboardSubscription = this.moodboardService.getMoodboard(this.moodboard.id).subscribe((res: Moodboard) => {
        this.itemsInMoodboard$.next(res);
        this.showLoader = false;

        Object.keys(res).map(key => { // Set project-data except moodboard slotInfo
          if (key !== 'slotInfo') {
            this.project.currentMoodboard[key] = res[key]
          }
        })

        this.projectService.setCurrentProject(this.project);
      })
    }
  }

  ngOnDestroy(): void {
      this.getMoodboardSubscription && this.getMoodboardSubscription.unsubscribe();
  }

  areMoodboardColorPaletteSlotsEmpty (): boolean {
    if (this.moodboard) {
      if (typeof this.moodboard.slotInfo === 'string') {
        this.moodboard.slotInfo = JSON.parse(this.moodboard.slotInfo);
      }

      let colorPaletteSlotIds = [12, 13, 14, 15];
      let res = colorPaletteSlotIds.every(id => !this.moodboard.slotInfo[id].entityImagePath);
      return res;
    }
    return true;
  }

  shouldLoadMoodboardItems (): boolean {
    let resBool = this.project.currentMoodboard.room == null;
    return resBool
  }

  initializeCropFeatureMap (): void {
    for (let i = 0; i < this.MOODBOARD_SLOT_COUNT; i++) {
      this.cropFeatureMap[i] = {
        showCropButton: false,
        isImageCroppingState: false,
      }
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

  assignDefaultSlots (): void {
     // Assign Materials to assigned moodboardSlots
     if (this.moodboard.materials.length >= 4) {
       this.assignItemToMoodboardSlot(0, 'material', this.moodboard.materials[0].id, this.moodboard.materials[0].name, this.moodboard.materials[0].imagePath);
       this.assignItemToMoodboardSlot(1, 'material', this.moodboard.materials[1].id, this.moodboard.materials[1].name, this.moodboard.materials[1].imagePath);
       this.assignItemToMoodboardSlot(2, 'material', this.moodboard.materials[2].id, this.moodboard.materials[2].name, this.moodboard.materials[2].imagePath);
       this.assignItemToMoodboardSlot(3, 'material', this.moodboard.materials[3].id, this.moodboard.materials[3].name, this.moodboard.materials[3].imagePath);
     }

     // Assign Products to assigned moodboardSlots
     if (this.moodboard.products.length >= 2) {
       this.assignItemToMoodboardSlot(9, 'product', this.moodboard.products[0].id, this.moodboard.products[0].name, this.moodboard.products[0].imagePath);
       this.assignItemToMoodboardSlot(10, 'product', this.moodboard.products[1].id, this.moodboard.products[1].name, this.moodboard.products[1].imagePath);
     }

     // Assign Colors to assigned moodboardSlots
     if (this.moodboard.colorPalettes.length > 0) {
       this.assignItemToMoodboardSlot(12, 'color', this.moodboard.colorPalettes[0].shadeColorLightData.id, this.moodboard.colorPalettes[0].shadeColorLightData.name, this.moodboard.colorPalettes[0].shadeColorLightData.imagePath);
       this.assignItemToMoodboardSlot(13, 'color', this.moodboard.colorPalettes[0].shadeColorMediumData.id, this.moodboard.colorPalettes[0].shadeColorMediumData.name, this.moodboard.colorPalettes[0].shadeColorMediumData.imagePath);
       this.assignItemToMoodboardSlot(14, 'color', this.moodboard.colorPalettes[0].mainColorData.id, this.moodboard.colorPalettes[0].mainColorData.name, this.moodboard.colorPalettes[0].mainColorData.imagePath);
       this.assignItemToMoodboardSlot(15, 'color', this.moodboard.colorPalettes[0].shadeColorDarkData.id, this.moodboard.colorPalettes[0].shadeColorDarkData.name, this.moodboard.colorPalettes[0].shadeColorDarkData.imagePath);
     }
  }

  assignToColorPaletteSlots (): void {
    if (typeof this.moodboard.slotInfo === 'string') {
      this.moodboard.slotInfo = JSON.parse(this.moodboard.slotInfo);
    }

    if (this.moodboard.colorPalettes.length > 0) {
      this.assignItemToMoodboardSlot(12, 'color', this.moodboard.colorPalettes[0].shadeColorLightData.id, this.moodboard.colorPalettes[0].shadeColorLightData.name, this.moodboard.colorPalettes[0].shadeColorLightData.imagePath);
      this.assignItemToMoodboardSlot(13, 'color', this.moodboard.colorPalettes[0].shadeColorMediumData.id, this.moodboard.colorPalettes[0].shadeColorMediumData.name, this.moodboard.colorPalettes[0].shadeColorMediumData.imagePath);
      this.assignItemToMoodboardSlot(14, 'color', this.moodboard.colorPalettes[0].mainColorData.id, this.moodboard.colorPalettes[0].mainColorData.name, this.moodboard.colorPalettes[0].mainColorData.imagePath);
      this.assignItemToMoodboardSlot(15, 'color', this.moodboard.colorPalettes[0].shadeColorDarkData.id, this.moodboard.colorPalettes[0].shadeColorDarkData.name, this.moodboard.colorPalettes[0].shadeColorDarkData.imagePath);
    }
  }

  initializeSlotInfo () {
    for (let i = 0; i < this.moodboard.SLOT_COUNT; i++) {
      this.moodboard.slotInfo[i] = {
        entity: null,
        entityId: null,
        entityName: null,
        entityImagePath: null,
        entityImageStyles: {
          height: null,
          width: null,
          top: null,
          left: null
        },
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

  onMouseWheel (event, slotId) {
    if (!this.cropFeatureMap[slotId].isImageCroppingState) return;
    if (this.isImageCroppingState) {
      event.preventDefault();

      const slotImage = <HTMLImageElement>document.getElementById(`slot-${slotId}-img`);

      if (slotImage.style.transform?.match(/[+-]?\d+(\.\d+)?/g)?.map(Number)[0]) {
        this.currentZoom = slotImage.style.transform.match(/[+-]?\d+(\.\d+)?/g).map(Number)[0];
      }
      let minZoom = 1;
      let maxZoom = 3;
      let stepSize = 0.01;

      let direction = event.deltaY > 0 ? 1 : -1;
      // this.zoomImage(direction);
      let newZoom = this.currentZoom + direction * stepSize;

      // Limit the zoom level to the minimum and maximum values
      if (newZoom < minZoom || newZoom > maxZoom) {
          return;
      }

      this.currentZoom = newZoom;

      // Update the CSS transform of the image to scale it
      slotImage.style.transform = 'scale(' + this.currentZoom + ')';
    }
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
    console.log('lastMousePosition', this.lastMousePosition);
  }

  onMouseUp (event, slotId) {
    if (!this.cropFeatureMap[slotId].isImageCroppingState) return;

    console.log('onMouseUp', event, slotId);
    this.isImageDraggingState = false;
  }

  // onMouseMove (event, slotId) {
  //   if (!this.cropFeatureMap[slotId].isImageCroppingState) {
  //     return;
  //   }
  //   if (this.isImageCroppingState && this.isImageDraggingState) {
  //     console.log('onMouseMove', slotId);

  //     let slot = document.getElementById(`slot-${slotId}`);
  //     let rect = slot.getBoundingClientRect();

  //     let parent_pos_in_document = {
  //       top: rect.top + window.scrollY,
  //       left: rect.left + window.scrollX,
  //     };

  //     let slotImage = document.getElementById(`slot-${slotId}-img`);

  //     let _CONTAINER_WIDTH = $(`#slot-${slotId}`).outerWidth();
  //     let _CONTAINER_HEIGHT = $(`#slot-${slotId}`).outerHeight();
  //     // console.log('_CONTAINER_WIDTH', _CONTAINER_WIDTH);
  //     // console.log('_CONTAINER_HEIGHT', _CONTAINER_HEIGHT);

  //     let _IMAGE_HEIGHT = $(`#slot-${slotId}-img`).height();
  //     let _IMAGE_WIDTH = $(`#slot-${slotId}-img`).height();
  //     // console.log('_IMAGE_WIDTH', _IMAGE_WIDTH);
  //     // console.log('_IMAGE_HEIGHT', _IMAGE_HEIGHT);

  //     let currentMousePosition = { x: event.pageX - parent_pos_in_document.left, y: event.pageY - parent_pos_in_document.top };
  //     // console.log('currentMousePosition', currentMousePosition);
  //     // console.log('lastMousePosition', this.lastMousePosition);
  //     let change_x = currentMousePosition.x - this.lastMousePosition.x;
  //     let change_y = currentMousePosition.y - this.lastMousePosition.y;
  //     // console.log('change_x', change_x);
  //     // console.log('change_y', change_y)

  //     this.lastMousePosition = currentMousePosition;

  //     var img_top = parseInt($(`#slot-${slotId}-img`).css('top'), 10);
  //     var img_left = parseInt($(`#slot-${slotId}-img`).css('left'), 10);
  //     // console.log('img_top', img_top, 'img_left', img_left);

  //     let img_top_new = (img_top + change_y);
  //     let img_left_new = (img_left + change_x);
  //     // console.log('img_top_new',img_top_new, 'img_left_new', img_left_new);

  //     if(img_top_new > 0)
	// 		  img_top_new = 0;
  //     if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_HEIGHT))
  //       img_top_new = _CONTAINER_HEIGHT - _IMAGE_HEIGHT;
  //     if(img_left_new > 0)
  //       img_left_new = 0;
  //     if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_WIDTH))
  //       img_left_new = _CONTAINER_WIDTH - _IMAGE_WIDTH;


  //     // console.log('after update img_top_new',img_top_new, 'img_left_new', img_left_new);

  //     slotImage.style.top = img_top_new + 'px';
  //     slotImage.style.left = img_left_new + 'px';
  //     return;
  //   }
  // }

  onMouseMove (event, slotId) {
    if (!this.cropFeatureMap[slotId].isImageCroppingState) {
      return;
    }
    if (this.isImageCroppingState && this.isImageDraggingState) {
      console.log('onMouseMove', slotId);

      let _DIV_OFFSET = $(`#slot-${slotId}`).offset()

      let slotImage = document.getElementById(`slot-${slotId}-img`);

      let _CONTAINER_WIDTH = $(`#slot-${slotId}`).outerWidth();
      let _CONTAINER_HEIGHT = $(`#slot-${slotId}`).outerHeight();
      // console.log('_CONTAINER_WIDTH', _CONTAINER_WIDTH);
      // console.log('_CONTAINER_HEIGHT', _CONTAINER_HEIGHT);

      let _IMAGE_HEIGHT = $(`#slot-${slotId}-img`).height();
      let _IMAGE_WIDTH = $(`#slot-${slotId}-img`).width();
      // console.log('_IMAGE_WIDTH', _IMAGE_WIDTH);
      // console.log('_IMAGE_HEIGHT', _IMAGE_HEIGHT);

      let currentMousePosition = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
      // console.log('currentMousePosition', currentMousePosition);
      // console.log('lastMousePosition', this.lastMousePosition);
      let change_x = currentMousePosition.x - this.lastMousePosition.x;
      let change_y = currentMousePosition.y - this.lastMousePosition.y;
      // console.log('change_x', change_x);
      // console.log('change_y', change_y)

      this.lastMousePosition = currentMousePosition;

      var img_top = parseInt($(`#slot-${slotId}-img`).css('top'), 10);
      var img_left = parseInt($(`#slot-${slotId}-img`).css('left'), 10);
      // console.log('img_top', img_top, 'img_left', img_left);

      let img_top_new = (img_top + change_y);
      let img_left_new = (img_left + change_x);
      // console.log('img_top_new',img_top_new, 'img_left_new', img_left_new);

      if(img_top_new > 0)
			  img_top_new = 0;
      if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_HEIGHT))
        img_top_new = _CONTAINER_HEIGHT - _IMAGE_HEIGHT;
      if(img_left_new > 0)
        img_left_new = 0;
      if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_WIDTH))
        img_left_new = _CONTAINER_WIDTH - _IMAGE_WIDTH;


      // console.log('after update img_top_new',img_top_new, 'img_left_new', img_left_new);

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
    if (this.showLoader) {
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
    if (this.showLoader) {
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

    if (!this.moodboard.slotInfo[slotId].entityImagePath) return;

    if (this.userData.roles[0] == 'Admin') {
      if (
        this.activateRoute.snapshot.routeConfig.path === 'add-moodboard' ||
        this.activateRoute.snapshot.routeConfig.path === 'edit-moodboard/:id'
      ) {
        this.cropFeatureMap[slotId].showCropButton = !this.cropFeatureMap[slotId].showCropButton;
      }
    }
  }

  onCropButtonClick (slotId) {
    this.isImageCroppingState = true;

    this.cropFeatureMap[slotId].showCropButton = false;
    this.cropFeatureMap[slotId].isImageCroppingState = true;
  }

  onCroppingDone (slotId) {
    this.isImageCroppingState = false;
    this.cropFeatureMap[slotId].isImageCroppingState = false;
    this.currentZoom = 1;

    let slotImage = document.getElementById(`slot-${slotId}-img`);
    let updatedStyles = {
      height: slotImage.style.height,
      width: slotImage.style.width,
      top: slotImage.style.top,
      left: slotImage.style.left,
      transform: slotImage.style.transform
    };

    this.moodboard.slotInfo[slotId].entityImageStyles = updatedStyles;
    console.log('moodboard after updating', this.moodboard.slotInfo);
  }
}
