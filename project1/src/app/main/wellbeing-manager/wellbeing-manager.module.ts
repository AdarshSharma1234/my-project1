import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellbeingManagerRoutingModule } from './wellbeing-manager-routing.module';
import { WellbeingManagerComponent } from './wellbeing-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsListComponent } from './alerts-list/alerts-list.component';
import { UserRiskReportComponent } from './user-risk-report/user-risk-report.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { NgApexchartsModule } from 'ng-apexcharts';




@NgModule({
  declarations: [
    WellbeingManagerComponent,
    DashboardComponent,
    AlertsListComponent,
    UserRiskReportComponent
  ],
  imports: [
    CommonModule,
    WellbeingManagerRoutingModule,
    SharedModuleModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({
      "backgroundOpacity": 1,
      "backgroundPadding": -13,
      "radius": 75,
      "space": -5,
      "toFixed": 0,
      "maxPercent": 100,
      "unitsFontSize":'26',
      "titleFontSize": '29',
      "titleFontWeight": '400',
      "subtitleFontSize": '8',
      "imageHeight": 129,
      "imageWidth": 225,
      "animationDuration": 2400,
      "showSubtitle": false,
      "showUnits": false,
      "showBackground": false})
  ]
})
export class WellbeingManagerModule { }
