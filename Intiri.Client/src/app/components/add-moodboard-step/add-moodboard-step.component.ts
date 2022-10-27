import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-moodboard-step',
  templateUrl: './add-moodboard-step.component.html',
  styleUrls: ['./add-moodboard-step.component.scss'],
})
export class AddMoodboardStepComponent implements OnInit {

  apiUrl = environment.apiUrl;
  @Input() disabledSteps: any;
  @Input() currentStep: any;
  @Input() moodboard: any;
  @Input() currentStepNo: number;
  @Input() stepsOrder: object;
  @Output() toggleSelection = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {}

  toggleItem(item) {
    this.toggleSelection.emit(item);
  }

  isArray(item) {
    return Array.isArray(item);
  }

  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }


  isItemSelected(item): boolean {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.moodboard[stepName])) {
      if(this.moodboard[stepName].some(e => e?.id === item?.id)) {
        return true;
      }
    } else { // else it's a single select
       // if it's updating sub-object
       if(stepName.includes('.')) {
        return JSON.stringify(this.moodboard[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item)
       }
       else {
        return  this.moodboard[stepName]?.id === item?.id
       }
    }
    return false;
  }

}
