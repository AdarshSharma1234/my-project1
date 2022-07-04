import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';
// import { ChartOptions } from '../../employee-detail/employee-detail.component';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
};

export type lineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-counselor-details',
  templateUrl: './counselor-details.component.html',
  styleUrls: ['./counselor-details.component.scss'],
})
export class CounselorDetailsComponent implements OnInit {
  session: boolean = true;
  client_List: boolean = false;
  alerts: boolean = false;
  verification_req: boolean = false;

  LineChartComponent: any;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  @ViewChild('chart') linechart!: ChartComponent;
  public lineChartOptions: Partial<ChartOptions> | any;

  constructor() {}

  ngOnInit(): void {
    this.sessionTabChart();
    this.alertTabChart();
  }

  changeTabs(value: string) {
    if (value == 'session') {
      this.session = true;
      this.client_List = false;
      this.alerts = false;
      this.verification_req = false;
    } else if (value == 'client_List') {
      this.session = false;
      this.client_List = true;
      this.alerts = false;
      this.verification_req = false;
    } else if (value == 'alerts') {
      this.session = false;
      this.client_List = false;
      this.alerts = true;
      this.verification_req = false;
    } else if (value == 'verification_req') {
      this.session = false;
      this.client_List = false;
      this.alerts = false;
      this.verification_req = true;
    }
  }

  searchShow() {
    console.log('search is working');
  }

  sessionTabChart() {
    this.chartOptions = {
      series: [30, 8, 5, 10],
      chart: {
        type: 'donut',
        // size: '15px',
      },
      dataLabels: {
        enabled: false,
        // style: {
        //   colors: ['#000', '#000', '#000', '#000' ]
        // }
      },
      legend: {
        show: false,
        // position: "bottom",
        // horizontalAlign: "center"
      },
      labels: [
        'Session done',
        'Rescheduled Sessions',
        'Cancelled Sessions',
        'Alerts generated',
      ],
      // color: ['yellow', 'silver', 'black', 'yellow'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }

  alertTabChart() {
    this.lineChartOptions = {
      series: [
        {
          name: 'Red',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
          color: '#F17171',
        },
        {
          name: 'Orange',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 20,
            }
          ),
          color: '#FFB067',
        },
        {
          name: 'yellow',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 10,
              max: 15,
            }
          ),
          color: '#EDEF79',
        },
        {
          name: 'green',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017 GMT').getTime(),
            20,
            {
              min: 7,
              max: 10,
            }
          ),
          color: '#69BD6D',
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function (chart: any, e: any) {
            console.log(new Date(e.xaxis.min));
          },
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.0,
          opacityTo: 0.0,
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },
      xaxis: {
        type: 'datetime',
      },
    };
  }

  public generateDayWiseTimeSeries = function (
    baseval: number,
    count: number,
    yrange: { min: any; max: any }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };
}
