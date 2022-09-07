import { Component } from '@angular/core';

@Component({
  selector: 'app-moodboard-details-page',
  templateUrl: './moodboard-details.page.html',
  styleUrls: ['./moodboard-details.page.scss'],
})

export class MoodboardDetailsPage {

  parts = [
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Parkett'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Couch'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Boot'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Carpet'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Floor'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: '6634 / Soft Touch'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Walls'
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Desk'
    }
  ]

  constructor() {}

}
