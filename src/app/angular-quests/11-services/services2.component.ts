import { Component, OnInit } from  '@angular/core';
import { CocktailService } from "./service/cocktail.service";
import { Cocktail } from "./common/cocktail.model";

@Component({
    selector: 'app-services2',
    templateUrl: './services2.component.html',
    styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {
    title: string = '';
    cocktails: Cocktail[];
    private cocktailService: CocktailService;

    constructor(cocktailService: CocktailService) {
        this.cocktailService = cocktailService;
    }

    public ngOnInit():void {
        this.cocktailService.getCocktails().subscribe((cocktailsData) => {
            this.cocktails = cocktailsData;
        });
    }
}
