import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //referência para a tag na index.html
  templateUrl: './app.component.html', //um template SEMPRE deve ser apontado => selector e style não
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-the-complete-guide';
}
