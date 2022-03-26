import { Component, Input, OnInit } from '@angular/core';
import { StockInfo } from 'src/app/interfaces/IStockInfo';

@Component({
  selector: 'stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})

export class StockItemComponent implements OnInit {

  @Input('stockInfo') stockInfo: StockInfo;

  private monthlyReturnExists;
  private quarterlyReturnExists;
  private ticker: string;
  private shareCount: number;
  private qtrReturn: number;
  private mnthReturn: number;
  private yrReturn: number;

  private stocksNotEmpty: boolean = false;

  constructor() { }

  
  ngOnInit() {
    this.ticker = this.stockInfo.ticker;
    this.shareCount = this.stockInfo.shareCount;
    this.qtrReturn = this.stockInfo.qtrReturn? this.stockInfo.qtrReturn : null;
    this.mnthReturn = this.stockInfo.mnthReturn? this.stockInfo.mnthReturn : null;
    this.yrReturn = this.stockInfo.yrReturn;
    this.monthlyReturnExists = this.mnthReturn === null ?  false : true;
    this.quarterlyReturnExists = this.qtrReturn === null ?  false : true;
    this.stocksNotEmpty = this.stockInfo ? true : false;
  }

}
