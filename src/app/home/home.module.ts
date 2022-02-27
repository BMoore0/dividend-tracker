import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AddStockButtonComponent } from '../components/add-stock-button/add-stock-button.component';
import { StockItemComponent } from '../components/stock-item/stock-item.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, AddStockButtonComponent, StockItemComponent]
})
export class HomePageModule {}
