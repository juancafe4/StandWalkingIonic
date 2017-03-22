import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { DeviceMotion } from 'ionic-native';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  x2:number = null;
  x1:number = null;
  y2:number = null;
  y1:number = null;
  z2:number = null;
  z1:number = null;

  d:number = 0;
  constructor(public navCtrl: NavController, public platform: Platform, ) {
    platform.ready().then(() => {
      DeviceMotion.watchAcceleration().
        subscribe( acc => {
          if (this.x2 === null) {
            this.x2 = acc.x;
            this.y2 = acc.y;
            this.z2 = acc.z;

          } else if (this.x1 === null) {
            this.x1 = acc.x;
            this.y1 = acc.y;
            this.z1 = acc.z;
          } else if (this.x1 !== null && this.x2 !== null) {
             let sqrt1 = Math.sqrt( (this.x1 * this.x1) + (this.y1 * this.y1) + (this.z1 * this.z1));
             let sqrt2 = Math.sqrt( (this.x2 * this.x2) + (this.y2 * this.y2) + (this.z2 * this.z2));
             let sum = (this.x1 * this.x2) + (this.y1 * this.y2)  + (this.z1 * this.z2);

             this.d = sum / (sqrt1 * sqrt2); 
             this.x2 = null;
             this.x1 = null;
             this.y2 = null;
             this.y1 = null;
             this.z2 = null;
             this.z1 = null;
             
          }
        });  
    });
  }

}
