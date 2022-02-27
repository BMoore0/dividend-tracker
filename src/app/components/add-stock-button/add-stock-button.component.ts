import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-stock-button',
  templateUrl: './add-stock-button.component.html',
  styleUrls: ['./add-stock-button.component.scss'],
})
export class AddStockButtonComponent implements OnInit {

  private isModalOpen: boolean;
  constructor() {}

  ngOnInit() {
    this.isModalOpen = false;
  }

  addStockItem () {
    console.log("Add stock item");
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
