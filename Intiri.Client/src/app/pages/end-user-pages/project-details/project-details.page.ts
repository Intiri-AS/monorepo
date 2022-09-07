import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})

export class ProjectDetailsPage {

  moodboards = [
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'moodboard 1',
      pieces: 20,
      updated: '1 week'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'moodboard 2',
      pieces: 10,
      updated: '1 day'
    }
  ]

  constructor() {}

}
