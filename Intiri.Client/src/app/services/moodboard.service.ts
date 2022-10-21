import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Moodboard } from '../models/moodboard.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class MoodboardService {

  apiUrl = environment.apiUrl;
  private mbSource = new ReplaySubject<any>(1);
  moodboards$ = this.mbSource.asObservable();

  constructor(private http: HttpClient) { }

  getMoodboards(){
    return this.http.get<Moodboard[]>(this.apiUrl + 'moodboards').pipe(map((mbs) => {
      if(mbs) {
        this.mbSource.next(mbs);
      }
    })).toPromise();;
  }

  getMoodboard(id: number){
    return this.http.get<Moodboard>(this.apiUrl + 'moodboards/id/' + id);
  }

  updateMoodboard(moodboard: Moodboard){
    return this.http.post<Moodboard>(this.apiUrl + 'moodboards/addMoodboard', moodboard);
  }

  addMoodboard(moodboard){
    const req_data = this.parseMoodboard(moodboard);
    return this.http.post(this.apiUrl + 'moodboards/add', req_data);
  }
  editMoodboard(moodboard) {
    const editMb = {
      moodboardId: moodboard.id,
      materialIds:  moodboard.materials.map(e=> e['id']),
      colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
      productIds: moodboard.products.map(e=> e['id']) };
    return this.http.put(this.apiUrl + 'moodboards/edit', editMb);
  }

  setIsTemplate(req) {
    return this.http.patch(this.apiUrl + 'moodboards/templateSet', req);
  }

  parseMoodboard(moodboard: Moodboard) {
    let parsedProj = {
      styleId: moodboard.style['id'],
      colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
      roomId: moodboard.room['id'],
      materialIds: moodboard.materials.map(e=> e['id']),
      productIds: moodboard.products.map(e=> e['id'])}
    return parsedProj;
  };

  resolve(route: ActivatedRouteSnapshot): Observable<Moodboard> {
    return this.getMoodboard(parseInt(route.paramMap.get('id')));
  }


}