import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    return numbers.split(',').map((x) => Number(x)).reduce((sum, num) => sum+num, 0)
  }
}
