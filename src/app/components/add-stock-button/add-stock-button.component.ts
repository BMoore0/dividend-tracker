import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IApiResponse } from 'src/app/interfaces/IApiResponse';
import { StockInfo } from 'src/app/interfaces/IStockInfo';

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

  validateStock(): boolean {
    if(this.stockSymbol.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  addStockItem () {
    const isStockValid = this.validateStock();
    const isShareCountValid = this.validateShareCount();

    if(isStockValid && isShareCountValid) {
      this.activateAddButton = true;
    }

    if(this.activateAddButton) {
      // mock api response object, real api call will be a get call using the ticker entered by user ie(this.stockSymbol): polygon dividend v3 endpoint
      // will want to do the real api call before activating add button (check for OK response and result object not empty)
      const mockApiResponse: IApiResponse = {
        next_url: "dummy",
        // results will have multiple objects in real implementation, grab the first object sorted by declaration date(most recent)
        results: [{
          cash_amount: .25,
          declaration_date: new Date("2022-01-01"),
          dividend_type: "CD",
          ex_dividend_date: new Date("2022-01-01"),
          frequency: 4,
          pay_date: new Date("2022-01-01"),
          record_date: new Date("2022-01-01"),
          ticker: "MSFT"
        }],
        status: "OK"
      }

      const yearlyReturn = mockApiResponse.results[0].cash_amount * mockApiResponse.results[0].frequency * this.shareCount;
      const quarterlyReturn = mockApiResponse.results[0].frequency === 4 ? mockApiResponse.results[0].cash_amount * this.shareCount : null;
      const monthlyReturn = mockApiResponse.results[0].frequency === 12 ? mockApiResponse.results[0].cash_amount * this.shareCount : null;


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
