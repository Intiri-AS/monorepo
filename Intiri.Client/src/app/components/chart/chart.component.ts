import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input()
  set chartData(value) {
    this.chartOptions.series[0].name = value.name;
    this.chartOptions.series[0].data = value.data;
    this.chartOptions.chart.type = value.type;
    this.chartOptions.xaxis.categories = value.categories;
  }

  public chartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [],
        },
      ],
      chart: {
        height: 350,
        type: '',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [],
      },
      colors: ['#9B7E60'],
      dataLabels: {
        enabled: false,
      },
    };
  }

  ngAfterViewInit() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 2000);
  }
}
