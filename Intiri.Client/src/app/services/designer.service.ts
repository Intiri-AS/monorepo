import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private designersSource = new ReplaySubject<any>(1);
  designers$ = this.designersSource.asObservable();

  constructor(private http: HttpClient) { }

  getDesigners(){
    return this.http.get(this.apiUrl + 'designers').pipe(map((designer) => {
      if(designer) {
        this.designersSource.next(designer);
      }
    })).toPromise();
  }

  addDesigner(designerObj) {
    return this.http.post(`${this.apiUrl}account/register/designer`, designerObj);
  }

  getContactDesigners() {
    return this.http.get(this.apiUrl + 'designers/contactDesigners');
  }

  getDesigner(id){
    return this.http.get(this.apiUrl + 'designers/id/' + id);
  }

  rateDesigner(payload) {
    return this.http.put(this.apiUrl + 'ratings/addRating', payload);
  }

  isDesignerRated(designerId) {
    return this.http.get(this.apiUrl + 'ratings/isRated/id/' + designerId);
  }

  getDesignerRating(){
    return this.http.get(this.apiUrl + 'ratings/designerRating');
  }

  getDesignerClients() {
    return this.http.get(this.apiUrl + 'designers/designerClients');
  }

  getDesignerClient(consultationPaymentId) {
    return this.http.get(this.apiUrl + 'designers/clientConsultation/' + consultationPaymentId);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getDesigner(parseInt(route.paramMap.get('id')));
  }


}