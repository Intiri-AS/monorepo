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

  private filteredStyleImageSource = new ReplaySubject<any>(1);
  filteredStyleImages$ = this.filteredStyleImageSource.asObservable();

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
    formData.append('imageFile', styleObj.imageFile, `styleImg${styleObj.name.replace(/\s/g,'_')}.png`);
    return this.http.post(`${this.apiUrl}styles/add`, formData);
  }

  deleteStyle(styleId) {
    return this.http.delete(this.apiUrl + 'styles/delete/' + styleId);
  }

  editStyle(styleId, styleObj) {
    const formData = new FormData();
    Object.keys(styleObj).forEach(key => formData.append(key, styleObj[key]));
    if (styleObj.imageFile) {
      formData.delete('imageFile'); // removing it first so we can manually add a file name
      formData.append('imageFile', styleObj.imageFile, `styleImg${styleObj.name.replace(/\s/g,'_')}.png`);
      return this.http.patch(this.apiUrl + 'styles/update/' + styleId, formData)
    } else {
      return this.http.patch(this.apiUrl + 'styles/update/' + styleId, formData)
    }
  }

  //StyleImages
  getStyleImages(){
    return this.http.get(this.apiUrl + 'styleImages').pipe(map((styleImages) => {
      if(styleImages) {
        this.styleImagesSource.next(styleImages);
      }
    })).toPromise();
  }

  getStyleImagesByRoom (roomId: number) {
    return this.http.get(this.apiUrl + 'StyleImages/getStyleImagesByRoom/' + roomId);
  }

  getStyleImagesForRoomAndStyle (roomId, styleId) {
    return this.http.get(`${this.apiUrl}styleImages/getStyleImagesByRoomAndStyle/${roomId}/${styleId}`).pipe(map(styleImages => {
      if (styleImages) {
        this.filteredStyleImageSource.next(styleImages);
      }
    })).toPromise();
  }

  addStyleImage(styleImageObj) {
    const formData = new FormData();
    formData.append('styleId', styleImageObj.styleId);
    formData.append('roomId', styleImageObj.roomId);
    formData.append('provider', styleImageObj.provider);

    Object.keys(styleImageObj.imageFiles).forEach((key, i) => {
      let uniqueStr = Date.now().toString(36) + Math.random().toString(36);
      formData.append('imageFile', styleImageObj.imageFiles[key], `imageFiles${uniqueStr}.png`)
    });
    return this.http.post(`${this.apiUrl}styleImages/add`, formData);
  }

  editStyleImage(styleId, styleObj) {
    const formData = new FormData();
    Object.keys(styleObj).forEach(key => formData.append(key, styleObj[key]));
    if (styleObj.imageFile) {
      formData.delete('imageFile'); // removing it first so we can manually add a file name
      formData.append('imageFile', styleObj.imageFile, `styleImg${styleObj.imageFile.name.replace(/\s/g,'_')}.png`);
      return this.http.patch(this.apiUrl + 'styleImages/update/' + styleId, formData)
    } else {
      return this.http.patch(this.apiUrl + 'styleImages/update/' + styleId, formData)
    }
  }

  deleteStyleImage(styleImageId) {
    return this.http.delete(this.apiUrl + 'styleImages/delete/' + styleImageId);
  }

}
