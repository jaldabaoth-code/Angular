import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { POKEMONSNAMES } from "../../../../../assets/pokemons3-mock";
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokedexService {
    private http: HttpClient;
    pokemons: Pokemon[];
    pokes: any = [];
    fullUrl: string;

    constructor(param_service: HttpClient){
        this.http = param_service;
        this.pokemons = this.getPokemon();
    }

    getData(url: string){
        return this.http.get(url);
    }

    getPokemon(){
        return POKEMONSNAMES;
    }

    deletePokemon(pokemon: Pokemon) {
        for (let i=0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].name == pokemon.name) {
                this.pokemons.splice(i, 1);
            }
        }
    }

    addPokemon(name: string) {
        this.pokemons.push({ name });
    }

    getFullUrl(pokemonName: string) {
        return `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    }

    getPokes(): void {
        for (let i = 0; i < this.getPokemon().length; i++) {
            this.fullUrl = this.getFullUrl(this.getPokemon()[i].name.toLowerCase());
            this.getData(this.fullUrl).subscribe(data =>
                this.pokes[i]=data
            );
        }
    }
}
