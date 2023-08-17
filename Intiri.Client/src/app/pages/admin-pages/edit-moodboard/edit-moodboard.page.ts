import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Moodboard } from 'src/app/models/moodboard.model';
import { AccountService } from 'src/app/services/account.service';
import { DesignerService } from 'src/app/services/designer.service';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { ProjectService } from 'src/app/services/project.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-edit-moodboard',
  templateUrl: './edit-moodboard.page.html',
  styleUrls: ['./edit-moodboard.page.scss'],
})
export class AdminEditMoodboardPage implements OnInit {

  steps: Array<object> = [
    {
      title: 'STYLE.select-room-moodboard',
      data: [],
    },
    {
      title: 'STYLE.select-style-moodboard',
      data: [],
    },
    {
      title: 'STYLE.select-inspirational-photos',
      data: [],
    },
    {
      title: 'NEW-PROJECT.select-materials',
      data: {roomShapes: [{shape: 'rectangular', imagePath: 'icon/rectangle.png'}, {shape: 'square', imagePath: 'icon/square.png'}, {shape: 'l-shaped', imagePath: 'icon/l-shape.png'}]},
    },
    {
      title: 'MY-INTIRI.select-colors',
      data: [],
    },
    {
      title: 'PARTNERS.select-products',
      data: [],
    },
    {
      title: '',
      data: 'final'
    }
  ];

  stepsOrder: object = {
    0: 'room',
    1: 'style',
    2: 'styleImages',
    3: 'materials',
    4: 'colorPalettes',
    5: 'products',
    6: 'final'
  };

  moodboard = new Moodboard();
  clientMoodboard = new Moodboard();

  isInternalDesigner: boolean;
  //addType: 'add' | 'addForClient' | 'editForClient';
  consultationPaymentId = null;
  client = null;
  clientRequestStep = false;
  loggedUser$ = this.accountService.currentUser$;

  currentStepNo: number = 0;

  moodboardId: any;

  constructor(public projectService: ProjectService, private moodboardSrv: MoodboardService, private styleSrv: StyleService,
    private router: Router, private route: ActivatedRoute, private designerService: DesignerService,
    private accountService: AccountService, private notifier: NotifierService, private spinner: NgxSpinnerService,
    private translate: TranslateService) { }

  ngOnInit() {

    // this.consultationPaymentId = this.route.snapshot.params.paymentId;
    this.moodboardId = this.route.snapshot.params.id;
    console.log('moodboardId', this.moodboardId);
    this.spinner.show();
    this.moodboardSrv.getMoodboard(this.moodboardId).subscribe(moodboard => {
      console.log('moodboard', moodboard);
      this.moodboard = moodboard;
      this.spinner.hide();
    })


    this.projectService.getRooms().subscribe((res) => {
      this.steps[0]['data'] = res;
    });
    this.styleSrv.getStyles();
    this.styleSrv.styles$.subscribe((res: Array<any>) => {
      this.steps[1]['data'] = res.map(e => {e.imagePath = (!e.imagePath || e.imagePath === 'path') ?  e.styleImages[0].imagePath : e.imagePath; return e;});
    });
    this.projectService.getMaterials().subscribe((res: Array<any>) => {
      this.steps[3]['data'] = res;
    });
    this.projectService.getColorPalettes().subscribe((res) => {
      this.steps[4]['data'] = res;
    });
    this.projectService.getProducts().subscribe((res: Array<any>) => {
      this.steps[5]['data'] = res;
    });
  }

  backStep() {
    if (this.canChangeToStep(this.currentStepNo - 1)) {
      this.currentStepNo--;
    }
    this.clientRequestStep = false;
  }

  nextStep() {
    if (this.canChangeToStep(this.currentStepNo + 1)) {
      this.currentStepNo++;
    }
    this.clientRequestStep = false;
  }

  goToStep(stepNo) {
    if (this.canChangeToStep(stepNo)) {
      this.currentStepNo = stepNo;
    }
    this.clientRequestStep = false;
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
        return !this.isEmpty(this.moodboard.room);
      }
      case 2: {
        return (
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style)
        );
      }
      case 3: {
        return (
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style)
        );
      }
      case 4: {
        return (
          this.moodboard.materials.length > 3 &&
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style)
        );
      }
      case 5: {
        return (
          this.moodboard.materials.length > 3 &&
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style) &&
          this.moodboard.colorPalettes.length > 0
        );
      }
      case 6: {
        return (
          this.moodboard.materials.length > 3 &&
          this.moodboard.products.length > 1 &&
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style) &&
          this.moodboard.colorPalettes.length > 0
        );
      }
    }
    return false;
  }

  toggleItem(item) {

    const stepName = this.stepsOrder[this.currentStepNo];
    // check if it's multi-select
    if (Array.isArray(this.moodboard[stepName])) {
      if (
        this.moodboard[stepName].some(
          (e) => e.id === item.id
        )
      ) {
        this.moodboard[stepName] = this.moodboard[stepName].filter(
          (e) => e.id !== item.id
        );
      } else {
        this.moodboard[stepName] = [...this.moodboard[stepName], item];
      }
    }
     else {  // else it's a single select
        this.moodboard[stepName] =
        JSON.stringify(this.moodboard[stepName]) === JSON.stringify(item)
          ? null
          : item;
    }
  }

  sendOffer() {
    this.spinner.show();
    if(this.client.moodboardOfferId) {
      this.moodboardSrv.editMoodboard(this.moodboard).subscribe(res => {
        if(res['id']) {
          this.spinner.hide();
          this.notifier.show({
            message: this.translate.instant('NOTIFY.offer-updated'),
            type: 'success',
          });
          this.router.navigateByUrl('/client-list');
         }
      }, () => {
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.offer-updated-error'),
          type: 'error',
        });
       })
    } else {
      this.moodboardSrv.addMoodboardOffer(this.moodboard, this.consultationPaymentId).subscribe(res => {
        if(res['id']) {
         this.spinner.hide();
         this.notifier.show({
           message: this.translate.instant('NOTIFY.offer-created'),
           type: 'success',
         });
         this.router.navigateByUrl('/client-list');
        }
      }, () => {
       this.spinner.hide();
       this.notifier.show({
         message: this.translate.instant('NOTIFY.offer-created-error'),
         type: 'error',
       });
      })
    }

  }

  saveMoodboard() {
    this.spinner.show();
    this.moodboardSrv.editMoodboard(this.moodboard).subscribe(
      (res) => {
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.moodboard-updated'),
          type: 'success',
        });
        this.moodboard = new Moodboard();
        this.currentStepNo = 0;
        this.moodboardSrv.getMoodboards();
        const userType = JSON.parse(localStorage.getItem('user'));
        if (userType.roles[0] === 'Admin') {
          this.router.navigateByUrl('/moodboards');
        } else {
          this.router.navigateByUrl('/my-moodboard');
        }
      },
      (error) => {
        this.spinner.hide();
        this.notifier.show({
          message: this.translate.instant('NOTIFY.moodboard-created-error'),
          type: 'error',
        });
      }
    );
  }

  cancel() {
    if(this.client) {
      this.router.navigateByUrl('/client-list');
    } else {
      this.router.navigateByUrl('/moodboards');
    }
  }

  isEmpty(object): boolean {
    return (
      !object ||
      (Object.keys(object).length === 0 &&
      Object.getPrototypeOf(object) === Object.prototype)
    );
  }


}
