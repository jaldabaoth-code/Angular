import { Component, EventEmitter, Output } from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
    pokemons: any = [];
    @Output()
    public pokemonSelected: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

    constructor(private pokedexService: PokedexService) {
        this.pokemons = this.pokedexService.pokemonsData;
        this.pokedexService.getPokemonsData();
    }

    selectPokemon(pokemonNames: Pokemon) {
        this.pokemonSelected.emit(pokemonNames);
    }
}
