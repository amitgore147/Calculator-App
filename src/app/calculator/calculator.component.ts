import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public result: string = '';

  public append(value: string): void {
    this.result += value;
  }

  public backspace(): void {
    this.result = this.result.slice(0, -1);
  }

  public clear(): void {
    this.result = '';
  }

  public calculate(): void {
    try {
      this.result = eval(this.result);
    } catch (e) {
      this.result = 'Error';
    }
  }

}

