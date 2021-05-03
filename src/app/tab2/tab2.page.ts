import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [NativeStorage]

})
export class Tab2Page {

  base64OrImage;

  constructor(private nativeStorage: NativeStorage,private sanitizer: DomSanitizer) {
    this.base64OrImage = this.sanitizer.bypassSecurityTrustStyle("url(https://images.pexels.com/photos/907267/pexels-photo-907267.jpeg?auto=compress&cs=tinysrgb&h=350)")
    
    this.nativeStorage.getItem('myitem')
      .then(
        data => {
          this.base64OrImage = this.sanitizer.bypassSecurityTrustStyle(data?.property ? data?.property : this.base64OrImage)
          
          console.log(data)
        },
        error => console.error(error)
      );
  }

  
  addItem(image) {
    this.base64OrImage = image;
  }

}
