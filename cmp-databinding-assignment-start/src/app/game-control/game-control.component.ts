import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('onGameStarted') gameStarted = new EventEmitter<number>();
  counter: Number = 0;
  interval;

  onStopGame() {
    clearInterval(this.interval);
  }

  sendEvent() {
    this.interval = setInterval(() => {
      console.log(this.counter);
      this.gameStarted.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  onStartGame() {
    this.sendEvent();
  }

  constructor() { }

  ngOnInit() {
  }

}
