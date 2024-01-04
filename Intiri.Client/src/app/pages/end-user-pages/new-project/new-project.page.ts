import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CreateProjectModalComponent } from 'src/app/components/modals/create-project-modal/create-project-modal.component';
import { LoginModalComponent } from 'src/app/components/modals/login/login-modal.component';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';
import { CommonUtilsService } from 'src/app/services/CommonUtils.service';
import { AccountService } from 'src/app/services/account.service';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit, OnDestroy {
  isScrolledDown: boolean;
  isExistingProject: boolean = false;

  steps: Array<object> = [
    {
      title: 'NEW-PROJECT.select-room-title',
      subtitle: 'NEW-PROJECT.select-room-text',
      data: [],
    },
    {
      title: 'NEW-PROJECT.select-style-title',
      subtitle: 'NEW-PROJECT.select-style-text',
      data: [],
    },
    {
      title: 'NEW-PROJECT.room-details-title',
      subtitle: 'NEW-PROJECT.room-details-text',
      data: {
        roomShapes: [
          { shape: 'rectangular', imagePath: 'icon/rectangle.png' },
          { shape: 'square', imagePath: 'icon/square.png' },
          { shape: 'l-shaped', imagePath: 'icon/l-shape.png' },
        ],
      },
    },
    {
      title: 'NEW-PROJECT.select-color-title',
      subtitle: 'NEW-PROJECT.select-color-text',
      data: [],
    },
    {
      title: 'NEW-PROJECT.select-moodboard-title',
      subtitle: 'NEW-PROJECT.select-moodboard-text',
      data: [],
    },
    {
      title: 'NEW-PROJECT.your-style',
      subtitle:
        'This style captures the balance between comfort and minimalism characteristic of Scandinavial bright design. This include clean lines, minimal decoration and the importance of artwork. Try to create an environment that encourages feelings of strenght, contentmentt and clean lines. Typicalcoloors are calming and neutral with palettes sticking to whites, grays, greens, black and blue accents. The syle allso reflects the wooden landscape and trees of the Nordic countries.',
      data: 'final',
    },
  ];

  project: Project = null;

  stepsOrder: object = {
    0: 'room',
    1: 'styleImages',
    2: 'roomDetails.shape',
    3: 'colorPalettes',
    4: 'currentMoodboard',
    5: 'final',
  };

  currentStepNo: number = 0;

  private subscriptions: Subscription[] = [];

  constructor(
    private modalController: ModalController,
    public projectService: ProjectService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private nav: NavController,
    private commonUtilsService: CommonUtilsService,
    private moodboardService: MoodboardService,
    private notifier: NotifierService,
    private translate: TranslateService,
    private storage: Storage
  ) { }

  ngOnInit() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const stepParam = parseInt(urlParams.get('step'), 10);

    const checkForProject = JSON.parse(sessionStorage.getItem('project'));
    if (checkForProject.name.length) {
      this.project = checkForProject;
    }

    if (stepParam === 5 && this.canChangeToStep(stepParam)) {
      console.log('File: new-project.page.ts, Function: ngOnInit, stepParam:', stepParam);
      console.log('File: new-project.page.ts, Function: ngOnInit, canChangeToStep:', this.canChangeToStep(stepParam));
      this.currentStepNo = stepParam;
      console.log('File: new-project.page.ts, Function: ngOnInit, currentStepNo:', this.currentStepNo);
      this.goToStep(5);
    } else if (stepParam === 5 && !this.canChangeToStep(stepParam)) {
      console.log('File: new-project.page.ts, Function: ngOnInit, stepParam is 5 but cannot change to step');
    }

    this.subscriptions.push(
      this.projectService.currentProject$.subscribe((project) => {
        this.project = project;
        if (project.name === '') {
          this.openStartModal();
        }
        if (project.id) {
          this.isExistingProject = true;
        }
      })
    );

    this.projectService.getRooms().subscribe((res) => {
      this.steps[0]['data'] = res;
    });

    this.projectService.getColorPalettes().subscribe((res) => {
      this.steps[3]['data'] = res;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  changeQueryParam(step) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        step,
      },
    });
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
      this.changeQueryParam(this.currentStepNo);
      this.projectService.setCurrentProject(this.project);
    }
    if (this.currentStepNo === 4) {
      this.projectService.setCurrentProject(this.project);
      this.getMoodboardMatches();
    }
  }

  nextStep() {
    const isUserLoggedIn = this.checkIfUserLoggedIn();
    if (this.currentStepNo + 1 === 5 && !isUserLoggedIn) {
      this.projectService.setCurrentProject(this.project);
      this.openLoginModal();
      return;
    }

    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
      this.changeQueryParam(this.currentStepNo);
      this.projectService.setCurrentProject(this.project);
    }
    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  //Fixed values for skip page button
  skipPage() {
    const colorPalettes = [
      {
        id: 1,
        name: 'Space Gray',
        number: 3043,
        mainColor: '#696868',
        shadeColorLight: '#B4B3B3',
        shadeColorMedium: '#808080',
        shadeColorDark: '#3A3A3A',
      },
    ];
    if (this.currentStepNo === 2) {
      this.currentStepNo++;
      return;
    }
    if (this.currentStepNo === 3) {
      this.currentStepNo++;
      this.changeQueryParam(this.currentStepNo);
      const projectData: Project = { ...this.project, colorPalettes };
      this.projectService.setCurrentProject(projectData);
    }
    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  goToStep(stepNo) {
    console.log('File: new-project.page.ts, Function: goToStep, stepNo:', stepNo, ' - at the start of goToStep function');
    const isUserLoggedIn = this.checkIfUserLoggedIn();
    console.log('File: new-project.page.ts, Function: goToStep, isUserLoggedIn:', isUserLoggedIn, ' - after checking if user is logged in');

    if (stepNo === 5 && !isUserLoggedIn) {
      console.log('File: new-project.page.ts, Function: goToStep - inside if block where stepNo is 5 and user is not logged in');
      this.openLoginModal();
      return;
    }

    // If stepNo is 5, perform the following operations
    if (stepNo === 5) {
      // If the current moodboard id exists, return immediately
      if (this.project.currentMoodboard.id) {
        console.log('File: new-project.page.ts, Function: goToStep, currentMoodboard.id exists - inside if block where currentMoodboard.id exists');
        return;
      }
      // If the current moodboard id is 0, return immediately
      if (this.project.currentMoodboard.id === 0) {
        console.log('File: new-project.page.ts, Function: goToStep, currentMoodboard.id is 0 - inside if block where currentMoodboard.id is 0');
        return;
      }
      // Show the spinner while loading the moodboard
      this.spinner.show();
      let currentMoodboard = this.project.currentMoodboard;
      // Fetch the moodboard from the service
      this.moodboardService
        .getMoodboard(currentMoodboard.id)
        .subscribe((res: Moodboard) => {
          // Update the current moodboard with the response
          this.project.currentMoodboard = res;
          // Hide the spinner after loading the moodboard
          this.spinner.hide();

          // If the response exists, update the current step number and change the query parameter
          if (res) {
            this.currentStepNo = stepNo;
            console.log('File: new-project.page.ts, Function: goToStep, currentStepNo:', this.currentStepNo, ' - after updating currentStepNo and changing query parameter');
            this.changeQueryParam(stepNo);
            this.projectService.setCurrentProject(this.project);
          }
        });
      return;
    }

    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
      console.log('File: new-project.page.ts, Function: goToStep, currentStepNo:', this.currentStepNo, ' - after updating currentStepNo and changing query parameter in the canChangeToStep if block');
      this.changeQueryParam(stepNo);
      this.projectService.setCurrentProject(this.project);
    }

    if (stepNo === 4) {
      console.log('File: new-project.page.ts, Function: goToStep - inside if block where stepNo is 4');
      this.getMoodboardMatches();
    }
  }
  getMoodboardMatches() {
    this.spinner.show();
    this.projectService.getMoodboardMatches(this.project).subscribe(
      (res) => {
        this.spinner.hide();
        this.project.currentMoodboard = new Moodboard();
        this.steps[4]['data'] = {
          //moodboardFamily: res['moodboardFamily'],
          moodboardFamily: [],
          moodboards: res['moodboards'].map((e) => {
            return { ...e.moodboard, moodboardMatch: e.moodboardMatch };
          }),
        };
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  goToProject() {
    this.nav.navigateRoot(`/project-details/${this.project.id}`);
  }

  onCustomizeMoodboardButtonClick() {
    if (this.project.currentMoodboard.room == null) {
      // Handling if moodboard shopping list is not loaded fully yet
      this.notifier.show({
        message: this.translate.instant(
          'MOODBOARD-DETAILS.shopping-list-loading'
        ),
        type: 'error',
      });
      return;
    }
    this.nav.navigateRoot('/customize-moodboard');
  }

  saveCurrentProject(): void {
    if (this.project.currentMoodboard.room == null) {
      // Handling if moodboard shopping list is not loaded fully yet
      this.notifier.show({
        message: this.translate.instant(
          'MOODBOARD-DETAILS.shopping-list-loading'
        ),
        type: 'error',
      });
      return;
    }
    this.spinner.show();
    if (this.isExistingProject) {
      this.projectService.addMoodboardToProject(this.project).subscribe(
        (res) => {
          this.spinner.hide();
          this.project.projectMoodboards.push(this.project.currentMoodboard);
          this.projectService.setCurrentProject(this.project);

          //remove un-necessary key key
          this.storage.remove(
            this.commonUtilsService.COMMON_STORAGE_KEYS
              .IS_MOODBOARD_LOADED_ONCE_KEY
          );
          this.goToProject();
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
    } else {
      this.saveProject();
    }
  }

  saveProject() {
    this.projectService.saveProject(this.project).subscribe(
      (res: Project) => {
        this.spinner.hide();
        this.project.projectMoodboards.push(this.project.currentMoodboard);
        this.project.id = res.id;

        //remove un-necessary key key
        this.storage.remove(
          this.commonUtilsService.COMMON_STORAGE_KEYS
            .IS_MOODBOARD_LOADED_ONCE_KEY
        );

        this.projectService.setCurrentProject(this.project);
        this.goToProject();
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  canChangeToStep(step): boolean {
    console.log('File: new-project.page.ts, Function: canChangeToStep, step:', step, ' - at the start of canChangeToStep function');

    if (step >= this.steps.length || step < 0) {
      console.log('File: new-project.page.ts, Function: canChangeToStep - inside if block where step is out of bounds');
      return false;
    }

    switch (step) {
      case 0: {
        console.log('File: new-project.page.ts, Function: canChangeToStep - inside case 0');
        return true;
      }
      case 1: {
        console.log('File: new-project.page.ts, Function: canChangeToStep, isEmpty:', this.isEmpty(this.project.room), ' - inside case 1');
        return !this.isEmpty(this.project.room);
      }
      case 2: {
        console.log('File: new-project.page.ts, Function: canChangeToStep, styleImages.length:', this.project.styleImages.length, ', isEmpty:', this.isEmpty(this.project.room), ' - inside case 2');
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room)
        );
      }
      case 3: {
        console.log('File: new-project.page.ts, Function: canChangeToStep, styleImages.length:', this.project.styleImages.length, ', roomSketchFiles:', this.project.roomDetails.roomSketchFiles, ' - inside case 3');
        return (
          this.project.styleImages.length > 0 &&
          this.project.roomDetails.roomSketchFiles &&
          Object.keys(this.project.roomDetails.roomSketchFiles).length > 0
        );
      }
      case 4: {
        console.log('File: new-project.page.ts, Function: canChangeToStep, styleImages.length:', this.project.styleImages.length, ', isEmpty:', this.isEmpty(this.project.room), ', colorPalettes.length:', this.project.colorPalettes.length, ' - inside case 4');
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.project.colorPalettes.length > 0
        );
      }
      case 5: {
        console.log('File: new-project.page.ts, Function: canChangeToStep, styleImages.length:', this.project.styleImages.length, ', isEmpty:', this.isEmpty(this.project.room), ', colorPalettes.length:', this.project.colorPalettes.length, ', isMoodboardEmpty:', this.isMoodboardEmpty(this.project.currentMoodboard), ' - inside case 5');
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.project.colorPalettes.length > 0 &&
          !this.isMoodboardEmpty(this.project.currentMoodboard)
        );
      }
    }

    console.log('File: new-project.page.ts, Function: canChangeToStep - at the end of canChangeToStep function');
    return false;
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
      this.project.roomDetails['roomSketchFiles'] &&
      Object.keys(this.project.roomDetails['roomSketchFiles']).length > 0
    );
  }

  toggleItem(item) {
    // if you change any selection, selected moodboard will reset
    if (this.currentStepNo <= 4) {
      this.project.currentMoodboard = new Moodboard();
      this.storage.set(
        this.commonUtilsService.COMMON_STORAGE_KEYS
          .IS_MOODBOARD_LOADED_ONCE_KEY,
        false
      );
    }
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if (Array.isArray(this.project[stepName])) {
      if (this.project[stepName].some((e) => e.id === item.id)) {
        this.project[stepName] = this.project[stepName].filter(
          (e) => e.id !== item.id
        );
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    } else {
      // else it's a single select

      // if it's updating sub-object
      if (stepName.includes('.')) {
        this.project[stepName.split('.')[0]][stepName.split('.')[1]] =
          JSON.stringify(
            this.project[stepName.split('.')[0]][stepName.split('.')[1]]
          ) === JSON.stringify(item)
            ? null
            : item;
      } else {
        this.project[stepName] =
          JSON.stringify(this.project[stepName]) === JSON.stringify(item)
            ? null
            : item;
      }
    }
  }

  async openStartModal() {
    const modal = await this.modalController.create({
      component: CreateProjectModalComponent,
      componentProps: { start: true },
      cssClass: 'small-modal-css',
      backdropDismiss: false,
      swipeToClose: false,
    });

    await modal.present();
  }

  async openFinalModal(existing: boolean = false) {
    const modal = await this.modalController.create({
      component: CreateProjectModalComponent,
      componentProps: { final: true, existing, project: this.project },
      cssClass: 'final-project-step-modal-css',
      backdropDismiss: false,
      swipeToClose: false,
    });

    await modal.present();
  }

  async openLoginModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: LoginModalComponent,
      cssClass: 'medium-modal-css',
      backdropDismiss: true,
      swipeToClose: false,
    });

    await modal.present();
  }

  private checkIfRedirectedFromLogin(): boolean {
    return this.route.snapshot.queryParamMap.get('step') != null;
  }

  private checkIfUserLoggedIn(): boolean {
    let isUserLoggedIn = false;
    this.accountService.currentUser$.subscribe((user) => {
      if (user) {
        isUserLoggedIn = true;
      }
    });
    return isUserLoggedIn;
  }
}
