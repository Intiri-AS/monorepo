import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { Moodboard } from 'src/app/models/moodboard.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-customize-moodboard-page',
  templateUrl: './customize-moodboard.page.html',
  styleUrls: ['./customize-moodboard.page.scss'],
})

export class CustomizeMoodboardPage {
  isScrolledDown: boolean;

  steps: Array<object> = [
    {
      title: 'Select colors',
      data: [],
    },
    {
      title: 'Select materials',
      data: [],
    },
    {
      title: 'Select products',
      data: [],
    }
  ];

  initialMoodboard: Moodboard;
  moodboard: Moodboard;

  stepsOrder: object = {
    0: 'colorPalettes',
    1: 'materials',
    2: 'products',
  }

  currentStepNo: number = 0;

  constructor(public projectService: ProjectService) {}

  ngOnInit() {

    this.projectService.currentProject$.subscribe((project) => {
      this.moodboard = project.currentMoodboard;
      this.initialMoodboard = {...project.currentMoodboard};
    });
    this.projectService.getColorPalettes().subscribe((res: Array<any>) => {
      this.steps[0]['data'] = res;
    });
    this.projectService.getMaterials().subscribe((res: Array<any>) => {
      this.steps[1]['data'] = res;
    });
    this.projectService.getProducts().subscribe((res: Array<any>) => {
      this.steps[2]['data'] = res;
    });
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
      case 1: { return this.moodboard.colorPalettes.length > 0; }
      case 2: { return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length > 0}
    }
    return true;
  }

  validateData(): boolean {
    return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length > 3 && this.moodboard.products.length > 1;
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.moodboard[stepName])) {
      if(this.moodboard[stepName].some(e => e.id === item.id)) {
        this.moodboard[stepName] = this.moodboard[stepName].filter(e => e.id !== item.id);
      } else {
        this.moodboard[stepName] = [...this.moodboard[stepName], item];
      }
    } else {
      // else it's a single select
      this.moodboard[stepName] = this.moodboard[stepName] === item ? null : item;
    }
  }

  finishCustomizing() {
    if(JSON.stringify(this.moodboard) !== JSON.stringify(this.initialMoodboard)) {
      this.moodboard.sourceMoodboardId = this.moodboard.id;
      this.moodboard.id = 0;
    }
    this.projectService.currentProject$.pipe(take(1)).subscribe((project) => {
      const customizedProject = project;
      customizedProject.currentMoodboard = this.moodboard;
      this.projectService.setCurrentProject(customizedProject);
      location.replace('/new-project?step=5'); // in future figure out how to do this with router.navigate
    });
  }

}
