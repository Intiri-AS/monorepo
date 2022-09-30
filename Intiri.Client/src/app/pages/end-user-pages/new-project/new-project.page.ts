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
      title: 'Select the room you want to improve',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: [],
    },
    {
      title: 'Select pictures that you like',
      subtitle: 'Decisions are hard, pick as many as you want.',
      data: [],
    },
    {
      title: 'Enter more detail about selected room',
      subtitle: 'Don’t worry, you can improve more rooms later.',
      data: {roomShapes: [{shape: 'rectangular', imagePath: 'icon/rectangle.png'}, {shape: 'square', imagePath: 'icon/square.png'}, {shape: 'l-shaped', imagePath: 'icon/l-shape.png'}]},
    },
    {
      title: 'Select color pallet',
      subtitle: 'Don’t worry, you can chage color later.',
      data: [],
    },
    {
      title: 'Select the moodboard you like the most',
      subtitle:
        'We have found you style match. Choose moodboard you like the most. ',
      data: [],
    },
    {
      title: 'This is your style',
      subtitle:
        'This style captures the balance between comfort and minimalism characteristic of Scandinavial bright design. This include clean lines, minimal decoration and the importance of artwork. Try to create an environment that encourages feelings of strenght, contentmentt and clean lines. Typicalcoloors are calming and neutral with palettes sticking to whites, grays, greens, black and blue accents. The syle allso reflects the wooden landscape and trees of the Nordic countries.',
      data: 'final',
    },
  ];

  project: Project = null;

  stepsOrder: object = {
    0: 'room',
    1: 'styleImages',
    2: 'roomDetails.shape',
    3: 'colorPalettes',
    4: 'projectMoodboards',
    5: 'final',
  };

  currentStepNo: number = 0;

  constructor(
    private modalController: ModalController,
    public projectService: ProjectService
  ) {}

  ngOnInit() {
    this.projectService.currentProject$.subscribe((project) => {
      this.project = project;
      if (!project.name) {
        this.openStartModal();
      }
    });
    this.projectService.getRooms().subscribe((res) => {
      this.steps[0]['data'] = res;
    });
    this.projectService.getStyleImages().subscribe((res) => {
      this.steps[1]['data'] = res;
    });
    this.projectService.getColorPalettes().subscribe((res) => {
      this.steps[3]['data'] = res;
    });
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
      this.projectService.setCurrentProject(this.project);
    }
    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  nextStep() {
    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
      this.projectService.setCurrentProject(this.project);
    }
    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  goToStep(stepNo) {
    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
      this.projectService.setCurrentProject(this.project);
    }
    if (stepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  getMoodboardMatches() {
    this.projectService.getMoodboardMatches(this.project).subscribe(
      (res) => {
        this.steps[4]['data'] = {moodboardFamily: res['moodboardFamily'], moodboards: res['moodboards'].map(e => { return {...e.moodboard, percentageMatch: e.percentageMatch}})};
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveProject() {
    this.projectService.saveProject(this.project).subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  canChangeToStep(step): boolean {
    if (step >= this.steps.length || step < 0) {
      return false;
    }
    switch (step) {
      case 0: {
        return true;
      }
      case 1: {
        return !this.isEmpty(this.project.room);
      }
      case 2: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room)
        );
      }
      case 3: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.areProjectDetailsValid()
        );
      }
      case 4: {
        console.log()
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.areProjectDetailsValid() &&
          this.project.colorPalettes.length > 0
        );
      }
      case 5: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.areProjectDetailsValid() &&
          this.project.colorPalettes.length > 0 &&
          this.project.projectMoodboards.length > 0
        );
      }
    }
    return false;
  }

  isEmpty(object): boolean {
    return (
      !object ||
      (Object.keys(object).length === 0 &&
      Object.getPrototypeOf(object) === Object.prototype)
    );
  }

  areProjectDetailsValid(): boolean {
    return this.project.roomDetails['shape'] && this.project.roomDetails['size'] && !!this.project.budget;
  }

  toggleItem(item) {

    // if you change any selection, selected moodboard will reset
    if(this.currentStepNo < 4) {
      this.project.projectMoodboards = [];
    }
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select **and that it's not a moodboard step (this is addded additionaly, may change)**
    if (Array.isArray(this.project[stepName]) && this.currentStepNo !== 4) {
      if (
        this.project[stepName].some(
          (e) => JSON.stringify(e) === JSON.stringify(item)
        )
      ) {
        this.project[stepName] = this.project[stepName].filter(
          (e) => e.id !== item.id
        );
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else if(this.currentStepNo === 4) {
      this.project[stepName] =
        JSON.stringify(this.project[stepName]) === JSON.stringify(item)
          ? null
          : [item];
    }
     else {  // else it's a single select

      // if it's updating sub-object
      if(stepName.includes('.')) {
        this.project[stepName.split('.')[0]][stepName.split('.')[1]] =
        JSON.stringify(this.project[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item)
          ? null
          : item;
      } else {
        this.project[stepName] =
        JSON.stringify(this.project[stepName]) === JSON.stringify(item)
          ? null
          : item;
      }
    }
  }

  async openStartModal() {
    const modal = await this.modalController.create({
      component: CreateProjectModalComponent,
      componentProps: {start: true},
      cssClass: 'small-modal-css',
      backdropDismiss: false,
      swipeToClose: false,
    });

    await modal.present();
  }

  async openFinalModal() {
    const modal = await this.modalController.create({
      component: CreateProjectModalComponent,
      componentProps: {final: true, projectName: this.project.name},
      cssClass: 'final-project-step-modal-css',
      backdropDismiss: false,
      swipeToClose: false,
    });

    await modal.present();
  }
}
