import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    wildGamesURL = 'https://apis.wilders.dev/wild-games/games';
    service: HttpClient;

    constructor(paramService: HttpClient){
        this.service = paramService;
    }

    getData() {
        return this.service.get(this.wildGamesURL);
    }
}
