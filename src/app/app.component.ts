import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  operands: string[] = [];
  specialOPerands = ['/', 'x', '+', '-'];

  recordOperand(operand: string) {
    const lastOperand = this.operands[this.operands.length - 1];
    console.log(lastOperand);
    if(this.specialOPerands.includes(operand) && lastOperand && !this.specialOPerands.includes(lastOperand)) {
      this.operands.push(operand);
    }
    if((!this.specialOPerands.includes(operand) && this.specialOPerands.includes(lastOperand)) || !lastOperand) {
      this.operands.push(operand);
    }
    else if (!this.specialOPerands.includes(operand) && !this.specialOPerands.includes(lastOperand)) {
      this.operands[this.operands.length - 1] = lastOperand + operand;
    }
  }

  operationsMethods = {
    'x': (a: number, b: number) => a * b,
    '-': (a: number, b: number) => a - b,
    '+': (a: number, b: number) => a + b,
    '/': (a: number, b: number) => a / b,
  }

  calculateOperation(operations: string[]) {
    let result = [...operations];
    result = result.reduce((acc: any[], val, i, arr) => {
      if (arr[i - 1] == '/') {
        acc.pop();
        acc[acc.length - 1] = Number(acc[acc.length - 1]) / Number(val);
      }
      else {
        acc.push(val);
      }
      return acc;
    }, []);

    result = result.reduce((acc: any[], val, i, arr) => {
      if (arr[i - 1] == 'x') {
        acc.pop();
        acc[acc.length - 1] = Number(acc[acc.length - 1]) * Number(val);
      }
      else {
        acc.push(val);
      }
      return acc;
    }, []);

    result = result.reduce((acc: any[], val, i, arr) => {
      if (arr[i - 1] == '+') {
        acc.pop();
        acc[acc.length - 1] = Number(acc[acc.length - 1]) + Number(val);
      }
      else {
        acc.push(val);
      }
      return acc;
    }, []);

    result = result.reduce((acc: any[], val, i, arr) => {
      if (arr[i - 1] == '-') {
        acc.pop();
        acc[acc.length - 1] = Number(acc[acc.length - 1]) - Number(val);
      }
      else {
        acc.push(val);
      }
      return acc;
    }, []);
   
    return result;
  }
}
