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
  }

  async loadStocks() {
    this.stocks = await this.dataService.getData();
  }

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

    this.stocks = await this.dataService.getData();
    location.reload();
  }

  async removeFromStockList(stockToRemove: StockInfo) {
    this.stocks = this.stocks.filter(function(stock: StockInfo) {
      return stock.ticker !== stockToRemove.ticker;
    });

    await this.dataService.updateData(this.stocks);
    location.reload();

    
  }
  

}
