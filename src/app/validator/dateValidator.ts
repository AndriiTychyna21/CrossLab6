import { AbstractControl, ValidatorFn } from '@angular/forms'; 
import { ValidatorDateService } from './validator-date.service'; 
// Функція яка повертає валідатор форми 
export function dateValidator(): ValidatorFn { 
    return ( control: AbstractControl): { [key: string]: boolean } | null => { 
    // оголошуємо новий валідатор дати 
    let validator = new ValidatorDateService(); 
    // Перевіряємо валідність дати 
    let valid = !control.value || validator.validate_date(control.value); 
    return valid ? null : { date: true }; 
    };
}