import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-step-picker',
  templateUrl: './step-picker.component.html',
  styleUrls: ['./step-picker.component.scss'],
})
export class StepPickerComponent implements OnInit {
  @Input() page: string = 'create-project';
  @Input() currentStepNo: number;
  @Input() steps: Array<object>;
  @Input() canChangeToStep: (value: any) => boolean;
  @Output() changeStep = new EventEmitter<number>();

  // inputs used only for canChangeStep() function, since it needs to pass context to "this".
  @Input() project: Project; // used only for create-project-page
  @Input() moodboard: object; // used only for customize-moodboard-page
  @Input() isEditMoodboardPage: boolean;

  constructor() {}

  ngOnInit() {}

  goToStep(step) {
    this.changeStep.emit(step);
  }

  isEmpty(object): boolean {
    return (
      !object ||
      (Object.keys(object).length === 0 &&
        Object.getPrototypeOf(object) === Object.prototype)
    );
  }

  isMoodboardEmpty(moodboard: Moodboard): boolean {
    if (
      !moodboard.id &&
      !moodboard.name &&
      moodboard.materials.length === 0 &&
      moodboard.products.length === 0 &&
      moodboard.colorPalettes.length === 0
    ) {
      return true;
    }
    return false;
  }

  areProjectDetailsValid(): boolean {
    return (
      (this.project.roomDetails['shape'] ||
        this.project.roomDetails['imageFile']) &&
      this.project.roomDetails['size'] &&
      !!this.project.roomDetails['budgetRate']
    );
  }

  canChangeStep(step) {
    return this.canChangeToStep(step);
  }
}
