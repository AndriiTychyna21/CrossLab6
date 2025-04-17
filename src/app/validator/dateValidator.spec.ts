import { AbstractControl } from '@angular/forms';
import { dateValidator } from './dateValidator';

describe('dateValidator', () => {
  let control: AbstractControl;

  it('should return null for valid date', () => {
    const validator = dateValidator();
    control = { value: '2025-04-20' } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return { date: true } for invalid date', () => {
    const validator = dateValidator();
    control = { value: '2024-02-01' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return null for empty value', () => {
    const validator = dateValidator();
    control = { value: '' } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null for null value', () => {
    const validator = dateValidator();
    control = { value: null } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null for undefined value', () => {
    const validator = dateValidator();
    control = { value: undefined } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return { date: true } for date before 2025', () => {
    const validator = dateValidator();
    control = { value: '2024-04-20' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return null for date equal to 2025', () => {
    const validator = dateValidator();
    control = { value: '2025-01-01' } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return { date: true } for invalid date format', () => {
    const validator = dateValidator();
    control = { value: '31-02-2025' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });
});