import { Component } from '@angular/core';
import { StockInfo } from '../interfaces/IStockInfo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private stocks: StockInfo[];

  stockInfo: StockInfo = {
    ticker: "MSFT",
    shareCount: 50,
    qtrReturn: 4,
    mnthReturn: 1,
    yrReturn: 16
  }

  constructor() {}

  ngOnInit () {
    this.stocks = [this.stockInfo]; //maybe use file system library to load saved stock list?
  }

  addStockItem(event: StockInfo){
    //create stock item component and insert into dom
    this.stocks.push(event);
    this.stocks = this.stocks.slice();
    console.log("THIS.STOCKS: ", this.stocks);

    console.log("HOME FUNCTION HIT");
    console.log("Home ticker: ", event.ticker);
  }

  calculateTotals(){
    console.log("SHIT");
  }

}
