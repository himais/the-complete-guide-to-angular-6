import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //selector pelo componente --> mais recomendado para a criação de componentes
  //selector: '[app-servers]', //selector pelo atributo
  //selector: '.app-servers', //selector pela classe
  //templateUrl: './servers.component.html',
  /* template: `<p> yay servers works! </p>
              <app-server></app-server>`, //não usar quando for mais de 3 linhas */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverMessage = 'No server was created!';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverMessage = 'Server was created!';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; //informa ao ts que o tipo é html input element para pegar o value do target
  }

}
