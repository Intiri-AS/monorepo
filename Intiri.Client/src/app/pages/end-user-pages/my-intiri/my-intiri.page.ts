import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-intiri-page',
  templateUrl: './my-intiri.page.html',
  styleUrls: ['./my-intiri.page.scss'],
})

export class MyIntiriPage {

  projects = [
    {
      projectName: 'Vintage',
      moodboard: '2',
      pieces: '20',
      updated: '1 week',
      image: '../../../../assets/images/landing-img.png'
    },
    {
      projectName: 'Industrial',
      moodboard: '3',
      pieces: '25',
      updated: '1 day',
      image: '../../../../assets/images/landing-img.png'
    },
    {
      projectName: 'Minimal',
      moodboard: '1',
      pieces: '5',
      updated: '3 week',
      image: '../../../../assets/images/landing-img.png'
    },
    {
      projectName: 'Funky',
      moodboard: '0',
      pieces: '20',
      updated: '1 day',
      image: '../../../../assets/images/landing-img.png'
    },
  ];

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

  constructor(
    private nav: NavController
  ) {}

  details() {
    this.nav.navigateRoot('/project-details');
  }

}
