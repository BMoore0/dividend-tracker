import { Component, Input, OnInit, OnChanges } from '@angular/core';
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

  @Input() stocks: StockInfo[];

  constructor() { }

  ngOnChanges() {
    this.calculateTotals();
  }

  ngOnInit() {
    this.calculateTotals();
  }
  

  calculateTotals() {
    this.yearlyReturn = this.calculateYearlyReturn();
    this.quarterlyReturn = this.calculateQuarterlyReturn();
    this.monthlyReturn = this.calculateMonthlyReturn();
  }

  calculateYearlyReturn(): number {
    let total = 0;
    for(const stock in this.stocks) {
      total += this.stocks[stock]?.yrReturn ?? 0;
    }
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

  calculateMonthlyReturn(): number {
    let total = 0;
    for(const stock in this.stocks) {
      total += this.stocks[stock]?.mnthReturn ?? 0;
    }
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

  calculateQuarterlyReturn(): number {
    let total = 0;
    for(const stock in this.stocks) {
      total += this.stocks[stock]?.qtrReturn ?? 0;
    }
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

}
