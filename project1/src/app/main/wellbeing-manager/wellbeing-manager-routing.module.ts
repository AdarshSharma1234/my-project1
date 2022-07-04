import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsListComponent } from './alerts-list/alerts-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRiskReportComponent } from './user-risk-report/user-risk-report.component';
import { WellbeingManagerComponent } from './wellbeing-manager.component';


const routes: Routes = [
  {path:'',component:WellbeingManagerComponent,children:[
   { path:'',redirectTo:'dashboard',pathMatch:'full' },
    { path:'dashboard',component:DashboardComponent },
    { path:'alerts-list',component:AlertsListComponent },
    { path:'user-risk-report',component: UserRiskReportComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellbeingManagerRoutingModule { }
