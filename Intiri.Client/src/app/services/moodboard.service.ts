import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Moodboard } from '../models/moodboard.model';

@Injectable({
  providedIn: 'root'
})

export class MoodboardService {

  apiUrl = environment.apiUrl;
  private mbSource = new ReplaySubject<any>(1);
  moodboards$ = this.mbSource.asObservable();

  constructor(private http: HttpClient) { }

  getMoodboards(){
    return this.http.get<Moodboard[]>(this.apiUrl + 'moodboards').pipe(map((mbs) => {
      if(mbs) {
        this.mbSource.next(mbs);
      }
    })).toPromise();
  }

  getMoodboard(id: number){
    return this.http.get<Moodboard>(this.apiUrl + 'moodboards/id/' + id);
  }

  getMoodboardOffers(){
    return this.http.get<Moodboard[]>(this.apiUrl + 'moodboards/client/moodboardOffers');
  }

  updateMoodboard(moodboard: Moodboard){
    return this.http.post<Moodboard>(this.apiUrl + 'moodboards/addMoodboard', moodboard);
  }

  addMoodboard(moodboard){
    const req_data = this.parseMoodboard(moodboard);
    return this.http.post(this.apiUrl + 'moodboards/add', req_data);
  }

  addMoodboardOffer(moodboard, consultationPaymentId){
    const req_data = { moodboardOffer: this.parseMoodboard(moodboard), consultationPaymentId };
    return this.http.post(this.apiUrl + 'moodboards/addMoodboardOffer', req_data);
  }

  editMoodboard(moodboard: Moodboard) {
    const editMb = {
      moodboardId: moodboard.id,
      materialIds:  moodboard.materials.map(e=> e['id']),
      colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
      productIds: moodboard.products.map(e=> e['id']) ,
      slotInfo: JSON.stringify(moodboard.slotInfo)
    };
    return this.http.put(this.apiUrl + 'moodboards/edit', editMb);
  }

  deleteMoodboard(moodboardId: number) {
    return this.http.delete(this.apiUrl + 'moodboards/delete/' + moodboardId);
  }

  setIsTemplate(req) {
    return this.http.patch(this.apiUrl + 'moodboards/templateSet', req);
  }

  parseMoodboard(moodboard: Moodboard) {
    let parsedProj = {
      styleId: moodboard.style['id'],
      roomId: moodboard.room['id'],
      slotInfo: JSON.stringify(moodboard.slotInfo),
      materialIds: moodboard.materials.map(e=> e['id']),
      colorPaletteIds: moodboard.colorPalettes.map(e=> e['id']),
      productIds: moodboard.products.map(e=> e['id']),
      styleImageIds: moodboard.styleImages.map(e => e['id']),
    }
    return parsedProj;
  };

  resolve(route: ActivatedRouteSnapshot): Observable<Moodboard> {
    return this.getMoodboard(parseInt(route.paramMap.get('id')));
  }


}
