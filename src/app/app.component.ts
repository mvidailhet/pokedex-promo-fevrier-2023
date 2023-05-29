import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  constructor() {
    setTimeout(() => {
      this.title = 'Pokedex de fou furieux';
    }, 5000);
  }
}
