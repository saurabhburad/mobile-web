import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cloth-shopping-component',
  templateUrl: './app-header-cloth-shopping.component.html',
  styleUrls: ['./app-header-cloth-shopping.component.css']
})
export class AppHeaderClothShoppingComponent{

  constructor(private router: Router){}



openShoppingCartDetails(){
  this.router.navigate(['tabs/tab1/cart']);
}

}
