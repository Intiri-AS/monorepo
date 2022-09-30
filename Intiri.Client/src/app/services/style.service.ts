import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StyleService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStyles(){
    return this.http.get(this.apiUrl + 'styles');
  }

}