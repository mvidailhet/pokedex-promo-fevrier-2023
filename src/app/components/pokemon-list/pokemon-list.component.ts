import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  newPokemonName = 'pikachu';

  isButtonDisabled = true;

  constructor() {
  }

  onChangeDisabledButtonClick() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  onInputChange($event: Event) {
    const inputElt = $event.target! as HTMLInputElement;
    console.log(inputElt.value);
  }
}
