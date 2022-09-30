import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMaterials(){
    return this.http.get(this.apiUrl + 'materials');
  }

  getMaterialTypes(){
    return this.http.get(this.apiUrl + 'materialTypes');
  }

}