import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  base64OrImage="https://images.pexels.com/photos/907267/pexels-photo-907267.jpeg?auto=compress&cs=tinysrgb&h=350";

  constructor() { 
    let oldData = (JSON.parse(localStorage.getItem('base64OrImage')));
    this.base64OrImage = oldData ? oldData:this.base64OrImage
  }
 
  
  addItem(image) {
    this.base64OrImage = image;
  }

}
