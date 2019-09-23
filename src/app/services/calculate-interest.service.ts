import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateInterestService {

  constructor() { }

  Total: number;                //Total number calculated
  interestRate: number = 0.01;  //Interest rate
  annualCompound: number = 1;   //Annual compound value


  calculateinterest(years: number, amount: number): number {
    //Loop through based on the number of years
    for (var counter: number = 1; counter < years + 1; counter++) {
      //Calculate the total value
      this.Total = amount * Math.pow((1 +
      this.interestRate / this.annualCompound),
      (this.annualCompound * counter));
    }
    //Return the total value
    return this.Total;
  }
}
