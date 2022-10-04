import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StyleService {

  apiUrl = environment.apiUrl;
  private stylesSource = new ReplaySubject<any>(1);
  styles$ = this.stylesSource.asObservable();

  constructor(private http: HttpClient) { }

  getStyles(){
    return this.http.get(this.apiUrl + 'styles').pipe(map((styles) => {
      if(styles) {
        this.stylesSource.next(styles);
      }
    })).toPromise();
  }

  addStyle(styleObj) {
    const formData = new FormData();
    Object.keys(styleObj).forEach(key => formData.append(key, styleObj[key]));
    formData.delete('imageFile'); // removing it first so we can manually add a file name
    formData.append('imageFile', styleObj.imageFile, `styleImg${styleObj.name.replace(/\s/g,'')}.png`)
    return this.http.post(`${this.apiUrl}styles/add`, formData);
  }

  deleteStyle(styleId) {
    return this.http.delete(this.apiUrl + 'styles/delete/' + styleId);
  }

}