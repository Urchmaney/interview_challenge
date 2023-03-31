import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private service: CalculatorService) {}

  operands: string[] = [];

  result = '';

  recordOperand(operand: string) {
    const lastOperand = this.operands[this.operands.length - 1];

    if(operand === '=') {
      this.operands.length > 0 ? this.result = this.service.calculateResult(this.operands) : this.result = '0';
      return;
    }

    if(operand === 'CE') {
      this.operands = [];
      this.result = '';
      return;
    }
   
    if((this.service.isOperator(lastOperand) || this.operands.length == 0)&& (this.service.isOperator(operand) || operand == '.'))
    {
      return;
    }

    if(operand === '.' && lastOperand[lastOperand.length - 1] === '.') {
      return;
    }

    if (lastOperand && !this.service.isOperator(lastOperand) && !this.service.isOperator(operand)) {
      this.operands[this.operands.length - 1] = lastOperand + operand;
      return;
    }

    this.operands.push(operand);
  }
}
