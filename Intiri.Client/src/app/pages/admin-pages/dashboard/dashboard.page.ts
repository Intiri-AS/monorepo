import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage {

  totalCountData = {totalMoodboards: null, totalPartners: null, totalClients: null, totalDesigners: null};

  constructor(private commonService: CommonService) {}

  ngOnInit(){
    this.commonService.getDashboardData().subscribe((res:any) => {
      this.totalCountData = res;
    })
  }
}
