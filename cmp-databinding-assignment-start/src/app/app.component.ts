import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numbers: number[] = [];

  onGameStarted(counter: number) {
    this.numbers.push(counter);
  }
}
