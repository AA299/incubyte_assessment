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
    let delimiter = /,|\n/; 
    if (numbers.startsWith('//')) {
      const delimiterPart = numbers.split('\n', 1)[0].slice(2);
      numbers = numbers.slice(delimiterPart.length + 3); 

      if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
        delimiter = new RegExp(delimiterPart.slice(1, -1).replace(/[\[\]]/g, ''), 'g');
      } else {
        delimiter = new RegExp(delimiterPart);
      }
    }

    const numArray = numbers.split(delimiter).map(x => Number(x));


    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
