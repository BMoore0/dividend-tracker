import { Component } from '@angular/core';
import { StockInfo } from '../interfaces/IStockInfo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  stockInfo: StockInfo = {
    ticker: "MSFT",
    shareCount: 50,
    qtrReturn: 4,
    mnthReturn: 1,
    yrReturn: 16
  }
  constructor() {}

}
