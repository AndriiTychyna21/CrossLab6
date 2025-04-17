import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorNameService {

  validate_name(value: string): boolean {
    if (!value || value.length === 0) return false;
  
    const firstChar = value.charAt(0);
    const isFirstCharValid = /^[A-Z0-9]$/.test(firstChar);
    if (!isFirstCharValid) return false;
  
    const forbiddenChars = /[.,\/\?\|\\!\(\[\{<\)\]\}>@#\^\*\+\%]/;
    return !forbiddenChars.test(value);
  }
  

  constructor() { }
}