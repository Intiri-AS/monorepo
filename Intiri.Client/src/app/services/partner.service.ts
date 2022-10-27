import { HttpClient } from '@angular/common/http';
import { ReadPropExpr } from '@angular/compiler';
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
  private productSource = new ReplaySubject<any>(undefined)
  partners$ = this.partnersSource.asObservable();
  products$ = this.productSource.asObservable();

  constructor(private http: HttpClient) { }

  getPartners(){
    return this.http.get(this.apiUrl + 'partner').pipe(map((partner) => {
      if(partner) {
        this.partnersSource.next(partner);
      }
    })).toPromise();
  }

  getProductsFromThatPartner(){
    return this.http.get(this.apiUrl + 'products').pipe(map((productResponse) => {
      if (productResponse) {
        this.productSource.next(productResponse)
      }
    }))
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

  getPartnerProfile() {
    return this.http.get<any>(this.apiUrl + 'partner/profile')
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

  addPartnerProduct(productData: any) {
    const formData = new FormData();
    Object.keys(productData).forEach(key => formData.append(key, productData[key]));
    formData.delete('imageFile'); // removing it first so we can manually add a file name
    formData.append('imageFile', productData.imageFile, `productImg${productData.name.replace(/\s/g,'_')}.png`)
    return this.http.post(`${this.apiUrl}products/add`, formData);
  }

}