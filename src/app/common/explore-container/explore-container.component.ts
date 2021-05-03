import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  providers: [Camera,NativeStorage]
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Output() image = new EventEmitter<string>();
  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public camera: Camera,public platform:Platform,private nativeStorage: NativeStorage) { }


  ngOnInit() {}

  openCamera() {
  //   this.platform.ready().then(() => {
  //     if(this.platform.is('cordova')){
  //         this.camera.getPicture(this.options).then((imageData) => {
  //             // imageData is either a base64 encoded string or a file URI
  //             // If it's base64 (DATA_URL):
              
  //         }, (err) => {
  //             // Handle error
  //         });
  //     }
  // })
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64OrImage = 'data:image/jpeg;base64,' + imageData;
      this.image.emit(base64OrImage);

      this.nativeStorage.setItem('myitem', { property: JSON.stringify(base64OrImage) })
        .then(
          () => {
            this.image.emit(base64OrImage);
            console.log('Stored item!')
          },
          error => console.error('Error storing item', error)
        );
     }, (err) => {
      // Handle error
     });
   }

}
