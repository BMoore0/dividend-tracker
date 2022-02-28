import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  validateInput() {
    if(this.stockSymbol && this.shareCount){

      if(this.stockSymbol.length > 0 && (this.shareCount > 0 && this.shareCount < 10000)) {
        this.activateAddButton = true;
      }
      else {
        this.activateAddButton = false;
      }

    }
    else {
      this.activateAddButton = false;
    }
  }

  addStockItem () {
    this.validateInput();

    if(this.activateAddButton) {
      const info: StockInfo = {
        ticker: this.stockSymbol,
        shareCount: this.shareCount,
        yrReturn: 3,
        qtrReturn: 2,
        mnthReturn: 1
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
  }
  
  closeModal() {
    this.stockSymbol = undefined;
    this.shareCount = undefined;
    this.isModalOpen = false;
  }

}
