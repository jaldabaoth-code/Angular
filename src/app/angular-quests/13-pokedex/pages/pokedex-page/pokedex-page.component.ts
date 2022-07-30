import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
    selector: 'app-pokedex-page',
    templateUrl: './pokedex-page.component.html',
    styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {
    listPokemonNames: Pokemon[];
    pokemon : Pokemon | undefined;

    constructor(public pokedexService: PokedexService) {
        this.listPokemonNames = this.pokedexService.pokemons;
    }

    ngOnInit(): void {
        this.listPokemonNames = this.pokedexService.getPokemon();
    }

    retrievePokemonDetails(pokemon : Pokemon) {
        this.pokemon = pokemon;
    }
}
