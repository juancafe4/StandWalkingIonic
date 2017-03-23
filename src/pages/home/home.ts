import { Component } from '@angular/core';

import { NavController, Platform, AlertController } from 'ionic-angular';
// import { DeviceMotion } from 'ionic-native';
declare let WifiWizard:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // x2:number = null;
  // x1:number = null;
  // y2:number = null;
  // y1:number = null;
  // z2:number = null;
  // z1:number = null;

  // d:number = 0;
  // constants = []
  // avg:number = 0;
  dev:any = null;
  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
    


      //this.wifi = WifiWizard;
      // WifiWizard.getScanResults([]).subscribe(
      //   list => {
      //     console.log('List of SSDI', list);
      //   },
      //   err => {
      //     console.log('Error scanning')
      //   }
      // )
    
  }

  startScan() {
    WifiWizard.getScanResults((devs) => {
      console.log('Netowrk');
      
      // for (let dev of devs) {
      //   console.log(Object.keys(dev));
      // }
      let alert = this.alertCtrl.create({
        title: 'Device',
        subTitle: devs,
        buttons: ['Ok']
      });
      alert.present();
    }, err => {

    });
  }
}

 // DeviceMotion.watchAcceleration({frequency: 500}).
      //   subscribe( acc => {
      //     if (this.x2 === null) {
      //       this.x2 = acc.x;
      //       this.y2 = acc.y;
      //       this.z2 = acc.z;

      //     } else if (this.x1 === null) {
      //       this.x1 = acc.x;
      //       this.y1 = acc.y;
      //       this.z1 = acc.z;
      //     } else if (this.x1 !== null && this.x2 !== null) {
      //        let sqrt1 = Math.sqrt( (this.x1 * this.x1) + (this.y1 * this.y1) + (this.z1 * this.z1));
      //        let sqrt2 = Math.sqrt( (this.x2 * this.x2) + (this.y2 * this.y2) + (this.z2 * this.z2));
      //        let sum = (this.x1 * this.x2) + (this.y1 * this.y2)  + (this.z1 * this.z2);

      //        this.d = sum / (sqrt1 * sqrt2); 
      //        this.x2 = null;
      //        this.x1 = null;
      //        this.y2 = null;
      //        this.y1 = null;
      //        this.z2 = null;
      //        this.z1 = null;
             
      //        if (this.constants.length >= 10) {
      //           let sum = 0;

      //           for (let i = 10; i > 0; i--) {
      //             sum += i * this.constants[i - 1];
      //           }

      //           this.avg = sum / 55
      //           this.constants = [];
      //        } else {
      //          this.constants.push(this.d);
      //        }
      //     }
      //   });  
