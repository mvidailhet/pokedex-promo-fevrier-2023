import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PokemonGender } from "src/app/models/pokemon";

@Component({
  selector: 'pokedex-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() name?: string;
  @Input() gender?: PokemonGender;
  @Output() onDelete = new EventEmitter<string>();

  OnDeleteBtnClick() {
    console.log('delete');
    this.onDelete.emit(this.name);
  }
}
