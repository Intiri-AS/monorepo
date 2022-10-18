import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DesignerService {

  languages = {
    'EN': 'English',
    'NO': 'Norwegian',
    'NO/EN': 'English, Norwegian'
  }

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDesigners(){
    return this.http.get(this.apiUrl + 'designers');
  }

  getContactDesigners() {
    return this.http.get(this.apiUrl + 'designers/contactDesigners');
  }

  getDesigner(id){
    return this.http.get(this.apiUrl + 'designers/id/' + id);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getDesigner(parseInt(route.paramMap.get('id')));
  }


}