import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


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
  @Input() project: object; // used only for create-project-page
  @Input() moodboard: object; // used only for customize-moodboard-page

  constructor() { }

  ngOnInit() {}

  goToStep(step) {
    this.changeStep.emit(step);
  }

  canChangeStep(step) {
    return this.canChangeToStep(step);
  }

}
