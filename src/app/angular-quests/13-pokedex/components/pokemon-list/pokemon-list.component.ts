import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';
import { PokemonNames } from '../../shared/models/pokemon-names.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokedexService]
})
export class PokemonListComponent implements OnInit {
  pokes: any = [];

  getPokes():void {
    this.pokedexService.getPokes();
  }

  @Input()
  public pokemons: PokemonNames[] | undefined;

  @Output()
  public pokemonClick: EventEmitter<PokemonNames> = new EventEmitter<PokemonNames>();

  constructor(private pokedexService : PokedexService){
    this.pokes  = this.pokedexService.pokes;
  }

  ngOnInit(): void {
    this.getPokes();
  }

  sendPokemon(pokemonNames: PokemonNames){
    this.pokemonClick.emit(pokemonNames);
  }
}
