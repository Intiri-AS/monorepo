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

  getMbFamily(styleId: any, roomId: any) {
    return this.http.get(`${this.apiUrl}projects/moodboardStyleFamily/${styleId}/${roomId}`);
  }

  checkProjectName(projectName: string){
    return this.http.get(`${this.apiUrl}projects/checkProjectName/${projectName}`);
  }

  parseProject(project: Project) {
    let parsedProj = {
      styleImageIds: project.styleImages.map(e=> e['id']),
      colorPaletteIds: project.colorPalettes.map(e=> e['id']),
      roomId: project.room['id'],
      name: project.name};

    return parsedProj;
  };

  parseProjectAsFormData(project: Project) {
    const parsedFormData = {
      projectRoomId: project.room['id'],
      projectName: project.name
    };
    const styleImageIds = project.styleImages.map((e: { [x: string]: any; })=> e['id']);
    const projectColorPaletteIds = project.colorPalettes.map((e: { [x: string]: any; })=> e['id']);

    const formData = new FormData();

    Object.keys(parsedFormData).forEach(key => formData.append(key, parsedFormData[key]));
    this.formDataAppendCollection("StyleImageIds", styleImageIds, formData);
    this.formDataAppendCollection("ProjectColorPaletteIds", projectColorPaletteIds, formData);

    this.parseRoomDetailsFormData(project, formData);
    this.parseMoodboardFormData(project.currentMoodboard, formData);

    return formData;
  }

  getMoodboardMatches(project: Project) {
    const req_data = this.parseProject(project);
    return this.http.post(this.apiUrl + 'projects/moodboardMatch', req_data);
  }

  saveProject(project: Project) {
    const req_data = this.parseProjectAsFormData(project);
    return this.http.post(this.apiUrl + 'projects/create', req_data);
  }

  addMoodboardToProject(project: Project)
  {
    const formData = new FormData();

    formData.append('projectId', project.id.toString());
    this.parseRoomDetailsFormData(project, formData);
    this.parseMoodboardFormData(project.currentMoodboard, formData);

    return this.http.post(this.apiUrl + 'projects/addMoodboard', formData);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Project> {
    return this.getProject(parseInt(route.paramMap.get('id')));
  }

  parseMoodboard(moodboard: any) {
    if(moodboard.room && moodboard.style) {
      let parsedMdb = {
        styleId: moodboard.style ? moodboard.style['id'] : null,
        colorPaletteIds: moodboard.colorPalettes.map((e: { [x: string]: any; })=> e['id']),
        roomId: moodboard.room['id'],
        materialIds: moodboard?.materials.map((e: { [x: string]: any; })=> e['id']),
        productIds: moodboard?.products.map((e: { [x: string]: any; })=> e['id']),
        id: moodboard.id,
        name: moodboard.name, // remove later
        sourceMoodboardId: moodboard.sourceMoodboardId
      }
      return parsedMdb;
    } return moodboard;
  };

  parseMoodboardFormData(moodboard: any, formData: FormData) {
    const parsedMdb = {
      styleId: moodboard.style ? moodboard.style['id'] : null,
      roomId: moodboard.room['id'],
      id: moodboard.id,
      name: moodboard.name, // remove later
      sourceMoodboardId: moodboard.sourceMoodboardId ? moodboard.sourceMoodboardId : 0,
      isTemplate: moodboard.isTemplate,
      description: moodboard.description
    };

    const materialIds=  moodboard?.materials.map((e: { [x: string]: any; })=> e['id']);
    const colorPaletteIds = moodboard.colorPalettes.map((e: { [x: string]: any; })=> e['id']);
    const productIds = moodboard?.products.map((e: { [x: string]: any; })=> e['id']);

    Object.keys(parsedMdb).forEach(key => formData.append("Moodboard." + key, parsedMdb[key]));

    this.formDataAppendCollection("Moodboard.MaterialIds", materialIds, formData);
    this.formDataAppendCollection("Moodboard.ColorPaletteIds", colorPaletteIds, formData);
    this.formDataAppendCollection("Moodboard.ProductIds", productIds, formData);

    return parsedMdb;
  };

  parseRoomDetailsFormData(project: any, formData: FormData) {
    const parsedRDFormData = {
      roomSketchFiles: project.roomDetails['roomSketchFiles'] || undefined,
    };

    Object.keys(parsedRDFormData.roomSketchFiles).length &&
    Object.keys(parsedRDFormData.roomSketchFiles).forEach((key, i) => {
      let uniqueStr = Date.now().toString(36) + Math.random().toString(36);
      formData.append(`roomSketchFile`, parsedRDFormData.roomSketchFiles[key], `imageFile${uniqueStr}.png`);
    })

    return parsedRDFormData;
  };

  getInspirations() {
    return this.http.get(this.apiUrl + 'inspirations').pipe(map((inspirations) => {
      this.inspirationsSource.next(inspirations);
    })).toPromise();
  }

  addInspiration(file: string | Blob) {
    const formData = new FormData();
    formData.append('inFile', file);
    return this.http.post(this.apiUrl + 'inspirations/add', formData);
  }

  deleteInspiration(id: string) {
    return this.http.delete(this.apiUrl + 'inspirations/delete/' + id);
  }

  formDataAppendCollection(arrayName: string, arrayValues: any[], formData: FormData) {
    for (const index in arrayValues)
    {
      // iterate for each item and append it to form.
      formData.append(`${arrayName}[${index}]`,arrayValues[index]);
    }
  }
}
