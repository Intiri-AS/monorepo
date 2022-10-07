import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moodboard } from 'src/app/models/moodboard.model';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { ProjectService } from 'src/app/services/project.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-add-moodboard',
  templateUrl: './add-moodboard.page.html',
  styleUrls: ['./add-moodboard.page.scss'],
})
export class AddMoodboardPage implements OnInit {

  steps: Array<object> = [
    {
      title: 'Rooms',
      data: [],
    },
    {
      title: 'Styles',
      data: [],
    },
    {
      title: 'Materials',
      data: {roomShapes: [{shape: 'rectangular', imagePath: 'icon/rectangle.png'}, {shape: 'square', imagePath: 'icon/square.png'}, {shape: 'l-shaped', imagePath: 'icon/l-shape.png'}]},
    },
    {
      title: 'Colors',
      data: [],
    },
    {
      title: 'Products',
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
    2: 'materials',
    3: 'colorPalettes',
    4: 'products',
    5: 'final'
  };

  moodboard = new Moodboard();

  currentStepNo: number = 0;

  constructor(public projectService: ProjectService, private moodboardSrv: MoodboardService, private styleSrv: StyleService, private router: Router) { }

  ngOnInit() {
    this.projectService.getRooms().subscribe((res) => {
      this.steps[0]['data'] = res;
    });
    this.styleSrv.getStyles();
    this.styleSrv.styles$.subscribe((res: Array<any>) => {
      this.steps[1]['data'] = res.map(e => {e.imagePath = (!e.imagePath || e.imagePath === 'path') ?  e.styleImages[0].imagePath : e.imagePath; return e;});
    });
    this.projectService.getMaterials().subscribe((res: Array<any>) => {
      this.steps[2]['data'] = res;
    });
    this.projectService.getColorPalettes().subscribe((res) => {
      this.steps[3]['data'] = res;
    });
    this.projectService.getProducts().subscribe((res: Array<any>) => {
      this.steps[4]['data'] = res;
    });
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
          this.moodboard.materials.length > 3 &&
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style)
        );
      }
      case 4: {
        return (
          this.moodboard.materials.length > 3 &&
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style) &&
          this.moodboard.colorPalettes.length > 1
        );
      }
      case 5: {
        return (
          this.moodboard.materials.length > 3 &&
          this.moodboard.products.length > 1 &&
          !this.isEmpty(this.moodboard.room) &&
          !this.isEmpty(this.moodboard.style) &&
          this.moodboard.colorPalettes.length > 1
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
          (e) => JSON.stringify(e) === JSON.stringify(item)
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

  saveMoodboard() {
    this.moodboardSrv.addMoodboard(this.moodboard).subscribe(
      (res) => {
        this.moodboardSrv.getMoodboards();
        this.router.navigateByUrl('/moodboards');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isEmpty(object): boolean {
    return (
      !object ||
      (Object.keys(object).length === 0 &&
      Object.getPrototypeOf(object) === Object.prototype)
    );
  }


}
