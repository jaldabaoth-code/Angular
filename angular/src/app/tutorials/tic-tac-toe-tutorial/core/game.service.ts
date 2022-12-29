import { Player } from "./player";
import { Square } from "./square";

export class GameService {
    firstPlayer: Player;
    secondPlayer: Player;
    squares : Square[];
    nbEmptySquares: number;
    turn: number;
    draw = false;

    constructor() {
        this.initGame();
    }

    initGame() {
        this.nbEmptySquares = 9;
        this.turn = 0;
        this.draw = false;
        // Starting squares creation
        this.squares = [];
        for (let i = 0; i < 9; i++) {
            const newSquare = new Square();
            newSquare.setValue('');
            this.squares.push(newSquare);
        }
        // Starting player initialisation
        this.firstPlayer = new Player();
        // Second player will be an IA
        this.secondPlayer = new Player();
        this.secondPlayer.computer = true;
    }

    getResults() {
        if (this.draw) {
            return "It's a draw!";
        } else {
            if (this.turn === 0) {
                return "You win!";
            } else {
                return "You lost :-(";
            }
        }
    }

    playerChange(): number {
        if (this.turn === 0) {
            this.turn = 1;
            return 1;
        } else {
            this.turn = 0;
            return 0;
        }
    }

    // Win conditions
    isGameWin() {
        // squares
        const square1 = this.squares[0].value;
        const square2 = this.squares[1].value;
        const square3 = this.squares[2].value;
        const square4 = this.squares[3].value;
        const square5 = this.squares[4].value;
        const square6 = this.squares[5].value;
        const square7 = this.squares[6].value;
        const square8 = this.squares[7].value;
        const square9 = this.squares[8].value;
        // Conditions
        const condition1 = square1 && square2 && square3 && (square1 === square2 && square2 === square3);
        const condition2 = square4 && square5 && square6 && (square4 === square5 && square5 === square6);
        const condition3 = square7 && square8 && square9 && (square7 === square8 && square8 === square9);
        const condition4 = square1 && square4 && square7 && (square1 === square4 && square4 === square7);
        const condition5 = square2 && square5 && square8 && (square2 === square5 && square5 === square8);
        const condition6 = square3 && square6 && square9 && (square3 === square6 && square6 === square9);
        const condition7 = square1 && square5 && square9 && (square1 === square5 && square5 === square9);
        const condition8 = square3 && square5 && square7 && (square3 === square5 && square5 === square7);
        if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8) {
            return true;
        } else {
            return false;
        }
    }

    // IA moves
    computerMove(): number {
        let move: number = this.blockPlayerWin();
        if (move === 0) {
            move = this.blockPlayerWin();
        }
        if (move === 0) {
            move = Math.floor(Math.random() * 8) + 1;
        }
        return move;
    }

    private blockPlayerWin(): number {
        const square1 = this.squares[0].value;
        const square2 = this.squares[1].value;
        const square3 = this.squares[2].value;
        const square4 = this.squares[3].value;
        const square5 = this.squares[4].value;
        const square6 = this.squares[5].value;
        const square7 = this.squares[6].value;
        const square8 = this.squares[7].value;
        const square9 = this.squares[8].value;
        if (square1 && square2 && !square3 && (square1 === square2)) {
            return 3;
        }
        if (!square1 && square2 && square3 && (square2 === square3)) {
            return 1;
        }
        if (square1 && !square2 && square3 && (square1 === square3)) {
            return 2;
        }
        if (square4 && square5 && !square6 && (square4 === square5)) {
            return 6;
        }
        if (!square4 && square5 && square6 && (square5 === square6)) {
            return 4;
        }
        if (square4 && !square5 && square6 && (square4 === square6)) {
            return 5;
        }
        if (square7 && square8 && !square9 && (square7 === square8)) {
            return 9;
        }
        if (!square7 && square8 && square9 && (square8 === square9)) {
            return 7;
        }
        if (square7 && !square8 && square9 && (square7 === square9)) {
            return 8;
        }
        if (square1 && square4 && !square7 && (square1 === square4)) {
            return 7;
        }
        if (!square1 && square4 && square7 && (square4 === square7)) {
            return 1;
        }
        if (square1 && !square4 && square7 && (square1 === square7)) {
            return 4;
        }
        if (square2 && square5 && !square8 && (square2 === square5)) {
            return 8;
        }
        if (!square2 && square5 && square8 && (square5 === square8)) {
            return 2;
        }
        if (square2 && !square5 && square8 && (square2 === square8)) {
            return 5;
        }
        if (square3 && square6 && !square9 && (square3 === square6)) {
            return 9;
        }
        if (!square3 && square6 && square9 && (square6 === square9)) {
            return 3;
        }
        if (square3 && !square6 && square9 && (square3 === square9)) {
            return 6;
        }
        if (square1 && square5 && !square9 && (square1 === square5)) {
            return 9;
        }
        if (!square1 && square5 && square9 && (square5 === square9)) {
            return 1;
        }
        if (square1 && !square5 && square9 && (square1 === square9)) {
            return 5;
        }
        if (square3 && square5 && !square7 && (square3 === square5)) {
            return 7;
        }
        if (!square3 && square5 && square7 && (square5 === square7)) {
            return 3;
        }
        if (square3 && !square5 && square7 && (square3 === square7)) {
            return 5;
        }
        return 0;
    }
}
