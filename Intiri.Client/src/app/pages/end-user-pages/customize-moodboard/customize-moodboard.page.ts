import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs/operators';
import { Moodboard } from 'src/app/models/moodboard.model';
import { MoodboardService } from 'src/app/services/moodboard.service';
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
      title: 'NEW-PROJECT.edit-select-color',
      data: [],
    },
    {
      title: 'NEW-PROJECT.edit-select-materials',
      subtitle: 'NEW-PROJECT.edit-select-materials-text',
      data: [],
    },
    {
      title: 'NEW-PROJECT.edit-select-products',
      subtitle: 'NEW-PROJECT.edit-select-products-text',
      data: [],
    }
  ];

  initialMoodboard: Moodboard;
  moodboard: Moodboard;
  isEdit: boolean;

  stepsOrder: object = {
    0: 'colorPalettes',
    1: 'materials',
    2: 'products'
  }

  currentStepNo: number = 0;
  isEditMoodboardPage: boolean = false;
  isCustomizeMoodboardPage: boolean = false;

  constructor (
    public projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private moodboardService: MoodboardService,
    private notifier: NotifierService,
    private location: Location,
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit() {
    if (this.router.url.includes('customize-moodboard')) {
      this.isCustomizeMoodboardPage = true;
    } else if (this.router.url.includes('edit-moodboard')) {
      this.isEditMoodboardPage = true;
    }

    if (this.isEditMoodboardPage) {
      this.steps.push({
        title: 'NEW-PROJECT.customize',
        subtitle: 'NEW-PROJECT.customize-moodboard-subtitle',
        data: {},
      });
      this.stepsOrder[3] = 'moodboard'
    }

    this.route.data.subscribe(data => {
      // if edit
      if(data.moodboard) {
        this.moodboard = data.moodboard;
        this.isEdit = true;
      } else {  // if customize
        this.projectService.currentProject$.subscribe((project) => {
          this.moodboard = project.currentMoodboard;
          this.initialMoodboard = {...project.currentMoodboard};
          this.isEdit = false;
        });
      }
      this.steps[0]['data'] = [...this.moodboard.colorPalettes];
      this.steps[1]['data'] = [...this.moodboard.materials];
      this.steps[2]['data'] = [...this.moodboard.products];

      if (this.isEditMoodboardPage) {
        this.steps[3]['data'] = {
          moodboard: this.moodboard
        };
      }

    })
  }

  goBack() {
    this.location.back();
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
      case 1: { return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length >= 4 }
      case 2: { return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length >= 4}
      case 3: {
        return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length >= 4;
      }
    }
    return true;
  }

  validateData(): boolean {
    return this.moodboard.colorPalettes.length > 0 && this.moodboard.materials.length > 3 && this.moodboard.products.length > 1;
  }

  toggleItem(item) {
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if(Array.isArray(this.moodboard[stepName])) {
      if(this.moodboard[stepName].some(e => e.id === item.id)) {
        this.moodboard[stepName] = this.moodboard[stepName].filter(e => e.id !== item.id);
      } else {
        this.moodboard[stepName] = [...this.moodboard[stepName], item];
      }
    } else {
      // else it's a single select
      this.moodboard[stepName] = this.moodboard[stepName] === item ? null : item;
    }
  }

  finish() {
    if(this.isEdit){
      this.finishEditing();
    } else {
      this.finishCustomizing()
    }
  }

  finishEditing() {
    this.spinner.show();
    this.moodboardService.editMoodboard(this.moodboard).subscribe(res => {
      this.spinner.hide();
      this.notifier.show({
        message: this.translate.instant('NOTIFY.moodboard-updated'),
        type: 'success',
      });
      const projectId = this.route.snapshot.paramMap.get('projectId')
      this.router.navigateByUrl(`/project-details/${projectId}/moodboard-details/${this.moodboard.id}`)
    })
  }

  finishCustomizing() {
    if(JSON.stringify(this.moodboard) !== JSON.stringify(this.initialMoodboard)) {
      this.moodboard.sourceMoodboardId = this.moodboard.id;
      this.moodboard.id = 0;
    }
    this.projectService.currentProject$.pipe(take(1)).subscribe((project) => {
      const customizedProject = project;
      customizedProject.currentMoodboard = this.moodboard;
      this.projectService.setCurrentProject(customizedProject);
      this.router.navigateByUrl('/new-project?step=5');
    });
  }

}
