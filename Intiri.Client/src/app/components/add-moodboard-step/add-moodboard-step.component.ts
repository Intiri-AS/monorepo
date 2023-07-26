import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { LanguageService } from 'src/app/services/language.service';

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

  constructor(private modalController: ModalController, private languageService: LanguageService) { }

  currentLang: string = ''

  ngOnInit() {
    this.languageService.languageChange$.subscribe(res => this.currentLang = res);
  }

  ngOnChanges () {
    this.languageService.languageChange$.subscribe(res => this.currentLang = res);
  }

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

  async openImageInModal(item, image) {
    this.toggleSelection.emit(item);
    const modal = await this.modalController.create({
      component: OpenFileModalComponent,
      componentProps: {file: image, canDelete: false},
      cssClass: 'open-file-modal-css'
    });

    await modal.present();
  }

}
