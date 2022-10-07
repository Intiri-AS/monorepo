import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  apiUrl = environment.apiUrl;
  private materialsSource = new ReplaySubject<any>(1);
  materials$ = this.materialsSource.asObservable();

  constructor(private http: HttpClient) { }

  getMaterials(){
    return this.http.get(this.apiUrl + 'materials').pipe(map((material) => {
      if(material) {
        this.materialsSource.next(material);
      }
    })).toPromise();
  }

  addMaterial(materialObj) {
    const formData = new FormData();
    Object.keys(materialObj).forEach(key => formData.append(key, materialObj[key]));
    formData.delete('imageFile'); // removing it first so we can manually add a file name
    formData.append('imageFile', materialObj.imageFile, `materialImg${materialObj.name.replace(/\s/g,'_')}.png`)
    return this.http.post(`${this.apiUrl}materials/add`, formData);
  }

  deleteMaterial(materialId) {
    return this.http.delete(this.apiUrl + 'materials/delete/' + materialId);
  }

  getMaterialTypes(){
    return this.http.get(this.apiUrl + 'materialTypes');
  }

}