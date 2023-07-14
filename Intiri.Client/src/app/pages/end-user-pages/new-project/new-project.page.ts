import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CreateProjectModalComponent } from 'src/app/components/modals/create-project-modal/create-project-modal.component';
import { LoginModalComponent } from 'src/app/components/modals/login/login-modal.component';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';
import { AccountService } from 'src/app/services/account.service';
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
      subtitle:'NEW-PROJECT.select-moodboard-text',
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
  ) {}

  ngOnInit() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const stepParam = parseInt(urlParams.get('step'), 10);

    this.route.queryParams.subscribe((stepParam: any) => {
      if (+stepParam.step === 4 && this.checkIfUserLoggedIn() && this.canChangeToStep(+stepParam.step)) {
        this.currentStepNo = +stepParam.step;
        this.goToStep(4);
      }
    })

    const checkForProject = JSON.parse(sessionStorage.getItem('project'));
    if (checkForProject.name.length) {
      this.project = checkForProject;
    }

    if (stepParam === 5 && this.canChangeToStep(stepParam)) {
      this.currentStepNo = stepParam;
      this.goToStep(5);
    }

    this.subscriptions.push(
      this.projectService.currentProject$.subscribe((project) => {
        this.project = project;
        if (project.name === "") {
          this.openStartModal();
        } if (project.id) {
          this.isExistingProject = true;
        }
      })
    );

    this.projectService.getRooms().subscribe((res) => {
      this.steps[0]['data'] = res;
    });

    this.projectService.getStyleImages().subscribe((res) => {
      this.steps[1]['data'] = res;
    });

    this.projectService.getColorPalettes().subscribe((res) => {
      this.steps[3]['data'] = res;
    });

  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  changeQueryParam(step){
    this.router.navigate([], {
     relativeTo: this.route,
     queryParams: {
       step
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
    if (this.currentStepNo + 1 === 4 && !isUserLoggedIn) {
      this.projectService.setCurrentProject(this.project);
      this.openLoginModal();
    } else {
      if (this.canChangeToStep(this.currentStepNo + 1)) {
        this.currentStepNo++;
        this.changeQueryParam(this.currentStepNo);
        this.projectService.setCurrentProject(this.project);
      }
      if (this.currentStepNo === 4) {
        this.getMoodboardMatches();
      }
    }
  }


  //Fixed values for skip page button
  skipPage() {
    const colorPalettes
    = [{"id":1,"name":"Space Gray","number":3043,"mainColor":"#696868","shadeColorLight":"#B4B3B3","shadeColorMedium":"#808080","shadeColorDark":"#3A3A3A"}];
    if (this.currentStepNo === 3) {
      this.currentStepNo++;
      this.changeQueryParam(this.currentStepNo);
      const projectData: Project = {...this.project, colorPalettes };
      this.projectService.setCurrentProject(projectData);
    }
    if (this.currentStepNo === 4) {
      this.getMoodboardMatches();
    }
  }

  goToStep(stepNo) {
    const isUserLoggedIn = this.checkIfUserLoggedIn();
    if (stepNo === 4 && !isUserLoggedIn) {
      this.openLoginModal();
    } else {
      if (this.canChangeToStep(stepNo)) {
        this.currentStepNo = stepNo;
        this.changeQueryParam(stepNo);
        this.projectService.setCurrentProject(this.project);
      }
      if (stepNo === 4) {
        this.getMoodboardMatches();
      }
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

  goToProject () {
    this.nav.navigateRoot(`/project-details/${this.project.id}`);
  }

  saveCurrentProject()
  {
    this.spinner.show();
    if(this.isExistingProject) {
      this.projectService.addMoodboardToProject(this.project).subscribe(
        (res) => {
          this.spinner.hide();
          this.project.projectMoodboards.push(this.project.currentMoodboard);
          this.projectService.setCurrentProject(this.project);
          // this.openFinalModal(true);
          this.goToProject();
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
    }
    else {
      this.saveProject();
    }
  }

  saveProject() {
    this.projectService.saveProject(this.project).subscribe(
      (res: Project) => {
        this.spinner.hide();
        this.project.projectMoodboards.push(this.project.currentMoodboard);
        this.project.id = res.id;
        this.projectService.setCurrentProject(this.project);
        // this.openFinalModal();
        this.goToProject();
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  canChangeToStep(step): boolean {
    if (step >= this.steps.length || step < 0) {
      return false;
    }
    switch (step) {
      case 0: {
        return true;
      }
      case 1: {
        return !this.isEmpty(this.project.room);
      }
      case 2: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room)
        );
      }
      case 3: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.areProjectDetailsValid()
        );
      }
      case 4: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.areProjectDetailsValid() &&
          this.project.colorPalettes.length > 0
        );
      }
      case 5: {
        return (
          this.project.styleImages.length > 0 &&
          !this.isEmpty(this.project.room) &&
          this.areProjectDetailsValid() &&
          this.project.colorPalettes.length > 0 &&
          !this.isMoodboardEmpty(this.project.currentMoodboard)
        );
      }
    }
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
    if(!moodboard.id && !moodboard.name && moodboard.materials.length === 0 && moodboard.products.length === 0 && moodboard.colorPalettes.length === 0) {
      return true;
    } return false;
  }

  areProjectDetailsValid(): boolean {
    return this.project.roomDetails['roomSketchFile'] &&
            this.project.roomDetails['roomSketchFile'].type &&
            this.project.roomDetails['roomSketchFile'].type.includes('image');
  }

  toggleItem(item) {
    // if you change any selection, selected moodboard will reset
    if(this.currentStepNo < 4) {
      this.project.currentMoodboard = new Moodboard();
    }
    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if (Array.isArray(this.project[stepName])) {
      if (
        this.project[stepName].some(
          (e) => e.id === item.id
        )
      ) {
        this.project[stepName] = this.project[stepName].filter(
          (e) => e.id !== item.id
        );
      } else {
        this.project[stepName] = [...this.project[stepName], item];
      }
    }
     else {  // else it's a single select

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
      componentProps: {final: true, existing, project: this.project},
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
