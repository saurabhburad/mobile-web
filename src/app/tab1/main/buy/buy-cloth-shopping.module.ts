import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonClothShoppingModule } from 'src/app/common/common-cloth-shopping.module';
import { BuyClothShoppingRoutingModule } from './buy-cloth-shopping-routing.module';
import { BuyClothShoppingComponent } from './buy-cloth-shopping/buy-cloth-shopping.component';

@NgModule({
  imports: [
    BuyClothShoppingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonClothShoppingModule
  ],
  declarations: [BuyClothShoppingComponent]
})
export class BuyClothShoppingModule { }
