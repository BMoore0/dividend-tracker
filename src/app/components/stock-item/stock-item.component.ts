import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StockInfo } from 'src/app/interfaces/IStockInfo';

@Component({
  selector: 'stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})

export class StockItemComponent implements OnInit {

  @Output() newStockInfo = new EventEmitter<StockInfo>();
  @Output() stockToRemove = new EventEmitter<StockInfo>();
  @Input('stockInfo') stockInfo: StockInfo;

  private monthlyReturnExists;
  private quarterlyReturnExists;
  private ticker: string;
  private shareCount: number;
  private qtrReturn: number;
  private mnthReturn: number;
  private yrReturn: number;

  private stocksNotEmpty: boolean = false;
  private openEditModal: boolean = false;
  private newShareCount: number;

  constructor() { }

  
  ngOnInit() {
    this.ticker = this.stockInfo?.ticker;
    this.shareCount = this.stockInfo?.shareCount;
    this.qtrReturn = this.stockInfo?.qtrReturn;
    this.mnthReturn = this.stockInfo?.mnthReturn;
    this.yrReturn = this.stockInfo?.yrReturn;
    this.monthlyReturnExists = this.mnthReturn === null ?  false : true;
    this.quarterlyReturnExists = this.qtrReturn === null ?  false : true;
    this.stocksNotEmpty = this.stockInfo ? true : false;
    this.newShareCount = this.shareCount;
  }

  editStock() {
    this.openEditModal = true;
  }

  async saveStockItem() {
    if(this.newShareCount > 0 && this.newShareCount < 10000) {
      this.stockInfo.shareCount = this.newShareCount;
      this.stockInfo.yrReturn = Math.round(((this.stockInfo.cash_amount * this.stockInfo.frequency * this.newShareCount) + Number.EPSILON) * 100) / 100;
      this.stockInfo.qtrReturn = this.stockInfo.frequency === 4 ? Math.round(((this.stockInfo.cash_amount * this.newShareCount) + Number.EPSILON) * 100) / 100 : null;
      this.stockInfo.mnthReturn = this.stockInfo.frequency === 12 ? Math.round(((this.stockInfo.cash_amount * this.newShareCount) + Number.EPSILON) * 100) / 100 : null;
    }

    console.log('this stonk now: ', this.stockInfo);
    console.log('yr return: ', this.yrReturn);

    await this.newStockInfo.emit(this.stockInfo);
    this.openEditModal = false;
  }

  async deleteStockItem() {
    await this.stockToRemove.emit(this.stockInfo);
    this.openEditModal = false;
  }

}
