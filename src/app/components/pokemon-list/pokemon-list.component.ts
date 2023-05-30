import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  newPokemonName = '';

  isButtonDisabled = false;

  hasPokemonBeenAdded = false;

  pokemons: Pokemon[] = [];

  constructor() {
  }

  onAddPokemonBtnClick() {
    if (this.pokemons.find((pokemon) => pokemon.name === this.newPokemonName)) return;

    this.hasPokemonBeenAdded = true;

    setTimeout(() => {
      this.hasPokemonBeenAdded = false;
    }, 2000);

    this.pokemons.push({
      name: this.newPokemonName,
      gender: Math.random() > 0.5 ? 'male' : 'female'
    });

    this.newPokemonName = '';
  }

  OnDeletePokemon(name: string) {
    this.pokemons = this.pokemons.filter((pokemon) => {
      return pokemon.name !== name;
    });
  }
}
