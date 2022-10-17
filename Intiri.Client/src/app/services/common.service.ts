import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDashboardData(){
    return this.http.get(this.apiUrl + 'admin/totalCount')
  }

}