import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ColorService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getColorPalettes(){
    return this.http.get(this.apiUrl + 'colorPalettes');
  }

}