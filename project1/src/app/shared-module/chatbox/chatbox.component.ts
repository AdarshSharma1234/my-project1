import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  isButtonClicked: boolean = false;
  isArrowClicked:boolean = false;
  hideMedia: boolean = false;

  showMedia() {
    this.isButtonClicked=!this.isButtonClicked;
    this.hideMedia = true;
    this.crossMedia = true;
  }

  crossMedia: boolean = true;
  hideMediaButton() {
    this.crossMedia = false;
    this.hideMedia = false;
    this.isButtonClicked=!this.isButtonClicked;
  }
}
