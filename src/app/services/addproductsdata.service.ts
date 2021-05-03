import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { of } from 'rxjs';
const response = [{
    "description": "Red Plain T-Shirt", 
    "id": 2, 
    "image1": "images/gallery-1.jpg", 
    "image2": "images/gallery-2.jpg", 
    "image3": "images/gallery-3.jpg", 
    "image4": "images/gallery-4.jpg", 
    "image5": "images/gallery-5.jpg", 
    "price": 60, 
    "productDetails": "Red Plain T-shirt, has a round collar, with half sleeves", 
    "rating": 4
  }, 
  {
    "description": "Black HRX Shoes", 
    "id": 3, 
    "image1": "images/product-1.jpg", 
    "image2": "images/product-2.jpg", 
    "image3": "images/product-3.jpg", 
    "image4": "images/product-4.jpg", 
    "image5": "images/product-5.jpg", 
    "price": 55, 
    "productDetails": "Running Shoes For Men (Black)", 
    "rating": 4
  }, 
  {
    "description": "Grey Wrist Watch", 
    "id": 4, 
    "image1": "images/watch-1.jpg", 
    "image2": "images/watch-2.jpg", 
    "image3": "images/watch-3.jpg", 
    "image4": "images/watch-4.jpg", 
    "image5": "images/watch-5.jpg", 
    "price": 65, 
    "productDetails": "LS2729 WIne Grey Avatar Day and Date Functioning Analog Analog Watch - For Men", 
    "rating": 4
  }, 
  {
    "description": "Black and White T-Shirt", 
    "id": 7, 
    "image1": "images/black-and-white-t-shirt-1.jpg", 
    "image2": "images/black-and-white-t-shirt-1.jpg", 
    "image3": "images/black-and-white-t-shirt-2.jpg", 
    "image4": "images/black-and-white-t-shirt-3.jpg", 
    "image5": "images/black-and-white-t-shirt-4.jpg", 
    "price": 65, 
    "productDetails": "Color Block Men Round Neck Black, White T-Shirt", 
    "rating": 4
  }, 
  {
    "description": "HRX 3 Pair Socks", 
    "id": 9, 
    "image1": "images/socks-1.jpg", 
    "image2": "images/socks-1.jpg", 
    "image3": "images/socks-2.jpg", 
    "image4": "images/socks-3.jpg", 
    "image5": "images/socks-4.jpg", 
    "price": 40, 
    "productDetails": "Men Solid Ankle Length (Pack of 3)", 
    "rating": 5
  }, 
  {
    "description": "Red and Black Shoes", 
    "id": 10, 
    "image1": "images/red-black-shoes-1.jpg", 
    "image2": "images/red-black-shoes-1.jpg", 
    "image3": "images/red-black-shoes-2.jpg", 
    "image4": "images/red-black-shoes-3.jpg", 
    "image5": "images/red-black-shoes-4.jpg", 
    "price": 75, 
    "productDetails": "Flex Control 3 Training & Gym Shoes For Men (Red)", 
    "rating": 5
  }, 
  {
    "description": "Grey Sneakers", 
    "id": 11, 
    "image1": "images/grey-sneakers-1.jpg", 
    "image2": "images/grey-sneakers-1.jpg", 
    "image3": "images/grey-sneakers-2.jpg", 
    "image4": "images/grey-sneakers-3.jpg", 
    "image5": "images/grey-sneakers-4.jpg", 
    "price": 35, 
    "productDetails": "Zoom Gravity Running Shoes For Men (Grey)", 
    "rating": 3
  }, 
  {
    "description": "Black Trousers", 
    "id": 12, 
    "image1": "images/black-trousers-1.jpg", 
    "image2": "images/black-trousers-1.jpg", 
    "image3": "images/black-trousers-2.jpg", 
    "image4": "images/black-trousers-3.jpg", 
    "image5": "images/black-trousers-4.jpg", 
    "price": 45, 
    "productDetails": "Slim Fit Men Black Polyester Viscose Blend Trousers", 
    "rating": 3
  }, 
  {
    "description": "Grey Trousers", 
    "id": 13, 
    "image1": "images/grey-trousers-1.jpg", 
    "image2": "images/grey-trousers-1.jpg", 
    "image3": "images/grey-trousers-2.jpg", 
    "image4": "images/grey-trousers-3.jpg", 
    "image5": "images/grey-trousers-4.jpg", 
    "price": 55, 
    "productDetails": "Slim Fit Men Grey Cotton Lycra Blend Trousers", 
    "rating": 3
  }, 
  {
    "description": "Girls Ankle Boots", 
    "id": 18, 
    "image1": "images/wide-fit-black-suedette-lace-up-ankle-boots-1.jpg", 
    "image2": "images/wide-fit-black-suedette-lace-up-ankle-boots-2.jpg", 
    "image3": "images/wide-fit-black-suedette-lace-up-ankle-boots-3.jpg", 
    "image4": "images/wide-fit-black-suedette-lace-up-ankle-boots-4.jpg", 
    "image5": "images/wide-fit-black-suedette-lace-up-ankle-boots-5.jpg", 
    "price": 60, 
    "productDetails": "Wide Fit Black Suedette Lace Up Ankle Boots", 
    "rating": 4
  }, 
  {
    "description": "Black Plain T-shirt", 
    "id": 5, 
    "image1": "images/product-11.jpg", 
    "image2": "images/product-11.jpg", 
    "image3": "images/product-12.jpg", 
    "image4": "images/product-13.jpg", 
    "image5": "images/product-14.jpg", 
    "price": 67, 
    "productDetails": "Printed Men Polo Neck Black T-Shirt", 
    "rating": 4
  }, 
  {
    "description": "Girl Casual Dress", 
    "id": 20, 
    "image1": "images/blue-floral-button-front-tea-dress-1.jpg", 
    "image2": "images/blue-floral-button-front-tea-dress-2.jpg", 
    "image3": "images/blue-floral-button-front-tea-dress-3.jpg", 
    "image4": "images/blue-floral-button-front-tea-dress-4.jpg", 
    "image5": "images/blue-floral-button-front-tea-dress-5.jpg", 
    "price": 55, 
    "productDetails": "Blue floral button front tea dress", 
    "rating": 4
  }, 
  {
    "description": "Girls T-shirt Dress", 
    "id": 21, 
    "image1": "images/white-care-bears-born-to-care-logo-t-shirt-1.jpg", 
    "image2": "images/white-care-bears-born-to-care-logo-t-shirt-2.jpg", 
    "image3": "images/white-care-bears-born-to-care-logo-t-shirt-3.jpg", 
    "image4": "images/white-care-bears-born-to-care-logo-t-shirt-4.jpg", 
    "image5": "images/white-care-bears-born-to-care-logo-t-shirt-5.jpg", 
    "price": 40, 
    "productDetails": "White Care Bears Born To Care Logo T-shirt", 
    "rating": 4
  }, 
  {
    "description": "Girls Block Heels", 
    "id": 22, 
    "image1": "images/stone-faux-snake-2-part-block-heels-1.jpg", 
    "image2": "images/stone-faux-snake-2-part-block-heels-2.jpg", 
    "image3": "images/stone-faux-snake-2-part-block-heels-3.jpg", 
    "image4": "images/stone-faux-snake-2-part-block-heels-4.jpg", 
    "image5": "images/stone-faux-snake-2-part-block-heels-5.jpg", 
    "price": 40, 
    "productDetails": "Stone faux snake-2-part block heels", 
    "rating": 3
  }, 
  {
    "description": "Girls Casual Jeans", 
    "id": 24, 
    "image1": "images/blue-waist-enhance-tori-mom-jeans-1.jpg", 
    "image2": "images/blue-waist-enhance-tori-mom-jeans-2.jpg", 
    "image3": "images/blue-waist-enhance-tori-mom-jeans-3.jpg", 
    "image4": "images/blue-waist-enhance-tori-mom-jeans-4.jpg", 
    "image5": "images/blue-waist-enhance-tori-mom-jeans-5.jpg", 
    "price": 50, 
    "productDetails": "Blue Waist Enhance Tori Mom Jeans", 
    "rating": 5
  }, 
  {
    "description": "Black Fossils Wrist Watch", 
    "id": 6, 
    "image1": "images/black-watch-1.jpg", 
    "image2": "images/black-watch-1.jpg", 
    "image3": "images/black-watch-2.jpg", 
    "image4": "images/black-watch-3.jpg", 
    "image5": "images/black-watch-4.jpg", 
    "price": 80, 
    "productDetails": "Black Fossils Wrist Watch, has a round dial, 2038-BL Day and Date Analog watch - For Men", 
    "rating": 4
  }
]

