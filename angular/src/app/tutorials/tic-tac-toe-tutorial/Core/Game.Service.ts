import { Player } from "./Player";
import { Case } from "./Case";

export class GameService {
    firstPlayer: Player;
    secondPlayer: Player;
    cases : Case[];
    nbEmptyCases: number;
    turn: number;
    draw = false;

    constructor() {
        this.initGame();
    }

    initGame() {
        this.nbEmptyCases = 9;
        this.turn = 0;
        this.draw = false;
        // Starting cases creation
        this.cases = [];
        for (let i = 0; i < 9; i++) {
            const newCase = new Case();
            newCase.setValue('');
            this.cases.push(newCase);
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
        // Cases
        const case1 = this.cases[0].value;
        const case2 = this.cases[1].value;
        const case3 = this.cases[2].value;
        const case4 = this.cases[3].value;
        const case5 = this.cases[4].value;
        const case6 = this.cases[5].value;
        const case7 = this.cases[6].value;
        const case8 = this.cases[7].value;
        const case9 = this.cases[8].value;
        // Conditions
        const condition1 = case1 && case2 && case3 && (case1 === case2 && case2 === case3);
        const condition2 = case4 && case5 && case6 && (case4 === case5 && case5 === case6);
        const condition3 = case7 && case8 && case9 && (case7 === case8 && case8 === case9);
        const condition4 = case1 && case4 && case7 && (case1 === case4 && case4 === case7);
        const condition5 = case2 && case5 && case8 && (case2 === case5 && case5 === case8);
        const condition6 = case3 && case6 && case9 && (case3 === case6 && case6 === case9);
        const condition7 = case1 && case5 && case9 && (case1 === case5 && case5 === case9);
        const condition8 = case3 && case5 && case7 && (case3 === case5 && case5 === case7);
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
        const case1 = this.cases[0].value;
        const case2 = this.cases[1].value;
        const case3 = this.cases[2].value;
        const case4 = this.cases[3].value;
        const case5 = this.cases[4].value;
        const case6 = this.cases[5].value;
        const case7 = this.cases[6].value;
        const case8 = this.cases[7].value;
        const case9 = this.cases[8].value;
        if (case1 && case2 && !case3 && (case1 === case2)) {
            return 3;
        }
        if (!case1 && case2 && case3 && (case2 === case3)) {
            return 1;
        }
        if (case1 && !case2 && case3 && (case1 === case3)) {
            return 2;
        }
        if (case4 && case5 && !case6 && (case4 === case5)) {
            return 6;
        }
        if (!case4 && case5 && case6 && (case5 === case6)) {
            return 4;
        }
        if (case4 && !case5 && case6 && (case4 === case6)) {
            return 5;
        }
        if (case7 && case8 && !case9 && (case7 === case8)) {
            return 9;
        }
        if (!case7 && case8 && case9 && (case8 === case9)) {
            return 7;
        }
        if (case7 && !case8 && case9 && (case7 === case9)) {
            return 8;
        }
        if (case1 && case4 && !case7 && (case1 === case4)) {
            return 7;
        }
        if (!case1 && case4 && case7 && (case4 === case7)) {
            return 1;
        }
        if (case1 && !case4 && case7 && (case1 === case7)) {
            return 4;
        }
        if (case2 && case5 && !case8 && (case2 === case5)) {
            return 8;
        }
        if (!case2 && case5 && case8 && (case5 === case8)) {
            return 2;
        }
        if (case2 && !case5 && case8 && (case2 === case8)) {
            return 5;
        }
        if (case3 && case6 && !case9 && (case3 === case6)) {
            return 9;
        }
        if (!case3 && case6 && case9 && (case6 === case9)) {
            return 3;
        }
        if (case3 && !case6 && case9 && (case3 === case9)) {
            return 6;
        }
        if (case1 && case5 && !case9 && (case1 === case5)) {
            return 9;
        }
        if (!case1 && case5 && case9 && (case5 === case9)) {
            return 1;
        }
        if (case1 && !case5 && case9 && (case1 === case9)) {
            return 5;
        }
        if (case3 && case5 && !case7 && (case3 === case5)) {
            return 7;
        }
        if (!case3 && case5 && case7 && (case5 === case7)) {
            return 3;
        }
        if (case3 && !case5 && case7 && (case3 === case7)) {
            return 5;
        }
        return 0;
    }
}
