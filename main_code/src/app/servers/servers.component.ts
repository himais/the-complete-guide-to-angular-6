import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //selector pelo componente --> mais recomendado para a criação de componentes
  //selector: '[app-servers]', //selector pelo atributo
  //selector: '.app-servers', //selector pela classe
  //templateUrl: './servers.component.html',
  template: `<p> yay servers works! </p>
              <app-server></app-server>`, //não usar quando for mais de 3 linhas
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
