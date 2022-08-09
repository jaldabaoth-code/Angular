import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    constructor() { }
    number: number = 0;
    operat: string = '+';

    sum: number = 0;

    ngOnInit(): void {
    }

    numbe(number: number) {

      if (this.number) {
        this.sum = this.number * 10 + number;
      } else {
          this.number = number;
      }
        switch(this.operat) {
            case '-': {
                this.sum = this.sum - this.number;
                this.operat = '';
                break;
            }
            case '+': {
                this.sum = this.sum + this.number;
              this.operat = '';
                break;
            }
            case '*': {
                this.sum = this.sum * this.number;
              this.operat = '';
                break;
            }
            case '/': {
                this.sum = this.sum / this.number;
              this.operat = '';
                break;
            }
        }
    }


    setOperator(operator: string) {
        this.operat = operator;
    }

  cancel() {
        this.sum = 0;
        this.number = 0;
        this.operat = '+';
    }
}
