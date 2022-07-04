import { Component, OnInit, Input, Output  } from '@angular/core';
import { ButtonSettings, TableSettings } from '../Models/tableSettings.modal';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

  @Input() gridData: any;
  @Input() colData: any; 
  @Input() settings: TableSettings = new TableSettings(); 

  

  constructor() { }

  ngOnInit(): void {
  }

  action(tab:any,btn:ButtonSettings){
    btn.func(tab);
  }

  

}
