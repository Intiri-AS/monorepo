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
  private styleImagesSource = new ReplaySubject<any>(1);
  styleImages$ = this.styleImagesSource.asObservable();

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
    formData.append('imageFile', styleObj.imageFile, `styleImg${styleObj.name.replace(/\s/g,'_')}.png`)
    return this.http.post(`${this.apiUrl}styles/add`, formData);
  }

  deleteStyle(styleId) {
    return this.http.delete(this.apiUrl + 'styles/delete/' + styleId);
  }

  //StyleImages
  getStyleImages(){
    return this.http.get(this.apiUrl + 'styleImages').pipe(map((styleImages) => {
      if(styleImages) {
        this.styleImagesSource.next(styleImages);
      }
    })).toPromise();
  }

  addStyleImage(styleImageObj) {
    const formData = new FormData();
    const uniqueStr = Date.now().toString(36) + Math.random().toString(36);
    Object.keys(styleImageObj).forEach(key => formData.append(key, styleImageObj[key]));
    formData.delete('imageFile'); // removing it first so we can manually add a file name
    formData.append('imageFile', styleImageObj.imageFile, `styleImg${uniqueStr}.png`)
    return this.http.post(`${this.apiUrl}styleImages/add`, formData);
  }

  deleteStyleImage(styleImageId) {
    return this.http.delete(this.apiUrl + 'styleImages/delete/' + styleImageId);
  }

}