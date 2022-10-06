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
  private currentMoodboardSource = new ReplaySubject<Moodboard>(1);
  currentMoodboard$ = this.currentMoodboardSource.asObservable();

  project: Project;
  moodboards: Moodboard[] = [];

  constructor(private http: HttpClient) { }

  setCurrentMoodboard(moodboard: Moodboard) {
    if(!moodboard) {
      moodboard = new Moodboard();
    }
    sessionStorage.setItem('moodboard', JSON.stringify(moodboard));
    this.currentMoodboardSource.next(moodboard);
  }

  getMoodboards(){
    if(this.moodboards.length > 0) return of(this.moodboards);
    return this.http.get<Moodboard[]>(this.apiUrl + 'moodboards').pipe(
      map(moodboards =>{
        this.moodboards = moodboards;
        return moodboards;
      })
    )
  }

  getMoodboard(moodboardName: string){
    const moodboard = this.moodboards.find(mb => mb.name === moodboardName);
    if(moodboard !== undefined) return of (moodboard);
    return this.http.get<Moodboard>(this.apiUrl + 'moodboards/name/' + moodboardName);
  }

  updateMoodboard(moodboard: Moodboard){
    return this.http.post<Moodboard>(this.apiUrl + 'moodboards/addMoodboard', moodboard).pipe(
      map(projectIn =>{
        const index = this.moodboards.indexOf(moodboard);
        this.moodboards[index] = moodboard;
      })
    )
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
    let id = route.params['id'];
    return this.getMoodboard(route.paramMap.get('name'));
  }

  storeMoodboardsFromProject(project: Project){
    this.project = project;
    this.moodboards = project.projectMoodboards;
    return of (this.moodboards)
  }

}