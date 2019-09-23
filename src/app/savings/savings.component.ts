import { Component, OnInit } from '@angular/core';
import { CalculateInterestService } from '../services/calculate-interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private calcInterest: CalculateInterestService) { }

  ngOnInit() {
  }

  Total: number;  //Total savings
  years: number;  //Years input value
  amount: number; //Money amount input value

  calaulateinterest(): void {
    //Call the calculate interest service to calculate savings
    this.Total = this.calcInterest.calculateinterest(this.years,this.amount);
  }

}