@Injectable({
  providedIn: 'root'
})
export class AddproductsdataService {

  constructor(private http: HttpClient) { }

  addProductsData(data) {
    return of({})
    // return this.http.post(Constants.URL+'submit', data);
  }

  getProductsData() {
    let res = JSON.parse(JSON.stringify(response))
    // return this.http.get(Constants.URL+'getproductdata').pipe(map(res => {
      for(let i=0;i<res['length'];i++) {
        res[i].image1 = './../../../../assets/' + res[i].image1
        res[i].image2 = './../../../../assets/' + res[i].image2
  
        res[i].image3 = './../../../../assets/' + res[i].image3
  
        res[i].image4 = './../../../../assets/' + res[i].image4
  
        res[i].image5 = './../../../../assets/' + res[i].image5
  
      }
      return of(res);
     
  }
  getfilterData(query) {
    // return this.http.get(Constants.URL+'search/'+query).pipe(map(res => {
    let res = response

      for(let i=0;i<res['length'];i++) {
        res[i].image1 = './../../../../assets/' + res[i].image1
        res[i].image2 = './../../../../assets/' + res[i].image2
  
        res[i].image3 = './../../../../assets/' + res[i].image3
  
        res[i].image4 = './../../../../assets/' + res[i].image4
  
        res[i].image5 = './../../../../assets/' + res[i].image5
  
      }
      return of(res);
    //  }))
     
  }
  deleteProductsData(id) {
    return of({})

    // return this.http.delete(`${Constants.URL}removeData/${id}`)
  }
}
