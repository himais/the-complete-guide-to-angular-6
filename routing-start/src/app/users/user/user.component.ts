import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscribe: Subscription;

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
      );
  }

  ngOnDestroy() {
    /* - O Angular não remove o subscribe ao destruir o componente - é necessário fazê-lo manualmente */
    this.paramsSubscribe.unsubscribe();
  }

}
