import { Component } from '@angular/core';

@Component({
  selector: 'app-book-designer-page',
  templateUrl: './book-designer.page.html',
  styleUrls: ['./book-designer.page.scss'],
})

export class BookDesignerPage {

  designers = [
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Sheldon Cooper',
      logo: '../../../../assets/images/landing-img.png',
      designs: 120,
      rating: 4.5
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Mary Jane',
      logo: '../../../../assets/images/landing-img.png',
      designs: 160,
      rating: 4
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Marco Geller',
      logo: '../../../../assets/images/landing-img.png',
      designs: 100,
      rating: 3.7
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Sheldon Cooper',
      logo: '../../../../assets/images/landing-img.png',
      designs: 120,
      rating: 4.5
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Mary Jane',
      logo: '../../../../assets/images/landing-img.png',
      designs: 160,
      rating: 4
    },
    {
      image: '../../../../assets/images/landing-img.png',
      name: 'Marco Geller',
      logo: '../../../../assets/images/landing-img.png',
      designs: 100,
      rating: 3.7
    },
  ]

  constructor() {}

}
