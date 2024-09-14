import { Component, OnInit, inject } from '@angular/core';
import { StringCalculatorService } from './services/string-calculator.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'incubyte_assessment';
  _stringCalculatorService = inject(StringCalculatorService);
  result: any = "";

  testCases: { input: string, expected: any }[] = [
    { input: "", expected: 0 },
    { input: "1", expected: 1 },
    { input: "1,2", expected: 3 },
  ];

  ngOnInit(): void {
    this.testCases.forEach(test => {
      try {
        const result = this._stringCalculatorService.add(test.input);
        console.log(`Input: '${test.input}' | Expected: ${test.expected} | Result: ${result}`);
      } catch (error: any) {
        console.log(`Input: '${test.input}' | Expected: ${test.expected} | Result: ${error.message}`);
      }
    });
  }
}
