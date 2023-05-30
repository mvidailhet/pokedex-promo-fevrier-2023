import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  newPokemonName = 'pikachu';

  isButtonDisabled = false;

  hasPokemonBeenAdded = false;

  isPokemonMale = false;

  constructor() {
  }

  onAddPokemonBtnClick() {
    this.hasPokemonBeenAdded = true;
    this.isPokemonMale = Math.random() > 0.5;
  }
}
