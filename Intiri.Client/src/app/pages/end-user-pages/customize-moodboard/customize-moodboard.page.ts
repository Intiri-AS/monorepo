import { Component } from '@angular/core';

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
      title: 'Select materials',
      data: [
        { id: 1, img: 'images/landing-img.png', title: 'Wood' },
        { id: 2, img: 'images/img-01.png', title: 'Ceramic'  },
        { id: 3, img: 'images/landing-img.png', title: 'Wood'  },
        { id: 4, img: 'images/intiri-logo.svg', title: 'Wool'  },
        { id: 5, img: 'images/landing-img.png', title: 'Wood'  },
        { id: 6, img: 'images/landing-img.png', title: 'Wood'  },
        { id: 7, img: 'images/landing-img.png', title: 'Wood'  }
      ],
    },
    {
      title: 'Select products',
      data: [
        { id: 1, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 2, img: 'images/img-01.png', title: 'Table'  },
        { id: 3, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 4, img: 'images/intiri-logo.svg', title: 'Sofa'  },
        { id: 5, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 6, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 7, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 8, img: 'images/img-01.png', title: 'Table'  },
        { id: 9, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 10, img: 'images/intiri-logo.svg', title: 'Sofa'  },
        { id: 11, img: 'images/img-01.png', title: 'Table'  },
        { id: 12, img: 'images/landing-img.png', title: 'Chair'  },
        { id: 13, img: 'images/intiri-logo.svg', title: 'Sofa'  },
      ],
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

  constructor() {}

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
