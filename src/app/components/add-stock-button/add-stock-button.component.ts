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
  constructor() {}

  ngOnInit() {
    this.isModalOpen = false;
  }

  addStockItem () {
    const info: StockInfo = {
        ticker: 'TEST',
        shareCount: 5,
        yrReturn: 3,
        qtrReturn: 2,
        mnthReturn: 1
    }
    this.newStockItem.emit(info);

    console.log("stock item: ", info);
    console.log("Add stock item");

    this.isModalOpen = false;
  }

  openModal() {
    console.log("open modal, this.isOpen: ", this.isModalOpen);
    this.isModalOpen = true;
    console.log("open modal, this.isOpen: ", this.isModalOpen);

  }
  closeModal() {
    console.log("close modal");
    this.isModalOpen = false;
    console.log(this.isModalOpen);
  }

}
