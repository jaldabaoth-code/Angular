import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {

  operationsSave: string ='';
  sum: number = 0;

  constructor() { }

  ngOnInit(): void { }

  operation(number: string) {

      if (this.operationsSave) {
          let lastOperation = this.operationsSave.slice(this.operationsSave.length - 1);
          if (number == '-' || number == '+' || number == '/' || number == '*') {
              if (lastOperation == '-' || lastOperation == '+' || lastOperation == '/' || lastOperation == '*') {
                  this.operationsSave = this.operationsSave.slice(0, -1);
              }
          } else {
            if (lastOperation == '-' || lastOperation == '+' || lastOperation == '/' || lastOperation == '*') {
              //this.operationsSave = this.operationsSave + number;
            } else {
              if (this.sum !=0) {
              return;}
            }
          }
          this.operationsSave = this.operationsSave + number;
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
        this.sum = eval(this.operationsSave);
        this.operationsSave = this.sum + '';
    }


  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
  counter = 0;
  @HostListener('window:keydown' , ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.numbers.indexOf(event.key) !== -1) {
    //if (event.key === '1' || ) {
      this.operationsSave += event.key;
    }
    if (event.key === 'Enter') {
      this.equal();
    }

  }
/*  resetCounter() {
    this.counter = 0;
  }*/
}
