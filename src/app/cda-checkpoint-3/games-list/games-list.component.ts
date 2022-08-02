import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from "../services/game.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-games-list',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
    @Output()
    public gameForBackground: any = new EventEmitter;
    gamesData: any;
    selectedGame: any;

    constructor(private gameService: GameService, private router: Router){
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit() {
        this.gameService.getData().subscribe(data =>
            this.gamesData = data
        );
    }

    selectGame(game: any) {
        this.selectedGame = game;
    }

    changeBackground() {
        this.gameForBackground = this.selectedGame;
    }

    refreshComponent() {
        this.router.navigate(['/games-list']);
    }

    scroll(element: HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
