import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string}; // por padrão as propriedades são
                                                                  // acessíveis apenas pelo seu próprio componente
                                                                  // @Input não limita a visibilidade

  constructor() { }

  ngOnInit() {
  }

}
