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

  async addStockItem(event: StockInfo){
    //create stock item component and insert into dom
    // this.stocks?.push(event);
    // this.stocks = this.stocks?.slice();

    await this.dataService.addData(event);
    this.loadStocks();
  }

}
