import { Component } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
  namePokemon :string;

  constructor(private pokedexService : PokedexService){
    this.namePokemon = "";
  }

  createPokemon(){
    this.pokedexService.addPokemon(this.namePokemon);
  }
}
