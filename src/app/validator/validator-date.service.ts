import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorDateService {
  validate_date(value: string){
    if (!value) return false;
    let arrD: string[] = [];
    arrD = value.split(/[-]/);
    if (arrD.length != 3) return false;
    let arrDate: number[] = [];
    arrD.forEach((el) => (arrDate.push(Number(el))));
    arrDate[1] -= 1;

    let d = new Date(arrDate[0], arrDate[1], arrDate[2]);
    
    return (d.getFullYear() == arrDate[0] &&
      d.getMonth() == arrDate[1] &&
      d.getDate() == arrDate[2] &&
      arrDate[0] > 2024);
  }

  constructor() { }
}
