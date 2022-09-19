import { Component } from '@angular/core';
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

  moodboard: object = {
    'color-pallete': [],
    'materials': [],
    'products': []
  }

  stepsOrder: object = {
    0: 'color-pallete',
    1: 'materials',
    2: 'products',
  }

  currentStepNo: number = 0;

  constructor(public projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getStyleImages().subscribe((res: Array<any>) => {
      this.steps[0]['data'] = res;
    });
    this.projectService.getMaterials().subscribe((res: Array<any>) => {
      this.steps[1]['data'] = res.map(e => { const parsed = {...e, path: e.imagePath}; delete parsed.imagePath; return parsed; });
    });
    this.projectService.getProducts().subscribe((res: Array<any>) => {
      this.steps[2]['data'] = res.map(e => { const parsed = {...e, path: e.imagePath}; delete parsed.imagePath; return parsed; });
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
      case 1: { return this.moodboard['color-pallete'].length > 0; }
      case 2: { return this.moodboard['color-pallete'].length > 0 && this.moodboard['materials'].length > 0}
    }
    return true;
  }

  validateData(): boolean {
    return this.moodboard['color-pallete'].length > 0 && this.moodboard['materials'].length > 0 && this.moodboard['products'].length > 0
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.moodboard[stepName])) {
      if(this.moodboard[stepName].includes(item)) {
        this.moodboard[stepName] = this.moodboard[stepName].filter(e => e.id !== item.id);
      } else {
        this.moodboard[stepName] = [...this.moodboard[stepName], item];
      }
    } else {
      // else it's a single select
      this.moodboard[stepName] = this.moodboard[stepName] === item ? null : item;
    }
  }

}
