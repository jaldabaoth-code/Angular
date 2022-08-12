import { Component } from '@angular/core';

@Component({
    selector: 'app-calculator-tutorial',
    templateUrl: './calculator-tutorial.component.html',
    styleUrls: ['./calculator-tutorial.component.css']
})
export class CalculatorTutorialComponent {
    input: string = '';
    result: string = '';
    operators = ['+', '-', '*', '/'];

    pressNum(number: string) {
        // Do Not Allow . more than once
        if (number == ".") {
            if (this.input != "") {
                const lastNumber = this.getLastOperand();
                if (lastNumber.lastIndexOf(".") >= 0) {
                    return;
                }
            }
        }
        // Do Not Allow 0 at beginning.
        // Javascript will throw Octal literals are not allowed in strict mode.
        if (number == "0") {
            if (this.input == "" ) {
                return;
            }
            const PrevKey = this.input[this.input.length - 1];
            if (this.operators.indexOf(PrevKey) !== -1) {
                return;
            }
        }
        this.input = this.input + number;
        this.calculateAnswer();
    }

    getLastOperand() {
        let position: number;
        position = this.input.toString().lastIndexOf("+");
        if (this.input.toString().lastIndexOf("-") > position) {
            position = this.input.lastIndexOf("-");
        }
        if (this.input.toString().lastIndexOf("*") > position) {
            position = this.input.lastIndexOf("*");
        }
        if (this.input.toString().lastIndexOf("/") > position) {
            position = this.input.lastIndexOf("/");
        }
        return this.input.substr(position + 1);
    }

    pressOperator(operator: string) {
        // Do not allow operators more than once
        const lastKey = this.input[this.input.length - 1];
        if (this.operators.indexOf(lastKey) !== -1)  {
            return;
        }
        this.input = this.input + operator;
        this.calculateAnswer();
    }

    clear() {
        if (this.input !="" ) {
            this.input = this.input.substr(0, this.input.length-1);
        }
    }

    allClear() {
        this.result = '';
        this.input = '';
    }

    calculateAnswer() {
        let formula = this.input;
        let lastKey = formula[formula.length - 1];
        if (lastKey === '.') {
            formula=formula.substr(0,formula.length - 1);
        }
        lastKey = formula[formula.length - 1];
        if (this.operators.indexOf(lastKey) !== -1 || lastKey === '.') {
            formula = formula.substr(0,formula.length - 1);
        }
        this.result = eval(formula);
    }

    getAnswer() {
        this.calculateAnswer();
        this.input = this.result;
        if (this.input == "0") {
            this.input = "";
        }
    }
}
