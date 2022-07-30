import { Component } from '@angular/core';
import { Cocktail } from "./common/cocktail.model";
import { CocktailService } from "./service/cocktail.service";

@Component({
    selector: 'app-services1',
    templateUrl: './services1.component.html',
    styleUrls: ['./services1.component.css']
})
export class Services1Component {
    public cocktails: Cocktail[];

    constructor(cocktailService: CocktailService) {
        this.cocktails = cocktailService.getCocktails();
    }
}
