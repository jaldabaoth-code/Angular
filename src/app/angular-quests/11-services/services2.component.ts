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
    private service: CocktailService;

    constructor(public param_service:CocktailService){
        this.service = param_service;
    }

    public ngOnInit():void {
        this.service.getCocktails().subscribe((cocktailsData) => {
            this.cocktails = cocktailsData;
        });
    }
}


