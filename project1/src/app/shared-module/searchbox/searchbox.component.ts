import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() btnClass: string = '';
  @Output() OnClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent()
  {
    this.OnClick.emit()
  }
}
