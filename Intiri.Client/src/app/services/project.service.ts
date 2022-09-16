import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  apiUrl = environment.apiUrl;
  private currentProjectSource = new ReplaySubject<Project>(1);
  currentProject$ = this.currentProjectSource.asObservable();

  constructor(private http: HttpClient) { }


  setCurrentProject(project: Project) {
    if(!project) {
      project = new Project();
    }
    sessionStorage.setItem('project', JSON.stringify(project));
    this.currentProjectSource.next(project);
  }

  getStyleImages(){
    return this.http.get(this.apiUrl + 'styleImages');
  }

  getColorPalletes(){
    return this.http.get(this.apiUrl + 'colorPalletes');
  }

  getRooms(){
    return this.http.get(this.apiUrl + 'rooms');
  }

  getMoodboardMatches(project) {
    const req_data = {
      styleImageIds: project.styleImages.map(e=> e.id),
      colorPaletteId: project.colorPallete.id,
      roomId: project.room.id,
      name: project.name}
    return this.http.post(this.apiUrl + 'projects/moodboard-match', req_data);
  }
}