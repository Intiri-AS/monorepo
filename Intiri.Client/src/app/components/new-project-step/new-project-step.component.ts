import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-project-step',
  templateUrl: './new-project-step.component.html',
  styleUrls: ['./new-project-step.component.scss'],
})
export class NewProjectStepComponent implements OnInit {

  apiUrl = environment.apiUrl;
  @Input() currentStep: object;
  @Input() project: object;
  @Input() currentStepNo: number;
  @Input() stepsOrder: object;
  @Output() toggleSelection = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {}

  toggleItem(item) {
    this.toggleSelection.emit(item);
  }

  isItemSelected(item): boolean {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.project[stepName])) {
      if(this.project[stepName].includes(item)) {
        return true;
      }
    } else {
      // else it's a single select
      return this.project[stepName] === item
    }
    return false;
  }

}
