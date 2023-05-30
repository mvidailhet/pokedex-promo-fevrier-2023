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

  pokemons = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];

  constructor() {
  }

  onAddPokemonBtnClick() {
    this.hasPokemonBeenAdded = true;

    setTimeout(() => {
      this.hasPokemonBeenAdded = false;
    }, 2000);

    this.pokemonGender = Math.random() > 0.5 ? 'male' : 'female';
    this.pokemons.push(this.newPokemonName);
  }
}
