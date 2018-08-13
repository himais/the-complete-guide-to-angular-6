import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //referência para a tag / deve ser único
  templateUrl: './app.component.html', //um template SEMPRE deve ser apontado => selector e style não
  styleUrls: ['./app.component.css'], //diversos arquivos .css podem ser referenciados neste array
  styles: [`
    h1{
      color: #f06;
    }
  `]
})
export class AppComponent {
  title = 'angular6-the-complete-guide';
}
