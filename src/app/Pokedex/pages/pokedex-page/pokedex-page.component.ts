import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';
import { PokemonNames } from '../../shared/models/pokemon-names.model';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
  listPokemonNames: PokemonNames[];
  pokemon : PokemonNames|undefined;

  constructor(public pokedexService: PokedexService) {
    this.listPokemonNames = this.pokedexService.pokemons;
   }

  ngOnInit(): void {
    this.listPokemonNames = this.pokedexService.getPokemon();
  }

  retrievePokemonDetails(pokemon : PokemonNames){
    this.pokemon = pokemon;
  }
}
