import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WbmCounselorRoutingModule } from './wbm-counselor-routing.module';
import { WbmCounselorComponent } from './wbm-counselor.component';
import { CounselorComponent } from './counselor/counselor.component';
import { CounselorDetailsComponent } from './counselor-details/counselor-details.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    WbmCounselorComponent,
    CounselorComponent,
    CounselorDetailsComponent
  ],
  imports: [
    CommonModule,
    WbmCounselorRoutingModule,
    SharedModuleModule,
    NgApexchartsModule
  ]
})
export class WbmCounselorModule { }
