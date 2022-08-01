import { Component, Input } from '@angular/core';
import { PokedexService } from '../../shared/services/pokedex.service';
import { Pokemon } from '../../shared/models/pokemon.model';
import { Router } from "@angular/router";

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
    @Input()
    public selectedPokemon: Pokemon | undefined;
    pokemons: any = [] ;

    constructor(private pokedexService : PokedexService, private router: Router) {
        this.pokemons = this.pokedexService.pokemonsData;
        // For refresh same component need add --> {onSameUrlNavigation: 'reload'} in app-routing.modules.ts <--
        // Then this will work --> this.router.navigate(['/actualRoot']); <--
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.pokedexService.getPokemonsData();
    }

    deletePokemon(pokemon: Pokemon) {
        this.pokedexService.deletePokemon(pokemon);
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].name == pokemon.name) {
                this.pokemons.splice(i, 1);
            }
        }
        this.router.navigate(['/pokedex']);
    }
}
