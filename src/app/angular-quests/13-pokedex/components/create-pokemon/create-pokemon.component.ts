import { Component } from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-create-pokemon',
    templateUrl: './create-pokemon.component.html',
    styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
    pokemonName: string = "";
    haveAlready: boolean = false;

    constructor(private pokedexService: PokedexService, private router: Router) { }

    createPokemon(){
        for (let pokemon of this.pokedexService.pokemons) {
            if (this.pokemonName.toLowerCase() == pokemon.name.toLowerCase()) {
                this.haveAlready = true;
                break;
            }
        }
        if (this.haveAlready == false) {
            this.pokedexService.addPokemon(this.pokemonName);
            this.haveAlready = true;
            this.router.navigate(['/pokedex']);
        }
    }
}
