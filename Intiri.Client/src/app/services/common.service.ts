import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get(this.apiUrl + 'admin/totalCount');
  }

  getConsulationsInfo() {
    return this.http.get(this.apiUrl + 'consultations');
  }

  updateConsulationsInfo(data) {
    return this.http.patch(this.apiUrl + 'consultations/update', data);
  }

  getPaymentsPerMonth() {
    return this.http.get(this.apiUrl + 'admin/salesOverview');
  }

  getClientsPerMonth() {
    return this.http.get(this.apiUrl + 'admin/clientsNumber');
  }

  getTrendingStyles() {
    return this.http.get(this.apiUrl + 'admin/styleTrends');
  }

  getAllInspirations() {
    return this.http.get(this.apiUrl + 'admin/inspirations');
  }
}
