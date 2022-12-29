import { Component } from '@angular/core';
import { Square } from "./core/square";
import { GameService } from "./core/game.service";

@Component({
    selector: 'app-tic-tac-toe-tutorial',
    templateUrl: './tic-tac-toe-tutorial.component.html',
    styleUrls: ['./tic-tac-toe-tutorial.component.css']
})
export class TicTacToeTutorialComponent {
    title = 'Tic Tac Toe';
    squares: Square[] = [];
    isGameOver = false;
    gameResult = '';
    turn: number;

    constructor(private gameService: GameService) {
        this.squares = this.gameService.squares;
        this.turn = this.gameService.turn;
    }

    restartGame() {
        this.gameService.initGame();
        this.squares = this.gameService.squares;
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
        if (this.gameService.squares[i].value === '' && !this.isGameOver) {
            this.gameService.nbEmptySquares -= 1;
            if (this.gameService.turn === 0) {
                this.gameService.squares[i].setValue('C');
            } else {
                this.gameService.squares[i].setValue('R');
            }
            if (this.gameService.isGameWin()) {
                this.gameOver();
                return;
            } else {
                if (this.gameService.nbEmptySquares === 0) {
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
        if (this.gameService.squares[move].value === '') {
            setTimeout(() => {
                this.play(move);
            }, 500);
        } else {
            this.computerTurn();
        }
    }
}
