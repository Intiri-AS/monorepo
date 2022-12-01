import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  apiUrl = environment.apiUrl;
  private roomsSource = new ReplaySubject<any>(1);
  rooms$ = this.roomsSource.asObservable();

  constructor(private http: HttpClient) { }

  getRooms(){
    return this.http.get(this.apiUrl + 'rooms').pipe(map((room) => {
      if(room) {
        this.roomsSource.next(room);
      }
    })).toPromise();
  }

  addRoom(roomObj) {
    const formData = new FormData();
    Object.keys(roomObj).forEach(key => formData.append(key, roomObj[key]));
    formData.delete('imageFile'); // removing it first so we can manually add a file name
    formData.append('imageFile', roomObj.imageFile, `roomImg${roomObj.name.replace(/\s/g,'_')}.png`)
    return this.http.post(`${this.apiUrl}rooms/add`, formData);
  }

  deleteRoom(roomId) {
    return this.http.delete(this.apiUrl + 'rooms/delete/' + roomId);
  }

  editRoom(roomId, roomObj) {
    const formData = new FormData();
    Object.keys(roomObj).forEach(key => formData.append(key, roomObj[key]));
    if (roomObj.imageFile) {
      formData.delete('imageFile'); // removing it first so we can manually add a file name
      formData.append('imageFile', roomObj.imageFile, `styleImg${roomObj.name.replace(/\s/g,'_')}.png`);
      return this.http.patch(this.apiUrl + 'rooms/update/' + roomId, formData)
    } else {
      return this.http.patch(this.apiUrl + 'rooms/update/' + roomId, formData)
    }
  }

  getRoomTypes(){
    return this.http.get(this.apiUrl + 'roomTypes');
  }

}
