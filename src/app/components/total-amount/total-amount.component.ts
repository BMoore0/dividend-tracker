import { Component, Input, OnInit } from '@angular/core';
import { StockInfo } from 'src/app/interfaces/IStockInfo';

@Component({
  selector: 'total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss'],
})
export class TotalAmountComponent implements OnInit {

  private yearlyReturn: number;
  private quarterlyReturn: number;
  private monthlyReturn: number;

  @Input('stocks') stocks: StockInfo[];

  constructor() { }

  ngOnInit() {
    this.calculateTotals();

  }

  calculateTotals() {
    console.log("HIT");
    this.yearlyReturn = this.calculateYearlyReturn();
    this.quarterlyReturn = this.calculateQuarterlyReturn();
    this.monthlyReturn = this.calculateMonthlyReturn();
  }

  calculateYearlyReturn(): number {
    let total = 0;
    for(const stock in this.stocks) {
      total += this.stocks[stock].yrReturn;
    }
    return total;
  }

  calculateMonthlyReturn(): number {
    let total = 0;
    for(const stock in this.stocks) {
      total += this.stocks[stock].mnthReturn;
    }
    return total;
  }

  calculateQuarterlyReturn(): number {
    let total = 0;
    for(const stock in this.stocks) {
      total += this.stocks[stock].qtrReturn;
    }
    return total;
  }

}
