import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRooms(){
    return this.http.get(this.apiUrl + 'rooms');
  }

}