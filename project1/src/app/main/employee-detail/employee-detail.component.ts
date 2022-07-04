import { Component, OnInit, ViewChild } from '@angular/core';
import { TableSettings } from 'src/app/shared-module/Models/tableSettings.modal';
import { ApexAxisChartSeries, ApexDataLabels, ApexLegend, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries |any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] |any;
  labels: any;
  colors: any[];
  dataLabels: ApexDataLabels | any;
};

export type  radialChartOptions = {   //for radial chart on All tab
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

export type lineChartOptions = {
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
}

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})



export class EmployeeDetailComponent implements OnInit {


  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;  // app selection

  @ViewChild("chart") lineChart!: ChartComponent;
  public lineChartOptions: Partial<ChartOptions> | any;    // app_activity tab

  @ViewChild("chart") raadialChart!: ChartComponent;
  public radialChart: Partial<ChartOptions> | any;  // for Radial Chart at all Tab

  @ViewChild("chart") areaChart!: ChartComponent;
  public areaChartOptions: Partial<ChartOptions> | any; // for PTSD tab chart

  @ViewChild("chart") burnoutAreaChart!: ChartComponent;
  public burnoutChartOptions: Partial<ChartOptions> | any; // for PTSD tab chart

  @ViewChild("chart") anxietyAreaChart!: ChartComponent;
  public anxietyChartOptions: Partial<ChartOptions> | any; // for burnout tab chart

  @ViewChild("chart") depressionAreaChart!: ChartComponent;
  public depressionChartOptions: Partial<ChartOptions> | any; // for depression tab chart

  @ViewChild("chart") stressAreaChart!: ChartComponent;
  public stressChartOptions: Partial<ChartOptions> | any; // for stress tab chart



  showDroupdown:boolean= false;
  app_activity: boolean = false;
  section: boolean = false;
  insights: boolean = false;
  mse: boolean = false;
  journal: boolean = false;
  homework: boolean = false;

  all:boolean = true;
  ptsd:boolean = false;
  burnout:boolean = false;
  anxiety:boolean = false;
  depression:boolean = false;
  stress:boolean = false;

  // Line Chart variable
  LineChartComponent: any;

  // login variables
  currentUserValue: any;
  userRole: any;
  date="12-05-2022, 20:30";
  heading="Lorem Ipsum"
  title:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  constructor() {

  }

  ngOnInit(): void {
    // for user-type
    const userValue = localStorage.getItem('currentUser');
    if (userValue != null) {
      this.currentUserValue = JSON.parse(userValue);
    }
    this.userRole = this.currentUserValue.role;
    console.log(this.currentUserValue.role, 'currebt');

    if (this.userRole == 'COUNSELOR') {
      this.section = true;
    } else {
      this.app_activity = true;
    }

    this.selectionCharts()

    this.activityChart()

    this.allRadialChart()

    this.ptsdChart()

    this.burnOut()

    this.anxietyTab()

    this.workStressTab()

    this.depressionTab()
  }

  changeTabs(value: string) {
    if (value == 'app_activity') {
      this.app_activity = true;
      this.section = false;
      this.insights = false;
      this.mse = false;
      this.homework = false;
      this.journal = false;
    } else if (value == 'section') {
      this.app_activity = false;
      this.section = true;
      this.insights = false;
    } else if (value == 'insights') {
      this.app_activity = false;
      this.section = false;
      this.insights = true;
      this.mse = false;
      this.homework = false;
      this.journal = false;
    } else if (value == 'homework') {
      this.app_activity = false;
      this.section = false;
      this.insights = false;
      this.mse = false;
      this.homework = true;
      this.journal = false;
    } else if (value == 'journal') {
      this.app_activity = false;
      this.section = false;
      this.insights = false;
      this.mse = false;
      this.homework = false;
      this.journal = true;
    } else if (value == 'mse') {
      this.app_activity = false;
      this.section = false;
      this.insights = false;
      this.mse = true;
      this.homework = false;
      this.journal = false;
    }
  }

