import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-stock-button',
  templateUrl: './add-stock-button.component.html',
  styleUrls: ['./add-stock-button.component.scss'],
})
export class AddStockButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  addStockItem () {
    console.log("Working");
  }

}
