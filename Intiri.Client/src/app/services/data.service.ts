import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//TODO Example service for API calls

export class DataService {

  constructor(
    private http: HttpClient
  ) {}
}
