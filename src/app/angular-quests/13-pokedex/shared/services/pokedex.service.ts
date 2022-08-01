import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { POKEMONSNAMES } from "../../../../../assets/pokedex/pokemons-mock";
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokedexService {
    private http: HttpClient;
    pokemons: Pokemon[];
    pokemonsData: any = [];
    fullUrl: string;

    constructor(paramService: HttpClient) {
        this.http = paramService;
        this.pokemons = POKEMONSNAMES;
    }

    deletePokemon(pokemon: Pokemon) {
        for (let i = 0; i < this.pokemons.length; i++) {
            // Lowercase and trim (replace white spaces)
            if (this.pokemons[i].name.toLowerCase().replace(/\s/g, "") == pokemon.name.toLowerCase().replace(/\s/g, "")) {
                this.pokemons.splice(i, 1);
            }
        }
    }

    addPokemon(pokemonName: string) {
        this.pokemons.push({ name: pokemonName.toLowerCase() });
    }

    getPokemonsData(): void {
        for (let i = 0; i < this.pokemons.length; i++) {
            this.fullUrl = 'https://pokeapi.co/api/v2/pokemon/' + this.pokemons[i].name.toLowerCase();
            this.http.get(this.fullUrl).subscribe(data =>
                this.pokemonsData[i]=data
            );
        }
    }
}
