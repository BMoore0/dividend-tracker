import { Component } from '@angular/core';
import { StockInfo } from '../interfaces/IStockInfo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private stocks: StockInfo[];

  stockInfo: StockInfo;

  constructor(private dataService: DataService) {}

  async ngOnInit () {
    this.loadStocks();
    console.log('stonks', this.stocks);
    //this.stocks = await this.dataService.getData();
    //this.stocks = [this.stockInfo]; //maybe use file system library to load saved stock list?
  }

  async loadStocks() {
    this.stocks = await this.dataService.getData();
  }

  // async ngOnChanges() {
  //   await this.loadStocks();
  // }

  async addStockItem(event: StockInfo){
    await this.dataService.addData(event);
    this.loadStocks();
  }

  async updateStockList(modifiedStock: StockInfo) {
    for (const stock in this.stocks) {
      if(modifiedStock.ticker === this.stocks[stock].ticker) {
        this.stocks[stock] = modifiedStock;
      }
    }
    
    await this.dataService.updateData(this.stocks);
    //await this.loadStocks();

    this.stocks = await this.dataService.getData();
    location.reload();
  }

  async removeFromStockList(stockToRemove: StockInfo) {
    console.log('stock to remove: ', stockToRemove);
    console.log('this stocks: ', this.stocks);
    // for (const stock in this.stocks) {
    //   if(stockToRemove.ticker === this.stocks[stock].ticker) {
    //     //delete this.stocks[stock];
    //     this.stocks.filter(stock => stock.ticker !== stockToRemove.ticker);
    //     await this.dataService.updateData(this.stocks);
    //     return;
    //   }
    //   return;
    // }
    this.stocks = this.stocks.filter(function(stock: StockInfo) {
      return stock.ticker !== stockToRemove.ticker;
    });

    console.log('new stonkes: ', this.stocks);
    await this.dataService.updateData(this.stocks);
    location.reload();

    
  }
  

}
