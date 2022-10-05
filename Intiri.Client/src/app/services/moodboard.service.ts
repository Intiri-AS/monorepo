import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moodboard } from '../models/moodboard.model';

@Injectable({
  providedIn: 'root'
})

export class MoodboardService {

  apiUrl = environment.apiUrl;
  private currentMoodboardSource = new ReplaySubject<Moodboard>(1);
  currentMoodboard$ = this.currentMoodboardSource.asObservable();

  constructor(private http: HttpClient) { }

  setCurrentMoodboard(moodboard: Moodboard) {
    if(!moodboard) {
      moodboard = new Moodboard();
    }
    sessionStorage.setItem('moodboard', JSON.stringify(moodboard));
    this.currentMoodboardSource.next(moodboard);
  }

  getMoodboards(){
    return this.http.get(this.apiUrl + 'moodboards');
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

}