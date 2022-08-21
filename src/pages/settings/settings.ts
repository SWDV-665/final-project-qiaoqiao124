import { Component } from '@angular/core';
import { NavController, AlertController, App, NavParams } from 'ionic-angular';
import { User } from '../../models/User';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  user: User
  constructor(public appCtrl: App, 
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public alertCtrl: AlertController,
    public navParam: NavParams) {
      this.user = this.navParam.data;
  }

  logoutUser() {
    this.authService.logout();
    
    // this.navCtrl.setRoot(LoginPage);
    // this.navCtrl.popToRoot();
    // this.loginPage();
  }

  // loginPage() {
  //   this.authService.login();
  // }
  

}
