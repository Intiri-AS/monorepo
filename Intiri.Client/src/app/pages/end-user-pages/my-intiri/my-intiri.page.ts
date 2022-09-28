import { Component, ViewChild } from '@angular/core';
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

  constructor(public projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((res: Array<Project>) => {
      this.projects = res;
    });
  }

  // TODO: needs to be updated after project is allowed to have multiple moodboards!
  getPiecesNo(project){
    return project.moodboard.colorPalettes.length + project.moodboard.materials.length + project.moodboard.products.length;
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
}
