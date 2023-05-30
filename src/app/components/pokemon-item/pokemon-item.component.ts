import { Component, Input } from "@angular/core";
import { PokemonGender } from "src/app/models/pokemon";

@Component({
  selector: 'pokedex-pokemon-item',
  templateUrl: './pokemon-item.component.html',
})
export class PokemonItemComponent {
  @Input() name?: string;
  @Input() gender?: PokemonGender;
}
