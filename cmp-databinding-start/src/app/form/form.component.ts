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

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverType: 'server',
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverType: 'blueprint',
      serverContent: this.newServerContent
    });
  }

}
