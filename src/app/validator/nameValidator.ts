import { AbstractControl, ValidatorFn } from '@angular/forms'; 
import { ValidatorNameService } from './validator-name.service';

export function nameValidator(): ValidatorFn { 
    return ( control: AbstractControl): { [key: string]: boolean } | null => { 
   
    let validator = new ValidatorNameService(); 
   
    let valid = !control.value || validator.validate_name(control.value); 
    return valid ? null : { date: true }; 
    };
}