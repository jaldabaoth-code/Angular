import { Component } from '@angular/core';
import { Pokemon } from './shared/models/pokemon.model';

@Component({
    selector: 'app-pokedex-page',
    templateUrl: './pokedex-page.component.html',
    styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
    pokemon : Pokemon | undefined;

    constructor() { }

    retrievePokemonDetails(pokemon : Pokemon) {
        this.pokemon = pokemon;
    }
}
