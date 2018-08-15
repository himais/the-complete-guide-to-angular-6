import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('onServerCreated') serverCreated = new EventEmitter<{ serverName: string, serverType: string, serverContent: string }>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverType: 'server',
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverType: 'blueprint',
      serverContent: this.newServerContent
    });
  }

}
