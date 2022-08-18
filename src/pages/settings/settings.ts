import { Component } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public appCtrl: App, 
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public alertCtrl: AlertController) {

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
