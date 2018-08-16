import { Component, OnInit, Input, ViewEncapsulation, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
 /* encapsulation: ViewEncapsulation.Native define as opções para encapsulamento da view
                                            emulated: padrão / com encapsulamento
                                            none: remove qualquer encapsulamento
                                            native: mesmo comportamento do emulated, mas apenas em
                                            navegadores que suportam o >> shadow dom << */
})
export class ServerComponent implements OnInit, AfterContentInit {
  @ContentChild('paragraph') paragraph: ElementRef; //Pega valor do ng-content
  @Input('serverElement') element: {type: string, name: string, content: string}; // por padrão as propriedades são
                                                                  // acessíveis apenas pelo seu próprio componente
                                                                  // @Input não limita a visibilidade
                                                                  // entre parenteses coloca-se um alias para ser acessível 
                                                                  // por outros componentes

  constructor() { }

  ngOnInit() {
    console.log('on init / paragraph not ready: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
      console.log('AfterContentInit / paragraph ready: ' + this.paragraph.nativeElement.textContent);
  }

}
