import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateProjectModalComponent } from 'src/app/components/modals/create-project-modal/create-project-modal.component';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

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
      data: [],
    },
    {
      title: 'Select the room you want to improve',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: [],
    },
    {
      title: 'Select color pallet',
      subtitle: 'Don’t worry, you can chage color later.',
      data: [],
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


  project: Project = null;

  stepsOrder: object = {
    0: 'styleImages',
    1: 'room',
    2: 'color',
    3: 'moodboard',
    4: 'final-result'
  }

  currentStepNo: number = 0;

  constructor(private modalController: ModalController, public projectService: ProjectService) {}

  ngOnInit() {

    this.projectService.currentProject$.subscribe(project => {
      this.project = project;
      if(!project.name) {
        this.openModal();
      }
    });
    this.projectService.getStyleImages().subscribe(res => {
      this.steps[0]['data'] = res;
    })
    this.projectService.getRooms().subscribe(res => {
      this.steps[1]['data'] = res;
    })
    this.projectService.getColors().subscribe(res => {
      this.steps[2]['data'] = res;
    })
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
      this.projectService.setCurrentProject(this.project);
    }
  }

  nextStep() {
    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
      this.projectService.setCurrentProject(this.project);
    }
  }

  goToStep(stepNo) {
    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
      this.projectService.setCurrentProject(this.project);
    }
  }

  canChangeToStep(step): boolean {
    if (step >= this.steps.length || step < 0) {
      return false;
    }
    switch(step) {
      case 0: { return true; }
      case 1: { return this.project.styleImages.length > 0; }
      case 2: { return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room)}
      case 3: { return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && !this.isEmpty(this.project.color);}
      case 4: { return this.project.styleImages.length > 0 && !this.isEmpty(this.project.room) && !this.isEmpty(this.project.color) && !this.isEmpty(this.project.moodboard);}
    }
    return false;
  }

  isEmpty(object): boolean {
    return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.project[stepName])) {
      if(this.project[stepName].some(e => JSON.stringify(e) === JSON.stringify(item))) {
        this.project[stepName] = this.project[stepName].filter(e => e.id !== item.id);
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else {
      // else it's a single select
      this.project[stepName] = JSON.stringify(this.project[stepName]) === JSON.stringify(item) ? null : item;
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
