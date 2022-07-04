import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexChart
} from "ng-apexcharts";
import { ChartOptions } from '../../employee-detail/employee-detail.component';

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

export type  RadialChartOptions = {   
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  legend: ApexLegend | any;
  colors: string[];
  // plotOptions: ApexPlotOptions;
  // colors: ApexColors;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild("chart") raadialChart!: ChartComponent;
  public radialChart: Partial<ChartOptions> | any;   // radial Chart for moods

  @ViewChild("chart") lineChart!: ChartComponent;
  public lineChartOptions: Partial<ChartOptions> | any;  // line chart for therapy session

  @ViewChild("chart") barchart!: ChartComponent;
  public barChartOptions: Partial<ChartOptions> | any;  //Bar chart for Mood Check In


  constructor() { 
    this.topMoodsCharts()
    this.therapySessionChart()
    this.moodCheckChart()
  }

  ngOnInit(): void {
  }

  topMoodsCharts() {
    this.radialChart = {
      series: [44, 55, 67,],
      chart: {
        height: 350,
        width: 300,
        type: "radialBar",
      },
      colors: ["#F17171", "#FFB067", "#4E989F"],
      labels: ["Team", "Supervisor", "Content"],
      legend: {
        show: true,
        position: "bottom",
        // horizontalAlign: "center"
      },
    };
  }

  mainData = {
  CardData: [
    { title: 'Red Alerts',
      percent: '04% Inc',
      value: 10,
      img: '/assets/img/arrow-up.svg',
      color: '#69bd6d',
      color1: '#F17171',
      color2: '#F5F5F5'
    },
    // { title: 'Orange Alerts',
    //   percent: '14% Inc',
    //   value: 20,
    //   img: '/assets/img/orange.svg',
    //   color: '#ffb067',
    //   color1: '#FFB067',
    //   color2: '#F5F5F5'
    // },
    { title: 'Red Alerts',
      percent: '14% Inc',
      value: 20,
      img: '/assets/img/redalert.svg',
      color: '#f17171',
      color1: '#EDEF79',
      color2: '#F5F5F5'
    },
    { title: 'Green Alerts',
      percent: '14% Inc',
      value: 37,
      img: '/assets/img/redalert.svg',
      color: '#f17171',
      color1: '#69BD6D',
      color2: '#F5F5F5'
    },
]}

  therapySessionChart()
  {
    this.lineChartOptions = {
      series: [
        {
          name: "Therapy Session",
          data: [10, 200, 300, 500, 700, 500, 600],
          color: "#4E989F"
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "",
        align: "left"
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      xaxis: {
        type: "category"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  moodCheckChart()
  {
    this.barChartOptions = {
      series: [
        {
          name: "Negative",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          color: "#EE7452"
        },
        {
          name: "Positive",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          color: "#4E989F"
        },
        // {
        //   name: "Free Cash Flow",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        // }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          // formatter: function() {
          //   return "$ " + val + " thousands";
          // }
        }
      }
    };
  }

}
