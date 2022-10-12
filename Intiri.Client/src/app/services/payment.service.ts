import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendPayment(req){
    return this.http.post(this.apiUrl + 'payment', req);
  }

}