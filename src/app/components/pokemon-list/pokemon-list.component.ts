import { Component } from '@angular/core';

type PokemonGender = 'male' | 'female';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  newPokemonName = 'pikachu';

  isButtonDisabled = false;

  hasPokemonBeenAdded = false;

  pokemonGender?: PokemonGender;

  constructor() {
  }

  onAddPokemonBtnClick() {
    this.hasPokemonBeenAdded = true;
    this.pokemonGender = Math.random() > 0.5 ? 'male' : 'female';
  }
}
