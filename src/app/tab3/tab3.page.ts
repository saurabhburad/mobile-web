import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [ScreenOrientation]

})
export class Tab3Page {

  constructor(private screenOrientation: ScreenOrientation) {
    console.log(this.screenOrientation.type);
    this.screenOrientation.onChange().subscribe(
      () => {
          console.log("screenOrientation change")
      });
   
   }

   changeOrentation() {
    this.screenOrientation.unlock()
   }
   setOrentation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
   }
}
