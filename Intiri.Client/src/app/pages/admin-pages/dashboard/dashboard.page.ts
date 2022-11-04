import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage {

  totalCountData = {totalMoodboards: null, totalPartners: null, totalClients: null, totalDesigners: null};

  salesChartData = {
    name: "Sales",
    data: [1232, 22222, 490, 5219, 11111, 7878, 54333, 7823, 99111, 23754, 5734, 4343],
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }

  clientsChartData = {
    name: "New clients",
    data: [120, 222, 490, 521, 1111, 787, 543, 782, 991, 2375, 573, 4343],
    type: "bar",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }

  trendingChartData = {
    series: [22, 35, 65, 123],
    labels: ["Skandinavian", "Classic", "Nordic", "Norwegian"]
  }

  constructor(private commonService: CommonService) {}

  ngOnInit(){
    this.commonService.getDashboardData().subscribe((res:any) => {
      this.totalCountData = res;
    })
  }
}
