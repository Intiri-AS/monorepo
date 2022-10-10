import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  sendMessage(messageData) {
    return this.http.post(`${this.apiUrl}messenger`, messageData);
  }

}