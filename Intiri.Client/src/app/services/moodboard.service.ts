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
  project: Project;
  constructor(private http: HttpClient) { }

  getMoodboards(){
    return this.http.get<Moodboard[]>(this.apiUrl + 'moodboards');
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