import { AbstractControl } from '@angular/forms';
import { nameValidator } from './nameValidator';

describe('nameValidator', () => {
  let control: AbstractControl;

  it('should return null for valid name starting with capital letter', () => {
    const validator = nameValidator();
    control = { value: 'Alice' } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null for valid name starting with digit', () => {
    const validator = nameValidator();
    control = { value: '7Name' } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return { date: true } for name starting with lowercase letter', () => {
    const validator = nameValidator();
    control = { value: 'john' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return { date: true } for name with forbidden character "."', () => {
    const validator = nameValidator();
    control = { value: 'A.name' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return { date: true } for name with forbidden character "#"', () => {
    const validator = nameValidator();
    control = { value: 'X#name' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return { date: true } for name with multiple forbidden characters', () => {
    const validator = nameValidator();
    control = { value: '8Name@here!' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return { date: true } for name starting with forbidden character', () => {
    const validator = nameValidator();
    control = { value: '@Start' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return { date: true } for name starting with space', () => {
    const validator = nameValidator();
    control = { value: ' Name' } as AbstractControl;
    const result = validator(control);
    expect(result).toEqual({ date: true });
  });

  it('should return null for empty string', () => {
    const validator = nameValidator();
    control = { value: '' } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null for null value', () => {
    const validator = nameValidator();
    control = { value: null } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null for undefined value', () => {
    const validator = nameValidator();
    control = { value: undefined } as AbstractControl;
    const result = validator(control);
    expect(result).toBeNull();
  });
});
