import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecretMessage: Boolean = false;
  buttonClick: number = 0;
  clicksLog: number[] = [];

  onClickToDisplayMsg() {
    this.showSecretMessage = !this.showSecretMessage;
    this.buttonClick++;
    this.clicksLog.push(Date.now());
  }
}
