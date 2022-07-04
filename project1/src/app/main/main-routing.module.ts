import { JournalDetailComponent } from './journal-detail/journal-detail.component';
import { ProgressNotesComponent } from './progress-notes/progress-notes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignHomeworkComponent } from './assign-homework/assign-homework.component';
import { CounselorDashboardComponent } from './counselor-dashboard/counselor-dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MainComponent } from './main.component';
import { MseFormComponent } from './mse-form/mse-form.component';
import { MyClientsComponent } from './my-clients/my-clients.component';
import { RiskAssessmentFormComponent } from './risk-assessment-form/risk-assessment-form.component';

const routes: Routes = [
  { path:'', component:MainComponent,children:[

    {path:'main',redirectTo:'wellbeing-manager',pathMatch:'full'},

    {
      path: 'wellbeing-manager',
      loadChildren: () => import('./wellbeing-manager/wellbeing-manager.module').then(m => m.WellbeingManagerModule)
    },

    {
      path: 'wbm-counselor',
      loadChildren: () => import('./wbm-counselor/wbm-counselor.module').then(m => m.WbmCounselorModule)
    },

    {path:'counselor-dashboard', component:CounselorDashboardComponent},
    {path:'my-clients', component:MyClientsComponent},
    {path:'risk-assessment-form', component:RiskAssessmentFormComponent},
    { path : 'assign-homework', component : AssignHomeworkComponent },
    { path : 'mse-form', component : MseFormComponent },
    {path:'progress-notes',component : ProgressNotesComponent},
    { path:'employee-detail',component:EmployeeDetailComponent },
    {path:'journal-detail',component:JournalDetailComponent}



  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
