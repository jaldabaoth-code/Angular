import { Component } from '@angular/core';
import { Case } from "./Core/Case";
import { GameService } from "./Core/Game.Service";

@Component({
    selector: 'app-tic-tac-toe-tutorial',
    templateUrl: './tic-tac-toe-tutorial.component.html',
    styleUrls: ['./tic-tac-toe-tutorial.component.css']
})
export class TicTacToeTutorialComponent {
    title = 'Tic Tac Toe';
    cases: Case[] = [];
    isGameOver = false;
    gameResult = '';
    turn: number;

    constructor(private gameService: GameService) {
        this.cases = this.gameService.cases;
        this.turn = this.gameService.turn;
    }

    restartGame() {
        this.gameService.initGame();
        this.cases = this.gameService.cases;
        this.isGameOver = false;
        this.turn = 0;
    }

    playerClick(index: number) {
        if (this.gameService.turn === 0) {
            this.play(index);
        }
    }

    gameOver() {
        this.isGameOver = true;
        this.gameResult = this.gameService.getResults();
    }

    play(i:number) {
        if (this.gameService.cases[i].value === '' && !this.isGameOver) {
            this.gameService.nbEmptyCases -= 1;
            if (this.gameService.turn === 0) {
                this.gameService.cases[i].setValue('C');
            } else {
                this.gameService.cases[i].setValue('R');
            }
            if (this.gameService.isGameWin()) {
                this.gameOver();
                return;
            } else {
                if (this.gameService.nbEmptyCases === 0) {
                    this.gameService.draw = true;
                    this.gameOver();
                    return;
                } else {
                    this.turn = this.gameService.playerChange();
                    if (this.gameService.turn === 1) {
                        this.computerTurn();
                    }
                }
            }
        } else {
            return;
        }
    }

    private computerTurn() {
        const move = this.gameService.computerMove() - 1;
        if (this.gameService.cases[move].value === '') {
            setTimeout(() => {
                this.play(move);
            }, 500);
        } else {
            this.computerTurn();
        }
    }
}
