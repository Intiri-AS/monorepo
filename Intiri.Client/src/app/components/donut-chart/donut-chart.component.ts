import { AfterViewInit, Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})

export class DonutChartComponent implements AfterViewInit{
  @Input()
  set chartData(value) {
    this.chartOptions.series = value.series;
    this.chartOptions.labels = value.labels;
  }

  public chartOptions;

  @HostListener("window:resize", []) updateChart() {
    if (window.innerWidth >= 480) {
      this.chartOptions.legend.position = "right";
    } else if (window.innerWidth < 480) {
      this.chartOptions.legend.position = "bottom";
    }
  }

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 350,
        type: "donut",
        toolbar: {
          show: false
        },
      },
      labels: [],
      dataLabels: {
        enabled: false
      },
      legend: {
        offsetX: 5,
        fontSize: "18px",
        markers: {
          width: 20,
          height: 20,
          radius: 5,
          offsetY: 3
        }
      }
    };
  }

  ngAfterViewInit() {
    window.dispatchEvent(new Event('resize'));
  }
}
