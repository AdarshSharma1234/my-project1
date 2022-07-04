import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { TableSettings } from './Models/tableSettings.modal';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { SearchboxComponent } from './searchbox/searchbox.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent,
    ChatboxComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ButtonComponent,TableComponent,SearchboxComponent],
  providers:[TableSettings]
})
export class SharedModuleModule { }
