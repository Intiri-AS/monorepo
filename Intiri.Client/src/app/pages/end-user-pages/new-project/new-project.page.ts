import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateProjectModalComponent } from 'src/app/components/modals/create-project-modal/create-project-modal.component';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage {
  isScrolledDown: boolean;

  steps: Array<object> = [
    {
      title: 'Select pictures that you like',
      subtitle: 'Decisions are hard, pick as many as you want.',
      data: [
        { id: 1, img: 'images/landing-img.png' },
        { id: 2, img: 'images/img-01.png' },
        { id: 3, img: 'images/landing-img.png' },
        { id: 4, img: 'images/intiri-logo.svg' },
        { id: 5, img: 'images/landing-img.png' },
        { id: 6, img: 'images/landing-img.png' },
        { id: 7, img: 'images/landing-img.png' },
        { id: 8, img: 'images/img-01.png' },
        { id: 9, img: 'images/landing-img.png' },
        { id: 10, img: 'images/intiri-logo.svg' },
        { id: 11, img: 'images/img-01.png' },
        { id: 12, img: 'images/landing-img.png' },
        { id: 13, img: 'images/intiri-logo.svg' },
        { id: 14, img: 'images/img-01.png' },
        { id: 15, img: 'images/landing-img.png' },
      ],
    },
    {
      title: 'Select the room you want to improve',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: [
        { id: 1, icon: 'icon/style.svg', title: 'Brush' },
        { id: 2, icon: 'icon/room.svg', title: 'Bed' },
      ],
    },
    {
      title: 'Select color pallet',
      subtitle: 'Don’t worry, you can chage color later.',
      data: [
        { id: 1, color: '#243c5a', title: 'Midnight' },
        { id: 2, color: '#3f3cbb', title: 'Purple' },
        { id: 3, color: '#565584', title: 'Metal' },
        { id: 4, color: '#3ab7bf', title: 'Tahiti' },
        { id: 5, color: '#243c5a', title: 'Midnight' },
        { id: 6, color: '#3f3cbb', title: 'Purple' },
        { id: 7, color: '#565584', title: 'Metal' },
        { id: 8, color: '#3ab7bf', title: 'Tahiti' },
        { id: 9, color: '#243c5a', title: 'Midnight' },
        { id: 10, color: '#3f3cbb', title: 'Purple' },
        { id: 11, color: '#565584', title: 'Metal' },
        { id: 12, color: '#3ab7bf', title: 'Tahiti' },
      ],
    },
    {
      title: 'Select the moodboard you like the most',
      subtitle: 'We have found you style match. Choose moodboard you like the most. ',
      data: [],
    },
    {
      title: 'This is your style',
      subtitle:
        'This style captures the balance between comfort and minimalism characteristic of Scandinavial bright design. This include clean lines, minimal decoration and the importance of artwork. Try to create an environment that encourages feelings of strenght, contentmentt and clean lines. Typicalcoloors are calming and neutral with palettes sticking to whites, grays, greens, black and blue accents. The syle allso reflects the wooden landscape and trees of the Nordic countries.',
      data: [],
    },
  ];


  project: object = {
    'style': [],
    'room': null,
    'color-pallete': null,
    'moodboard': null
  }

  stepsOrder: object = {
    0: 'style',
    1: 'room',
    2: 'color-pallete',
    3: 'moodboard',
    4: 'final-result'
  }

  currentStepNo: number = 0;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if(!sessionStorage.getItem('draftProjectName')) {
      this.openModal();
    }
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
    }
  }

  nextStep() {
    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
    }
  }

  goToStep(stepNo) {
    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
    }
  }

  canChangeToStep(step): boolean {
    if (step >= this.steps.length || step < 0) {
      return false;
    }
    switch(step) {
      case 0: { return true; }
      case 1: { return this.project['style'].length > 0; }
      case 2: { return this.project['style'].length > 0 && this.project['room']}
      case 3: { return this.project['style'].length > 0 && this.project['room'] && this.project['color-pallete'];}
      case 4: { return this.project['style'].length > 0 && this.project['room'] && this.project['color-pallete'] && this.project['final-result'];}
    }
    return true;
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.project[stepName])) {
      if(this.project[stepName].includes(item)) {
        this.project[stepName] = this.project[stepName].filter(e => e.id !== item.id);
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else {
      // else it's a single select
      this.project[stepName] = this.project[stepName] === item ? null : item;
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateProjectModalComponent,
      cssClass: 'modal-css',
      backdropDismiss: false,
      swipeToClose: false
    });

    await modal.present();
  }

}
