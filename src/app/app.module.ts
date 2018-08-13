import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; //Referencia o local que o novo componente estpa

@NgModule({ //define quais funcionalidades o app deve conter e usar
  declarations: [
    AppComponent,
    ServerComponent //sem a declaração, é como se o método não existisse / como uma assinatura
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //serves as root component / avisa qual componente é o principal no start da aplicação
})
export class AppModule { }
