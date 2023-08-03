import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { OpenFileModalComponent } from '../modals/open-file-modal/open-file-modal.component';
import { LanguageService } from 'src/app/services/language.service';
import { StyleService } from 'src/app/services/style.service';
import { Observable } from 'rxjs';
import { CommonUtilsService } from 'src/app/services/CommonUtils.service';

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
  @Input() loggedUser: any;
  @Output() toggleSelection = new EventEmitter<object>();

  types: Array<any> = [];
  providers: Array<any> = [];

  constructor(
    private modalController: ModalController,
    private languageService: LanguageService,
    private styleService: StyleService,
    private commonUtilsService: CommonUtilsService
  ) { }

  currentLang: string = '';
  filteredStyleImages$: Observable<any> = this.styleService.filteredStyleImages$;

  ngOnInit() {
    console.log('ngOnInit')
    this.languageService.languageChange$.subscribe(res => this.currentLang = res);
  }

  ngOnChanges () {
    console.log('ngOnChanges')
    this.languageService.languageChange$.subscribe(res => this.currentLang = res);

    //Get inspirational photos for selected room & style
    if (this.currentStepNo == 2 && this.moodboard?.room?.id && this.moodboard?.style?.id) {
      this.styleService.getStyleImagesForRoomAndStyle(this.moodboard.room.id, this.moodboard.style.id);
      this.filteredStyleImages$.subscribe((res: Array<any>) => {
        this.currentStep.data = res;
      })
    }

    // Filters for materials & products
    if (this.currentStep.title === 'NEW-PROJECT.select-materials') {
      this.types = this.commonUtilsService.getUniqueElementsFromArray(this.currentStep.data.map(data => data.materialTypeName));
      this.providers = this.commonUtilsService.getUniqueElementsFromArray(this.currentStep.data.map(data => data.provider));
    } else if (this.currentStep.title === 'NEW-PROJECT.select-products') {

    } else {
      this.types = [];
      this.providers = []
    }
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

  onFilterChange (event) {
    console.log('data', this.currentStep)
    console.log('no', this.currentStepNo)
  }
}
