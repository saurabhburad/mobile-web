import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'detail',
    loadChildren: () => import('../tab1/main/products-details/products-details-cloth-shopping.module').then(m => m.ProductDetailClothShoppingModule)

  },
  {
    path: 'search',
    loadChildren: () => import('../tab1/main/products/products-cloth-shopping.module').then(m => m.ProductClothShoppingModule)

  },
  {
    path: 'cart',
    loadChildren: () => import('../tab1/main/cart/cart-cloth-shopping.module').then(m => m.CartClothShoppingModule)

  },
  {
    path: 'buy',
    loadChildren: () => import('../tab1/main/buy/buy-cloth-shopping.module').then(m => m.BuyClothShoppingModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
