import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  baseUrl = environment.apiUrl;
  private currentProjectSource = new ReplaySubject<Project>(1);
  currentProject$ = this.currentProjectSource.asObservable();

  constructor(private http: HttpClient) { }

  setCurrentProject(project: Project | null) {
    this.currentProjectSource.next(project);
  }

  getStyleImages(){
    return this.http.get(this.baseUrl + 'colors');
  }
}