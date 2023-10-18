import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;
  private userSource = new ReplaySubject<any>(1);
  users$ = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(this.apiUrl + 'users/endUsers')
      .pipe(
        map((user) => {
          if (user) {
            this.userSource.next(user);
          }
        })
      )
      .toPromise();
  }

  deleteUser(userId) {
    return this.http.delete(this.apiUrl + 'account/delete-user/' + userId);
  }
}
