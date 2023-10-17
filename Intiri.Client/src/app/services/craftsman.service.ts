import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanService {
  craftsmanPages = {
    default: 'https://prosjekt.luado.no/',
    kitchen:
      'https://prosjekt.luado.no/project-types/136/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
    bathroom:
      'https://prosjekt.luado.no/project-types/137/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
    bedroom:
      'https://prosjekt.luado.no/project-types/138/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
    livingroom:
      'https://prosjekt.luado.no/project-types/139/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
    dinningroom:
      'https://prosjekt.luado.no/project-types/139/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
    youthroom:
      'https://prosjekt.luado.no/projects/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard/',
  };

  constructor() {}

  getCraftsmanUrl(roomIndex: any) {
    return this.craftsmanPages[roomIndex]
      ? this.craftsmanPages[roomIndex]
      : this.craftsmanPages['default'];
  }
}
