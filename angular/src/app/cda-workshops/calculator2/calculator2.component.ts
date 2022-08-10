import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {

  operator: string;
  operationsSave: string;
  sum: number = 0;

  constructor() { }

  ngOnInit(): void { }

  operation(number: string) {

      if (this.operationsSave) {
          let lastOperation = this.operationsSave.slice(this.operationsSave.length - 1);

          //this.operationsSave += number;
          if (number == '-' || number == '+' || number == '/' || number == '*') {
              if (lastOperation == '-' || lastOperation == '+' || lastOperation == '/' || lastOperation == '*') {
                this.operationsSave = this.operationsSave.slice(0, -1) + number + '';
              } else {
                this.operationsSave = this.operationsSave + number;
              }
          } else {
            this.operationsSave = this.operationsSave + number;
          }
      } else {
        this.operationsSave = number;
      }

  }


  cancel() {
    // Cancel all values
    this.sum = 0;
    this.operationsSave = '';
  }

  equal() {
    //this.sum = +this.operationsSave;
    this.sum = eval(this.operationsSave);
    this.cancel();
  }
}
