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

    constructor(param_service:  HttpClient) {
        this.service = param_service;
    }

    public getCocktails(): Observable<Cocktail[]> {
        const obs1:Observable<any> = this.service.get("assets/cocktails.json");
        const treatment = (param_data:any) => {
            return param_data.data as Cocktail[];
        };
        return obs1.pipe(map(treatment));
    }
}
