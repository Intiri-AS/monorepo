import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moodboard } from '../models/moodboard.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService implements Resolve<Project> {

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
    return this.http.get<Project[]>(this.apiUrl + 'projects');
  }

  getProject(id: number){
    return this.http.get<Project>(this.apiUrl + 'projects/id/' + id);
  }

  parseProject(project: Project) {
    let parsedProj = {
      styleImageIds: project.styleImages.map(e=> e['id']),
      colorPaletteIds: project.colorPalettes.map(e=> e['id']),
      roomId: project.room['id'],
      budgetRate: 0, // ?
      moodboard: this.parseMoodboard(project.currentMoodboard),
      roomDetails: {size: project.roomDetails['size'], shape: project.roomDetails['shape'].shape},
      name: project.name}

    return parsedProj;
  };

  getMoodboardMatches(project) {
    const req_data = this.parseProject(project);
    return this.http.post(this.apiUrl + 'projects/moodboard-match', req_data);
  }

  saveProject(project) {
    const req_data = this.parseProject(project);
    return this.http.post(this.apiUrl + 'projects/create', req_data);
  }

  addMoodboardToProject(project: Project)
  {
    const reqData = {
      projectId: project.id,
      moodboard: this.parseMoodboard(project.currentMoodboard)
    }
    return this.http.post(this.apiUrl + 'projects/addMoodboard', reqData);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.getProject(parseInt(route.paramMap.get('id')));
  }

  parseMoodboard(moodboard: Moodboard) {
    let parsedMdb = {
      styleId: moodboard.style['id'],
      colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
      roomId: moodboard.room['id'],
      materialIds: moodboard.materials.map(e=> e['id']),
      productIds: moodboard.products.map(e=> e['id']),
      id: moodboard.id,
      name: moodboard.name, // remove later
      sourceMoodboardId: moodboard.sourceMoodboardId
    }
    return parsedMdb;
  };

}
