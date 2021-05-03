import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductClothShoppingRoutingModule } from './products-cloth-shopping-routing.module';
import { ProductClothShoppingComponent } from './products-cloth-shopping/products-cloth-shopping.component';
import { CommonClothShoppingModule } from 'src/app/common/common-cloth-shopping.module';


@NgModule({
  imports: [
    ProductClothShoppingRoutingModule,
    CommonModule,
    FormsModule,
    CommonClothShoppingModule
  ],
  declarations: [ProductClothShoppingComponent]
})
export class ProductClothShoppingModule { }
