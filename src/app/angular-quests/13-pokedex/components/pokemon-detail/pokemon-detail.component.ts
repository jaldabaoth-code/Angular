import { Component, Input } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';
import { HttpClient } from  '@angular/common/http';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
    @Input()
    public pokemon: Pokemon | undefined;
    private service: HttpClient;

    constructor(private pokedexService : PokedexService, paramService: HttpClient){
        this.service = paramService;
    }

    deletePokemon(pokemon: Pokemon){
        this.pokedexService.deletePokemon(pokemon);
    }
}
