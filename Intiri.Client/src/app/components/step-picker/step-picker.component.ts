import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-step-picker',
  templateUrl: './step-picker.component.html',
  styleUrls: ['./step-picker.component.scss'],
})
export class StepPickerComponent implements OnInit {

  @Input() currentStepNo: number;
  @Input() project: object;
  @Input() steps: Array<object>;
  @Input() canChangeToStep: (value: any) => boolean;
  @Output() changeStep = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

  goToStep(step) {
    this.changeStep.emit(step);
  }

  canChangeStep(step) {
    return this.canChangeToStep(step);
  }

}
