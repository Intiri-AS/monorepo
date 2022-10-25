import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class PartnerService {

  apiUrl = environment.apiUrl;
  private partnersSource = new ReplaySubject<any>(1);
  partners$ = this.partnersSource.asObservable();

  constructor(private http: HttpClient) { }

  getPartners(){
    return this.http.get(this.apiUrl + 'partner').pipe(map((partner) => {
      if(partner) {
        this.partnersSource.next(partner);
      }
    })).toPromise();
  }

  getProducts(){
    return this.http.get(this.apiUrl + 'products');
  }

  getProductsType(){
    return this.http.get(this.apiUrl + 'productTypes');
  }

  addPartner(partnerObj) {
    const formData = new FormData();
    Object.keys(partnerObj).forEach(key => formData.append(key, partnerObj[key]));
    formData.delete('logoFile'); // removing it first so we can manually add a file name
    formData.append('logoFile', partnerObj.logoFile, `partnerImg${partnerObj.name.replace(/\s/g,'_')}.png`)
    return this.http.post(`${this.apiUrl}partner/createPartner`, formData);
  }

  addPartnerContact(partnerObj) {
    return this.http.post(`${this.apiUrl}account/register/partnerContact`, partnerObj);
  }

  getPartner(id: number){
    return this.http.get<any>(this.apiUrl + 'partner/partner/' + id);
  }

  deletePartner(partnerId) {
    return this.http.delete(this.apiUrl + 'partner/delete/' + partnerId);
  }

  deletePartnerContact(contactId) {
    return this.http.delete(this.apiUrl + 'account/delete-user/' + contactId);
  }

  deleteProduct(productId) {
    return this.http.delete(this.apiUrl + 'products/delete/' + productId);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.getPartner(parseInt(route.paramMap.get('id')));
  }

}