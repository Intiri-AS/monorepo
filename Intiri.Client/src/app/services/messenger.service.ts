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
    let formData = new FormData();
    formData.append('RecipientId', messageData.recipientId);
    formData.append('Content', messageData.content);
    return this.http.post(`${this.apiUrl}messenger`, formData);
  }

  getContacts() {
    return this.http.get(`${this.apiUrl}messenger/chat-persons`);
  }

  getChatHistory(userId) {
    return this.http.get(`${this.apiUrl}messenger/chat-history/${userId}`);
  }

}