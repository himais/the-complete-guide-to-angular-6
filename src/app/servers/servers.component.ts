import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
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
