import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ShareModalComponent } from 'src/app/components/modals/share-rate-modals/share-modal/share-modal.component';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-intiri-page',
  templateUrl: './my-intiri.page.html',
  styleUrls: ['./my-intiri.page.scss'],
})

export class MyIntiriPage {
  @ViewChild('slides') slides: IonSlides;
  apiUrl = environment.apiUrl;

  projects$: Observable<Project[]>;
  projectId = 0;

  news = [
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Andy Miller',
      news: 'New moodboard'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Andy Miller',
      news: 'New moodboard'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Andy Miller',
      news: 'New moodboard'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Andy Miller',
      news: 'New moodboard'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Andy Miller',
      news: 'New moodboard'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Andy Miller',
      news: 'New moodboard'
    },
  ]

  options = {
    slidesPerView: 2,
    spaceBetween: 20,
  }

  constructor(
    public projectService: ProjectService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.projects$ = this.projectService.getAllProjects();
  }

  // TODO: needs to be updated after project is allowed to have multiple moodboards!
  getPiecesNo(project){
    let result = 0;
    project.projectMoodboards.forEach(moodboard => {
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    });
    return result;
  }
  
  normalizeSlashes(string): string {
    return string.replaceAll("\\", "/")
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  goToProjectDetails(project: Project){
    this.projectService.setCurrentProject(project);
    this.router.navigateByUrl('/project-details');
  }
  
  async openShare() {
    const modal = await this.modalController.create({
      component: ShareModalComponent,
    });

    await modal.present();
  }

}
