import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ColorService {

  apiUrl = environment.apiUrl;
  private colorPalettesSource = new ReplaySubject<any>(1);
  colorPalettes$ = this.colorPalettesSource.asObservable();
  private colorsSource = new ReplaySubject<any>(1)
  colors$ = this.colorsSource.asObservable()

  constructor(private http: HttpClient) { }

  getColors() {
    return this.http.get(this.apiUrl + 'Colors').pipe(map((colors) => {
      if(colors) {
        this.colorsSource.next(colors);
      }
    })).toPromise();
  }

  getColorPalettes(){
    return this.http.get(this.apiUrl + 'colorPalettes').pipe(map((color) => {
      if(color) {
        this.colorPalettesSource.next(color);
      }
    })).toPromise();
  }

  addColorPalette(colorObj) {
    const formData = new FormData();
    Object.keys(colorObj).forEach(key => formData.append(key, colorObj[key]));
    return this.http.post(`${this.apiUrl}colorPalettes/add`, formData);
  }

  deleteColorPalette(colorId) {
    return this.http.delete(this.apiUrl + 'colorPalettes/delete/' + colorId);
  }

}