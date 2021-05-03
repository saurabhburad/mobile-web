import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonClothShoppingModule } from 'src/app/common/common-cloth-shopping.module';
import { CartClothShoppingRoutingModule } from './cart-cloth-shopping-routing.module';
import { CartClothShoppingComponent } from './cart-cloth-shopping/cart-cloth-shopping.component';

@NgModule({
  imports: [
    CartClothShoppingRoutingModule,
    CommonModule,
    FormsModule,
    CommonClothShoppingModule
  ],
  declarations: [CartClothShoppingComponent]
})
export class CartClothShoppingModule { }
