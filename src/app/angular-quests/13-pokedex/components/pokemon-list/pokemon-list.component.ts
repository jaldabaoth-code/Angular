import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokedexService } from '../../shared/service/pokedex.service';
import { Pokemon } from '../../shared/models/pokemon.model';

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
    public pokemons: Pokemon[] | undefined;

    @Output()
    public pokemonClick: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

    constructor(private pokedexService : PokedexService) {
        this.pokes = this.pokedexService.pokes;
    }

    ngOnInit(): void {
        this.getPokes();
    }

    sendPokemon(pokemonNames: Pokemon) {
        this.pokemonClick.emit(pokemonNames);
    }
}
