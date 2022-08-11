import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator2',
    templateUrl: './calculator2.component.html',
    styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
    operationsSave: string;
    sum: number;
    errorMessage: string;
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    operators = ['+', '-', '*', '/'];

    constructor() { }

    ngOnInit(): void {
        this.clear();
    }

    operations(character: string) {
        // If operations is in progress, else operations begins (so operationsSave = 0)
        if (this.operationsSave !== '0') {
            let lastOperation = this.operationsSave.slice(this.operationsSave.length - 1);
            // If the character is an operator or else the character is a number
            if (this.operators.indexOf(character) !== -1) {
                // If the last operation is an operator then delete the last operation
                if (this.operators.indexOf(lastOperation) !== -1) {
                    this.operationsSave = this.operationsSave.slice(0, -1);
                }
            }
            // Allow only 30 characters in operations
            if (this.operationsSave.length < 30) {
                // Don't allow the user to write numbers on operations right after the user clicks on equality
                if ((this.sum !== 0) && (this.sum === +this.operationsSave) && (this.numbers.indexOf(character) !== -1)) {
                    return;
                }
                // Add character to operations
                this.operationsSave = this.operationsSave + character;
            } else {
                this.errorMessage = "Only 30 characters are allowed";
                return;
            }
        } else {
            // Add the character to operations as first operation
            this.operationsSave = character;
        }
    }

    /* Clear all values */
    clear() {
        this.sum = 0;
        this.operationsSave = '0';
        this.errorMessage = '';
    }

    calculate() {
        // If user don't set last number and ends with an operator
        let lastOperation = this.operationsSave.slice(this.operationsSave.length - 1);
        if (lastOperation == '+' || lastOperation == '-') {
            this.operationsSave += '0';
        } else if (lastOperation === '*' || lastOperation === '/') {
            this.operationsSave += '1';
        }
        // If user don't set first number and start with an operator
        let firstOperation = this.operationsSave.substring(0, 1)
        if (this.operators.indexOf(firstOperation) !== -1) {
            this.operationsSave = '0' + this.operationsSave;
        }
        this.sum = eval(this.operationsSave);
        this.operationsSave = this.sum + '';
    }

    /* Use keyboard keys */
    @HostListener('window:keydown' , ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        /* If the keyboard key is an operator or a number */
        if ((this.numbers.indexOf(event.key) !== -1) || (this.operators.indexOf(event.key) !== -1)) {
            this.operations(event.key);
        }
        /* If the keyboard key Enter */
        if (event.key === 'Enter') {
            this.calculate();
        }
    }
}
