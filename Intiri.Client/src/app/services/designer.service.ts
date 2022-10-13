import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DesignerService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDesigners(){
    return this.http.get(this.apiUrl + 'admin/designers');
  }

}