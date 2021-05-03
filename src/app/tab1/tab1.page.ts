import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductsdataService } from 'src/app/services/addproductsdata.service';
import { productsData } from '../data/products';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public allProductsData;
  constructor(
    private router: Router,
    private addProducts: AddproductsdataService,
  ) {
    this.allProductsData = productsData;
    this.getAllProducts();
  }


  //navigate user to the product's details page
  openProductDetails(product) {
    this.router.navigate(['tabs/tab1/detail'], { state: { currentProductData: product } });
  }

  getAllProducts() {
    this.addProducts.getProductsData().subscribe(res => {

      this.allProductsData.all_products.featured_products = [];
      this.allProductsData.all_products.latest_products = [];
      this.allProductsData.all_products.offer_products = [];
      res = this.assignedProduct(res, 'featured_products')
      res = this.assignedProduct(res, 'latest_products')
      res = this.assignedProduct(res, 'offer_products')

    });
  }

  assignedProduct(res, pusharray) {

    for (let i = 0; i <= 3; i++) {
      const random = Math.floor(Math.random() * res.length);
      if (res[random]) {
        this.allProductsData.all_products[pusharray].push(res[random]);
        delete res[random];
      }

    }
    return res.filter(Boolean)
  }
  //navigate user to all products page
  openProductsSection() {
    this.router.navigate(['tabs/tab1/search']);
  }

}