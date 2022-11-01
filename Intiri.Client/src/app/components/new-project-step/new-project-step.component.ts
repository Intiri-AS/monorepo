import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-project-step',
  templateUrl: './new-project-step.component.html',
  styleUrls: ['./new-project-step.component.scss'],
})
export class NewProjectStepComponent implements OnInit {

  apiUrl = environment.apiUrl;
  @Input() currentStep: any;
  @Input() project: any;
  @Input() currentStepNo: number;
  @Input() stepsOrder: object;
  @Output() toggleSelection = new EventEmitter<object>();

  imagePath = null;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {}

  toggleItem(item) {
    this.toggleSelection.emit(item);
  }

  toggleRoomSketch(item) {
    this.toggleSelection.emit(item);
    this.imagePath = null;
    this.project.roomDetails.imageFile = null;
  }

  isArray(item) {
    return Array.isArray(item);
  }

  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }

  onFileChange(event) {
    if(event.target.files[0]) {
      this.project.roomDetails.imageFile = event.target.files[0];
      this.project.roomDetails.shape = {shape: "", imagePath: ""};
      event.srcElement.value = "";
      this.imagePath = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.project.roomDetails.imageFile));
    } else {
      this.imagePath = null;
    }
  }

  isItemSelected(item): boolean {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.project[stepName])) {
      if(this.project[stepName].some(e => e.id === item.id)) {
        return true;
      }
    } else { // else it's a single select
       // if it's updating sub-object
       if(stepName.includes('.')) {
        return JSON.stringify(this.project[stepName.split('.')[0]][stepName.split('.')[1]]) === JSON.stringify(item)
       }
       else {
        return this.project[stepName]?.id === item.id
       }
    }
    return false;
  }

}
