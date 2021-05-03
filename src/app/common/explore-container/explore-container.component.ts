import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  providers: [Camera]
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Output() image = new EventEmitter<string>();
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public camera: Camera,public platform:Platform) { }


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
              localStorage.setItem('base64OrImage', JSON.stringify(base64OrImage));
              this.image.emit(base64OrImage);
     }, (err) => {
      // Handle error
     });
   }

}
