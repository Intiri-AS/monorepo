import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

//TODO Example service for API calls

export class DataService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  getDesignerRate() {
    return this.http.get(this.apiUrl + 'ratings/designerRating');
  }
}
