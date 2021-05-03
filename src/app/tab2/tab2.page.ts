import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [NativeStorage]

})
export class Tab2Page {

  base64OrImage="https://images.pexels.com/photos/907267/pexels-photo-907267.jpeg?auto=compress&cs=tinysrgb&h=350";

  constructor(private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('myitem')
      .then(
        data => {
          this.base64OrImage = data ? data : this.base64OrImage
          console.log(data)
        },
        error => console.error(error)
      );
  }

  
  addItem(image) {
    this.base64OrImage = image;
  }

}
