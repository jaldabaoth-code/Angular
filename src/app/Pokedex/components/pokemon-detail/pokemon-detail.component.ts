import { Component, Input } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';
import { HttpClient } from  '@angular/common/http';
import { PokemonNames } from '../../shared/models/pokemon-names.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input()
  public pokemon: PokemonNames | undefined;
  private service: HttpClient;

  constructor(private pokedexService : PokedexService, param_service: HttpClient){
    this.service  =  param_service;
  }

  deletePokemon(pokemon: PokemonNames){
    this.pokedexService.deletePokemon(pokemon);
  }
}
