import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})

export class StockItemComponent implements OnInit {

  @Input('ticker') ticker = 'AAPL';
  @Input('shareCount') shareCount = '50';
  @Input('qtrReturn') qtrReturn = '$130';
  @Input('mnthReturn') mnthReturn = '';
  @Input('yrReturn') yrReturn = '$520';

  private monthlyReturnExists;
  private quarterlyReturnExists;

  constructor() { }

  
  ngOnInit() {
    this.monthlyReturnExists = this.mnthReturn === '' ?  false : true;
    this.quarterlyReturnExists = this.qtrReturn === '' ?  false : true;
    console.log("exists?: ", this.monthlyReturnExists);
  }

}
