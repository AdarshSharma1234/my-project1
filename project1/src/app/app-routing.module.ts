import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ChatboxComponent } from './shared-module/chatbox/chatbox.component';


const routes: Routes = [


  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',component:LoginComponent},
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {path:'chatbox',component:ChatboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
