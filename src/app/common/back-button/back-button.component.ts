import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
    selector: 'back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
    providers: [Vibration]

})
export class backButtonComponent {

    constructor(private navController: NavController,private vibration: Vibration) { }


    back() {
        this.vibration.vibrate(1000);
        this.navController.back();

    }
}
