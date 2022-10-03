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

  getColorPalettes(){
    return this.http.get(this.apiUrl + 'colorPalettes');
  }

  getRooms(){
    return this.http.get(this.apiUrl + 'rooms');
  }

  getProducts(){
    return this.http.get(this.apiUrl + 'products');
  }

  getMaterials(){
    return this.http.get(this.apiUrl + 'materials');
  }

  getAllProjects(){
    return this.http.get(this.apiUrl + 'projects');
  }

  parseProject(project: Project) {
    let parsedProj = {
      styleImageIds: project.styleImages.map(e=> e['id']),
      colorPaletteIds: project.colorPalettes.map(e=> e['id']),
      roomId: project.room['id'],
      moodboardIds: project.projectMoodboards.map(e=> e['id']),
      roomDetails: {size: project.roomDetails['size'], shape: project.roomDetails['shape'].shape},
      name: project.name}

    // if(project.moodboard?.['id']) {
    //   parsedProj['moodboardId'] = project.moodboard['id']
    // }
    return parsedProj;
  };

  getMoodboardMatches(project) {
    const req_data = this.parseProject(project);
    return this.http.post(this.apiUrl + 'projects/moodboard-match', req_data);
  }

  saveProject(project) {
    const req_data = this.parseProject(project);
    return this.http.post(this.apiUrl + 'projects/add', req_data);
  }

  addMoodboardToProject(project)
  {
    const reqData = {
      projectId: project['id'],
      moodboardId: project.projectMoodboards[0].id
    }

    return this.http.post(this.apiUrl + 'projects/addMoodboard', reqData);

  }
}