  // imge array for
  image = {
    imgg: [
      {
        img: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        img: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      },
      {
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        img: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  };

  // reusable Table  =========  MSE Table ==============

  // tableBodyTdClass:'',
  settings: TableSettings = {
    tableClass: 'min-w-full',
    tableHead: 'bg-[#C0D7D6] font-semibold',
    tableHeadTrClass: 'text-left ',
    tableHeadTdClass: 'tableHead pl-10',
    tableBodyTdClass: 'tableData pl-10',
    tableBodyTrClass: '',
    tableBody: '',
    enableActions: false,
    buttons: [],
  };

  userservice: any;
  gridData: any[] = [
    {
      area: 'Appearance',
      type: 'Casual',
      description: 'Client was in well kept jeans and t-shirt',
    },
    {
      area: 'Attitude',
      type: 'Calm',
      description: 'She was calm during the session',
    },
    { area: 'Behaviour', type: 'No Unusual ', description: '-' },
    { area: 'Speech', type: 'Normal', description: '-' },
    { area: 'Behaviour', type: 'Calm', description: '-' },
  ];
  isEdit: boolean = false;

  colData = [
    { field: 'area', header: 'Area' },
    { field: 'type', header: 'Type' },
    { field: 'description', header: 'Description' },
  ];

  // reusable Table  =========  Homework-tab Table ==============

  // tableBodyTdClass:'',
  homeworkTable: TableSettings = {
    tableClass: 'min-w-full',
    tableHead: 'bg-[#C0D7D6] font-semibold',
    tableHeadTrClass: 'text-left',
    tableHeadTdClass: 'tableHead pl-10',
    tableBodyTdClass: 'tableData pl-10',
    tableBodyTrClass: '',
    tableBody: '',
    enableActions: true,
    isIconEnabled:true,
    buttons: [
      // { name: 'delete', class: 'viewButton', func: this.delete.bind(this) },
      // { name: 'edit', class: 'viewButton', func: this.edit.bind(this) },
      {iconClass:'delete-icon.svg', func: this.delete.bind(this) },
      { iconClass: 'edit-icon.svg',  class:'iconButton', func: this.edit.bind(this) },
    ],
  };

  homeworkTable_userservice: any;
  homeworkTable_gridData: any[] = [
    {
      name: 'How to deal with overthinking',
      type: 'Artical',
      date: '13/05/2022',
      status: 'Not Done',
    },
    {
      name: 'GAD - 7',
      type: 'Assessment',
      date: '13/05/2022',
      status: 'Completed',
    },
    {
      name: 'I am unable to relax',
      type: 'Mini Session',
      date: '13/05/2022',
      status: 'Not Done',
    },
    {
      name: 'GAD - 7',
      type: 'Assessment',
      date: '13/05/2022',
      status: 'Completed',
    },
    {
      name: 'I am unable to relax',
      type: 'Mini Session',
      date: '13/05/2022',
      status: 'Not Done',
    },
  ];
  homeworkTable_isEdit: boolean = true;

  homeworkTable_colData = [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'date', header: 'Due Date' },
    { field: 'status', header: 'Status', },
  ];

  edit(e: any) {
    console.log(e);
  }

  delete(e: any) {
    console.log(e);
  }

  // Charts Tabs
  subTabs(tab:string)
  {
    if(tab === 'all' )
    {
      this.all = true;
      this.ptsd = false;
      this.burnout = false;
      this.anxiety= false;
      this.depression = false;
      this.stress = false;
    }
    if(tab === 'ptsd' )
    {
      this.all = false;
      this.ptsd = true;
      this.burnout = false;
      this.anxiety= false;
      this.depression = false;
      this.stress = false;
    }
    if(tab === 'burnout' )
    {
      this.all = false;
      this.ptsd = false;
      this.burnout = true;
      this.anxiety= false;
      this.depression = false;
      this.stress = false;
    }
    if(tab === 'anxiety' )
    {
      this.all = false;
      this.ptsd = false;
      this.burnout = false;
      this.anxiety= true;
      this.depression = false;
      this.stress = false;
    }
    if(tab === 'depression' )
    {
      this.all = false;
      this.ptsd = false;
      this.burnout = false;
      this.anxiety= false;
      this.depression = true;
      this.stress = false;
    }
    if(tab === 'stress' )
    {
      this.all = false;
      this.ptsd = false;
      this.burnout = false;
      this.anxiety= false;
      this.depression = false;
      this.stress = true;
    }
  }


  selectionCharts()
  {
    this.chartOptions = {
      series: [7, 3, 8],
      chart: {
        type: "donut",
        width: "350px"
      },
      labels: ["Team", "Supervisor", "Family"],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }
      ]
    };
  }

  activityChart()  // mood history graph
  {
    this.lineChartOptions = {
      series: [
        {
          name: "Desktops",
          data: [31,52,74,11,20,16,25,64,55]
        }
      ],
      chart: {
        height: 350,
        type: "line",
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
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
  }

  allRadialChart()    // for insights all tab
  {
    this.radialChart = {
      series: [44, 55, 67, 83, 77, 90],
      chart: {
        height: 450,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "19px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function() {
                return "249";
              }
            },
          }
        }
      },
      labels: ["PTSD", "Vicarious Trauma", "Burnout", "Anxiety", "Depression", "Work Stress"],
    };
  }

  ptsdChart()  //for PTSD tab
  {
    this.areaChartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7],
          color:"#4E989F"
        }
      ],
      chart: {
        type: "area",
        height: 420,
        width: 850,
        zoom: {
          enabled: true
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
        align: ""
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017"],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  burnOut()
  {
    this.burnoutChartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [817.85, 828.0, 7122.9, 7165.5, 7340.7],
          color:"#4E989F"
        }
      ],
      chart: {
        type: "area",
        height: 420,
        width: 850,
        zoom: {
          enabled: true
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
        align: ""
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017"],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  anxietyTab()
  {
    this.anxietyChartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [817.85, 828.0, 7122.9, 7165.5, 7340.7],
          color:"#4E989F"
        }
      ],
      chart: {
        type: "area",
        height: 420,
        width: 850,
        zoom: {
          enabled: true
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
        align: ""
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017"],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  depressionTab()
  {
    this.depressionChartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [817.85, 828.0, 7122.9, 7165.5, 7340.7],
          color:"#4E989F"
        }
      ],
      chart: {
        type: "area",
        height: 420,
        width: 850,
        zoom: {
          enabled: true
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
        align: ""
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017"],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  workStressTab()
  {
    this.stressChartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: [817.85, 828.0, 7122.9, 7165.5, 7340.7],
          color:"#4E989F"
        }
      ],
      chart: {
        type: "area",
        height: 420,
        width: 850,
        zoom: {
          enabled: true
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
        align: ""
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017"],
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  showFilter(){
    this.showDroupdown = !this.showDroupdown;
  }



}

