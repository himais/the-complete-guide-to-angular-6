import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input('serverElement') element: {type: string, name: string, content: string}; // por padrão as propriedades são
                                                                  // acessíveis apenas pelo seu próprio componente
                                                                  // @Input não limita a visibilidade
                                                                  // entre parenteses coloca-se um alias para ser acessível 
                                                                  // por outros componentes

  constructor() { }

  ngOnInit() {
  }

}
