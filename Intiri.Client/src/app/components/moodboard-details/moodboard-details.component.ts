import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { Moodboard } from 'src/app/models/moodboard.model';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { DomSanitizer } from '@angular/platform-browser';

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

  imagePaths = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null, // This is initially mapped to product 1
    8: null, // This is initially mapped to product 2
    9: null, // This is initially mapped to product 3
    10: null, // This is initially mapped to material 1
    11: null, // This is initially mapped to material 2
    12: null,// This is initially mapped to material 3
    13: null,
    14: null,
    15: null,
    16: null
  }

  previousInputNo = null;
  currentInputNo = null;

  constructor(
    private modalController: ModalController,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    // Assign products to assigned imagePaths
    this.imagePaths[7] = this.moodboard.products[0]?.imagePath;
    this.imagePaths[8] = this.moodboard.products[1]?.imagePath;
    this.imagePaths[9] = this.moodboard.products[2]?.imagePath;

    //Assign materials to assigned imagePaths
    this.imagePaths[10] = this.moodboard?.materials[0]?.imagePath;
    this.imagePaths[11] = this.moodboard?.materials[1]?.imagePath;
    this.imagePaths[12] = this.moodboard?.materials[2]?.imagePath;
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
    this.previousInputNo = inputNo;
  }

  allowDrop (event) {
    event.preventDefault();
  }

  onDrop (event, currentInputNo) {
    // Swap images on drop
    console.log("here?")
    let temp = this.imagePaths[currentInputNo];
    this.imagePaths[currentInputNo] = this.imagePaths[this.previousInputNo];
    this.imagePaths[this.previousInputNo] = temp;

    // CallAPI and save the current layout
  }
}
