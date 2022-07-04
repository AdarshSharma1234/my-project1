import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounselorDetailsComponent } from './counselor-details/counselor-details.component';
import { CounselorComponent } from './counselor/counselor.component';
import { WbmCounselorComponent } from './wbm-counselor.component';

const routes: Routes = [
  {path:'',component:WbmCounselorComponent,children:[
    { path:'', redirectTo:'counselors',pathMatch:'full' },
    { path:'counselors', component:CounselorComponent },
    { path: 'counselor-details', component:CounselorDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WbmCounselorRoutingModule { }
