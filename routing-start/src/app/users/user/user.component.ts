import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    /* - Quando é necessário dar reload no componente a partir dele mesmo, apenas o código acima não
      capturará as mudanças nos params
      - É necessário add um observable que aguardará por mudanças para atualizar os dados do obj user
      - Caso o componente não necessite ser recarregado com novos valores, o código abaixo não é necessário */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }

}
