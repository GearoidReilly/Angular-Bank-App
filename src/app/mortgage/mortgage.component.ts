import { Component, OnInit } from '@angular/core';
import { CalculateInterestService } from '../services/calculate-interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private calcInterest: CalculateInterestService) { }

  ngOnInit() {
  }

  Total: number;  //Total mortgage
  years: number;  //Years input value
  amount: number; //Money amount input value

  calaulateinterest(): void {
    //Call the calculate interest service to calculate savings
    this.Total = this.calcInterest.calculateinterest(this.years,this.amount);
  }

}
