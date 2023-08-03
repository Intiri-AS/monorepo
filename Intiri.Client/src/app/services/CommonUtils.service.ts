import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonUtilsService {

  constructor() { }

  getUniqueElementsFromArray(arr) {
    const uniqueValues = Array.from(new Set(arr.filter(value => value !== null && value != 'null')));
    return uniqueValues;
  }
}
