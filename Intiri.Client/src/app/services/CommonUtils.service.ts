import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonUtilsService {

  constructor() { }

  inspirationalPhotosProvider: Array<any> = [
    'Flügger',
    'Tarkett',
    'Flotte gulv',
    'Epoq',
    'Rotpunkt',
    'Lampemagasinet',
    'Flisekompaniet',
    'Ellos',
    'Between the walls',
    'Others'
  ];

  getUniqueElementsFromArray(arr) {
    const uniqueValues = Array.from(new Set(arr.filter(value => value !== null && value != 'null')));
    return uniqueValues;
  }

  shuffleArrayElements = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
}
