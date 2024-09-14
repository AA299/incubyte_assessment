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
    const numArray = numbers.split(/,|\n/).map(x => Number(x));

    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
