import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return the value of a single number', () => {
    expect(service.add('1')).toEqual(1);
    expect(service.add('10')).toEqual(10);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add('1,2')).toEqual(3);
  });

  it('should return the sum of number with newline escape sequence character in input', () => {
    expect(service.add("1\n2,3")).toEqual(6);
  })

  it('should throw an error for negative numbers', () => {
    expect(() => service.add('1,-2,3')).toThrowError('negative numbers not allowed -2');
    expect(() => service.add('-1,-2')).toThrowError('negative numbers not allowed -1, -2');
  });

  
  it('should handle custom single-character delimiter', () => {
    expect(service.add('//;\n1;2')).toEqual(3);
  });
});
