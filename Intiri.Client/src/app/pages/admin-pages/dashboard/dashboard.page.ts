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
    data: [],
    type: "line",
    categories: []
  }

  clientsChartData = {
    name: "New clients",
    data: [],
    type: "bar",
    categories: []
  }

  trendingChartData = {
    series: [],
    labels: []
  }

  private monthToString = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

  constructor(private commonService: CommonService) {}

  ngOnInit(){
    this.commonService.getDashboardData().subscribe((res:any) => {
      this.totalCountData = res;
    });
    this.commonService.getPaymentsPerMonth().subscribe((res:any) => {
      if (res) {
        const payments = res;
        payments.forEach(payment => {
          this.salesChartData.data.push(payment.monthPayment);
          this.salesChartData.categories.push(this.monthToString[payment.month]);
        })
      }
    });
    this.commonService.getClientsPerMonth().subscribe((res:any) => {
      if (res) {
        const clients = res;
        clients.forEach(client => {
          this.clientsChartData.data.push(client.clientCount);
          this.clientsChartData.categories.push(this.monthToString[client.month]);
        })
      }
    });
    this.commonService.getTrendingStyles().subscribe((res:any) => {
      if (res) {
        const styles = res;
        styles.forEach(style => {
          this.trendingChartData.series.push(style.styleTrend);
          this.trendingChartData.labels.push(style.styleName);
        })
      }
    });
  }
}
