import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output('onServerCreated') serverCreated = new EventEmitter<{ serverName: string, serverType: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentElement: ElementRef; /* @ViewChild permite capturar o elemento no template que
                                                                      contém a referências
                                                                      Também pode capturar componentes inteiros
                                                                      obs.: MELHOR NÃO USAR*/

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverType: 'server',
      serverContent: this.serverContentElement.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverType: 'blueprint',
      serverContent: this.serverContentElement.nativeElement.value
    });
  }

}
