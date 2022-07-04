import { ProgressNotesComponent } from './progress-notes/progress-notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import { WellbeingManagerModule } from './wellbeing-manager/wellbeing-manager.module';
import { WbmCounselorModule } from './wbm-counselor/wbm-counselor.module';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CounselorDashboardComponent } from './counselor-dashboard/counselor-dashboard.component';
import { MyClientsComponent } from './my-clients/my-clients.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { RiskAssessmentFormComponent } from './risk-assessment-form/risk-assessment-form.component';
import { AssignHomeworkComponent } from './assign-homework/assign-homework.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MseFormComponent } from './mse-form/mse-form.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    CounselorDashboardComponent,
    MyClientsComponent,
    RiskAssessmentFormComponent,
    EmployeeDetailComponent,
    MseFormComponent,
    ProgressNotesComponent,
    AssignHomeworkComponent,
    JournalDetailComponent
  ],
  imports: [
    CommonModule,
    WellbeingManagerModule,
    WbmCounselorModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SharedModuleModule,


    NgApexchartsModule
  ],
  bootstrap:[MainComponent]
})
export class MainModule { }
