import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {
    this.operationMethods.set('x', (a: number, b: number) => a * b);
    this.operationMethods.set('-', (a: number, b: number) => a - b);
    this.operationMethods.set('/', (a: number, b: number) => a / b);
    this.operationMethods.set('+', (a: number, b: number) => a + b)
  }

  private operationMethods: Map<string, (a: number, b: number) => {}> = new Map();
  private operators = ['/', 'x', '+', '-'];

  private calculateOperation(operations: any[], operation: string) : any[] {
    const operationFunc = this.operationMethods.get(operation);
    return operations.reduce((acc: any[], val, i, arr) => {
      if (arr[i - 1] == operation) {
        acc.pop();
        acc[acc.length - 1] = operationFunc?.(Number(acc[acc.length - 1]), Number(val)) || 0;
      }
      else {
        acc.push(val);
      }
      return acc;
    }, []);
  }
  

  isOperator(operand: string) :boolean {
    return this.operators.includes(operand)
  }

  calculateResult(operations: string[]) {
    let result = [...operations];
    result = this.calculateOperation(result, '/');
    result = this.calculateOperation(result, 'x');
    result = this.calculateOperation(result, '+');
    result = this.calculateOperation(result, '-');   
    return parseFloat(result[0]).toFixed(1);
  }
}
