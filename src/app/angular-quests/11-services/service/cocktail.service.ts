import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";
import { Cocktail } from "../common/cocktail.model";

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    private service: HttpClient;

    constructor(paramService: HttpClient) {
        this.service = paramService;
    }

    public getCocktails(): Observable<Cocktail[]> {
        const observableCocktails: Observable<any> = this.service.get("assets/cocktails.json");
        const treatment = (paramData: any) => {
            return paramData.data as Cocktail[];
        };
        return observableCocktails.pipe(map(treatment));
    }
}
