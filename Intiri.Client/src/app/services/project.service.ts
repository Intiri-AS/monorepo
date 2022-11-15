import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private inspirationsSource = new ReplaySubject<any>(1);
  inspirations$ = this.inspirationsSource.asObservable();

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

  getMbFamily(styleId, roomId) {
    return this.http.get(`${this.apiUrl}projects/moodboardStyleFamily/${styleId}/${roomId}`);
  }

  parseProject(project: Project) {
    let parsedProj = {
      styleImageIds: project.styleImages.map(e=> e['id']),
      colorPaletteIds: project.colorPalettes.map(e=> e['id']),
      roomId: project.room['id'],
      // budgetRate: 0,
      // moodboard: this.parseMoodboard(project.currentMoodboard),
      // roomDetails: {size: project.roomDetails['size'], shape: project.roomDetails['shape'].shape, budgetRate: project.roomDetails['budgetRate']},
      name: project.name};

    return parsedProj;
  };

  parseProjectAsFormData(project) {
    const moodboard = this.parseMoodboardFormData(project.currentMoodboard);
    const parsedFormData = {
      styleImageIds: project.styleImages.map(e=> e['id']),
      projectColorPaletteIds: project.colorPalettes.map(e=> e['id']),
      projectRoomId: project.room['id'],
      projectName: project.name,
      shape: project.roomDetails['shape'].shape,
      size: project.roomDetails['size'],
      budgetRate: project.roomDetails['budgetRate'],
      roomSketchFile: project.roomDetails['roomSketchFile'] || undefined,
      id: moodboard.id,
      name: moodboard.name,
      // sourceMoodboardId: moodboard.sourceMoodboardId,
      styleId: moodboard.styleId,
      // designerId: moodboard.designerId,
      roomId: moodboard.roomId,
      isTemplate: moodboard.template,
      materialsId: moodboard.materialIds,
      colorPaletteIds: moodboard.colorPaletteIds,
      productIds: moodboard.productIds
    };
    const formData = new FormData();
    Object.keys(parsedFormData).forEach(key => formData.append(key, parsedFormData[key]));
    return formData;
  }

  getMoodboardMatches(project) {
    const req_data = this.parseProject(project);
    return this.http.post(this.apiUrl + 'projects/moodboardMatch', req_data);
  }

  saveProject(project) {
    const req_data = this.parseProjectAsFormData(project);
    return this.http.post(this.apiUrl + 'projects/create', req_data);
  }

  addMoodboardToProject(project: Project)
  {
    const moodboard = this.parseMoodboardFormData(project.currentMoodboard);
    const reqData = {
      projectId: project.id,
      shape: project.roomDetails['shape'].shape,
      size: project.roomDetails['size'],
      budgetRate: project.roomDetails['budgetRate'],
      roomSketchFile: project.roomDetails['roomSketchFile'] || undefined,
      id: moodboard.id,
      name: moodboard.name,
      description: moodboard.description,
      // sourceMoodboardId: moodboard.sourceMoodboardId,
      styleId: moodboard.styleId,
      // designerId: moodboard.designerId,
      roomId: moodboard.roomId,
      isTemplate: moodboard.template,
      materialsId: moodboard.materialIds,
      colorPaletteIds: moodboard.colorPaletteIds,
      productIds: moodboard.productIds
    };
    const formData = new FormData();
    Object.keys(reqData).forEach(key => formData.append(key, reqData[key]));
    return this.http.post(this.apiUrl + 'projects/addMoodboard', formData);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.getProject(parseInt(route.paramMap.get('id')));
  }

  parseMoodboard(moodboard: any) {
    if(moodboard.room && moodboard.style) {
      let parsedMdb = {
        styleId: moodboard.style ? moodboard.style['id'] : null,
        colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
        roomId: moodboard.room['id'],
        materialIds: moodboard?.materials.map(e=> e['id']),
        productIds: moodboard?.products.map(e=> e['id']),
        id: moodboard.id,
        name: moodboard.name, // remove later
        sourceMoodboardId: moodboard.sourceMoodboardId
      }
      return parsedMdb;
    } return moodboard;
  };

  parseMoodboardFormData(moodboard: any) {
      const parsedMdb = {
        styleId: moodboard.style ? moodboard.style['id'] : null,
        colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
        roomId: moodboard.room['id'],
        materialIds: moodboard?.materials.map(e=> e['id']),
        productIds: moodboard?.products.map(e=> e['id']),
        id: moodboard.id,
        name: moodboard.name, // remove later
        // sourceMoodboardId: moodboard.sourceMoodboardId, //provera
        // designerId: moodboard.designerId,
        template: moodboard.isTemplate,
        description: moodboard.description

      };
      return parsedMdb;
  };

  getInspirations() {
    return this.http.get(this.apiUrl + 'inspirations').pipe(map((inspirations) => {
      this.inspirationsSource.next(inspirations);
    })).toPromise();
  }

  addInspiration(file) {
    const formData = new FormData();
    formData.append('inFile', file);
    return this.http.post(this.apiUrl + 'inspirations/add', formData);
  }

  deleteInspiration(id) {
    return this.http.delete(this.apiUrl + 'inspirations/delete/' + id);
  }

}
