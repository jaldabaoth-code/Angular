import { Injectable } from '@angular/core';
import { Cocktail } from "../common/cocktail.model";

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    public cocktails: Cocktail[] = [
        new Cocktail('Monaco', 15, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monaco_bi%C3%A8re.jpeg/270px-Monaco_bi%C3%A8re.jpeg'),
        new Cocktail('Alexander', 13, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Alexander_Cocktail.png/355px-Alexander_Cocktail.png'),
    ];

    constructor() { }

    public  getCocktails(): Cocktail[] {
        return this.cocktails;
    }
}
