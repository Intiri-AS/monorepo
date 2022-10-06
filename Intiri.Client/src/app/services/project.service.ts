import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService implements Resolve<Project> {

  apiUrl = environment.apiUrl;
  private currentProjectSource = new ReplaySubject<Project>(1);
  currentProject$ = this.currentProjectSource.asObservable();

  projects: Project[] = [];

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
    if(this.projects.length > 0) return of(this.projects);
    return this.http.get<Project[]>(this.apiUrl + 'projects').pipe(
      map(projects =>{
        this.projects = projects;
        return projects;
      })
    )
  }

  getProject(projectName: string){
    const project = this.projects.find(pr => pr.name === projectName);
    if(project !== undefined) return of (project);
    return this.http.get<Project>(this.apiUrl + 'projects/name/' + projectName);
  }

  parseProject(project: Project) {
    let parsedProj = {
      styleImageIds: project.styleImages.map(e=> e['id']),
      colorPaletteIds: project.colorPalettes.map(e=> e['id']),
      roomId: project.room['id'],
      budgetRate: 0, // ?
      moodboard: project.currentMoodboard,
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
    return this.http.post(this.apiUrl + 'projects/add', req_data);
  }

  addMoodboardToProject(project: Project)
  {
    const reqData = {
      projectName: project.name,
      //moodboardId: project.projectMoodboards[0].id
      //projectId: project.id,
      moodboard: project.currentMoodboard
    }
    return this.http.post(this.apiUrl + 'projects/addMoodboard', reqData);
  }

  addToObservableColl(project: any){
    this.setCurrentProject(project);
    const index = this.projects.indexOf(project);
    this.projects[index] = project;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.getProject(route.paramMap.get('name'));
  }
  
}
