import { Component, OnInit } from  '@angular/core';
import { CocktailService } from "./shared/services/cocktail.service";
import { Cocktail } from "./shared/models/cocktail.model";

@Component({
    selector: 'app-services2',
    templateUrl: './services2.component.html',
    styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {
    public cocktails: Cocktail[] = [];
    private cocktailService: CocktailService;
    public title: string = '';

    constructor(cocktailService: CocktailService) {
        this.cocktailService = cocktailService;
    }

    public ngOnInit():void {
        this.cocktailService.getCocktails().subscribe((cocktailsData) => {
            this.cocktails = cocktailsData;
        });
    }
}
