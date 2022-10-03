import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
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

  projects = [];
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

  constructor(public projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((res: Array<Project>) => {
      this.projects = res;
    });
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
    this.router.navigate(['/project-details'], {
      state:{
        data: project
      }
    });
  }

}
