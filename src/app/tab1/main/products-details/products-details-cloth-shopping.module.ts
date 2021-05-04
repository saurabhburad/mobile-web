import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonClothShoppingModule } from 'src/app/common/common-cloth-shopping.module';
import { ProductDetailClothShoppingRoutingModule } from './products-details-cloth-shopping-routing.module';
import { ProductDetailsClothShoppingComponent } from './products-details-cloth-shopping/products-details-cloth-shopping.component';


@NgModule({
  imports: [
    ProductDetailClothShoppingRoutingModule,
    CommonModule,
    FormsModule,
    CommonClothShoppingModule,
    IonicModule
  ],
  declarations: [ProductDetailsClothShoppingComponent]
})
export class ProductDetailClothShoppingModule { }
