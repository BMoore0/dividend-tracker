import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { StockInfo } from '../interfaces/IStockInfo';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
    // this.init();
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
  }

  async getData() {
    //await this.storage.remove('stockList');
    return await this.storage.get('stockList') || [];
  }

  async addData(stock: StockInfo) {
    const storedData = await this.storage.get('stockList') || [];
    storedData.push(stock);
    await this.storage.set('stockList', storedData);
  }

  async updateData(stockList: StockInfo[]) {
    console.log('ud stock list: ', stockList);
    await this.storage.set('stockList', stockList);
  }
}
