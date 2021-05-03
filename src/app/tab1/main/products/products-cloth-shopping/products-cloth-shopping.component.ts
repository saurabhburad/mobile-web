import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddproductsdataService } from 'src/app/services/addproductsdata.service';
import { Observable } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-product-cloth-shop',
  templateUrl: './products-cloth-shopping.component.html',
  styleUrls: ['./products-cloth-shopping.component.css']
})
export class ProductClothShoppingComponent {
  public allProductsData;
  query
  listOfFilterFordisplay: any = ['Price - low to high', 'Price - high to low'];
  constructor(private router: Router,
    private addProducts: AddproductsdataService,
    ) {
      this.getAllProducts()
  }
  
  getAllProducts() {
    this.addProducts.getProductsData().subscribe(res => {
      this.allProductsData = res;
    })
  }

  // filter the result based on price low to high and hight tot low return the data
 changeFilterOptionByvalue(option) {
  if(option === this.listOfFilterFordisplay[0]) {
    let data  =  this.allProductsData.sort((lowProductPrice, highProductPrice) => lowProductPrice.price - highProductPrice.price);
    this.allProductsData = [...data]
  }
  if(option === this.listOfFilterFordisplay[1]) {
    let data  =  this.allProductsData.sort((lowProductPrice, highProductPrice) =>  highProductPrice.price - lowProductPrice.price);
    this.allProductsData = [...data]
  }
 }

  //navigate user to the product's details page
  openProductDetails(product) {
    this.router.navigate(['/tabs/tab1/detail'], { state: { currentProductData: product } });
  }

  

}