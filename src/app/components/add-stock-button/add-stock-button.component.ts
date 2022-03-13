import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IApiResponse } from 'src/app/interfaces/IApiResponse';
import { StockInfo } from 'src/app/interfaces/IStockInfo';
import { StockResult } from 'src/app/interfaces/IStockResult';
import { apiKey } from '../../../../config';
const axios = require('axios').default;

@Component({
  selector: 'add-stock-button',
  templateUrl: './add-stock-button.component.html',
  styleUrls: ['./add-stock-button.component.scss'],
})
export class AddStockButtonComponent implements OnInit {

  @Output() newStockItem = new EventEmitter<StockInfo>();


  private isModalOpen: boolean;
  private stockSymbol: string;
  private shareCount: number;
  private activateAddButton: boolean;

  constructor() {}

  ngOnInit() {
    this.isModalOpen = false;
    this.activateAddButton = false;
  }

  validateShareCount(): boolean {
    if((this.shareCount > 0 && this.shareCount < 10000)){
      return true;
    }
    else {
      return false;
    }
  }

  async addStockItem () {
    let stockInfo: StockResult;

    await axios({
      method: 'get',
      url: `https://api.polygon.io/v3/reference/dividends?ticker=${this.stockSymbol.toUpperCase()}&apiKey=${apiKey}`,
      responseType: 'stream'
    })
      .then(function (response) {
        stockInfo = response.data.results[0];
        console.log("stock info: ", stockInfo);
      })

    const isShareCountValid = (this.shareCount > 0 && this.shareCount < 10000)? true: false;

    if(stockInfo && isShareCountValid) {
      this.activateAddButton = true;
    }

    if(this.activateAddButton) {
      // const yearlyReturn = stockInfo.cash_amount * stockInfo.frequency * this.shareCount;
      // const quarterlyReturn = stockInfo.frequency === 4 ? stockInfo.cash_amount * this.shareCount : null;
      // const monthlyReturn = stockInfo.frequency === 12 ? stockInfo.cash_amount * this.shareCount : null;

      const yearlyReturn = Math.round(((stockInfo.cash_amount * stockInfo.frequency * this.shareCount) + Number.EPSILON) * 100) / 100;
      const quarterlyReturn = stockInfo.frequency === 4 ? Math.round(((stockInfo.cash_amount * this.shareCount) + Number.EPSILON) * 100) / 100 : null;
      const monthlyReturn = stockInfo.frequency === 12 ? Math.round(((stockInfo.cash_amount * this.shareCount) + Number.EPSILON) * 100) / 100 : null;

      // map stock info properties to ApiResponse properties
      const info: StockInfo = {
        ticker: this.stockSymbol,
        shareCount: this.shareCount,
        yrReturn: yearlyReturn,
        qtrReturn: quarterlyReturn,
        mnthReturn: monthlyReturn
    }
    this.newStockItem.emit(info);
    this.stockSymbol = '';
    this.shareCount = undefined;
    this.isModalOpen = false;
    }
    else {
      console.log("invalid input please try again");
    }
  }

  openModal() {
    this.isModalOpen = true;
    this.activateAddButton = false; 
  }
  
  closeModal() {
    this.stockSymbol = undefined;
    this.shareCount = undefined;
    this.isModalOpen = false;
  }

}
