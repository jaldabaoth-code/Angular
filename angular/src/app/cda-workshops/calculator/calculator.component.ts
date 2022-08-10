import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    operator: string;
    operationsSave: string = '0';
    sum: number = 0;
    operationDone = false;

    constructor() { }

    ngOnInit(): void { }

    operation(number: number) {
        // If user start with a negative number
        if (this.sum == 0 && this.operator == '-') {
            this.operationsSave = this.operationsSave + number;
            this.sum = number * -1;
            this.operator = '';
            return;
        }
        // Add new number to operations save
        this.operationsSave = this.operationsSave + number;

        if (this.sum != 0 && (this.operator == '' || !this.operator)) {
            // If user want to write a multi-digit number
            if (!this.operationDone) {
                if (this.sum > 0) {
                    // A positive multi-digit number
                  this.sum = this.sum * 10 + number;
                } else {
                    // A negative multi-digit number
                    this.sum = this.sum * 10 - number;
                }
            } else {
                // If user want to write a number but all operations are already done
                this.cancel();
                this.sum = number;
                this.operationsSave = number + '';
                this.operationDone = false;
            }
        }
        // If user want to write a single digit number
        if (this.sum == 0) {
            this.operationsSave = number + '';
            this.sum = number;
        }
        // Operations
        switch(this.operator) {
            case '-': {
                this.sum = this.sum - number;
                this.operator = '';
                this.operationDone = true;
                break;
            }
            case '+': {
                this.sum = this.sum +  number;
                this.operator = '';
                this.operationDone = true;
                break;
            }
            case '*': {
                this.sum = this.sum *  number;
                this.operator = '';
                break;
            }
            case '/': {
                this.sum = this.sum /  number;
                this.operationDone = true;
                this.operator = '';
                break;
            }
        }
    }

    setOperator(operator: string) {
        this.operationDone = false;
        // Get last operation and change operator in "operations save" if user modified it
        let lastOperation = this.operationsSave.slice(this.operationsSave.length - 1);
        if (lastOperation == '-' || lastOperation == '+' || lastOperation == '/' || lastOperation == '*' || lastOperation == 'x²') {
            this.operationsSave = this.operationsSave.slice(0, -1) + operator + '';
        } else {
            this.operationsSave = this.operationsSave + operator;
        }
        // Set operator
        this.operator = operator;
    }

    cancel() {
        // Cancel all values
        this.sum = 0;
        this.operator = '';
        this.operationsSave = '0';
        this.operationDone = false;
    }

    squared() {
        this.sum *= this.sum;
        this.operationsSave = this.operationsSave + '²';
    }
}
