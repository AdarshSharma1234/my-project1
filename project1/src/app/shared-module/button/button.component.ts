import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

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
