import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class PartnerService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.apiUrl + 'products');
  }

  getProductsType(){
    return this.http.get(this.apiUrl + 'productTypes');
  }

}