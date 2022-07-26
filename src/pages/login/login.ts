import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ToastController } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { User } from '../../models/User';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public isRemember: boolean = false;
  public isShow: boolean = false;
  public loggedUser: User;

  constructor(public alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,
    public modalCtrl: ModalController,
    public toastService: ToastServiceProvider,
    public storage: IonicStorageModule) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.navCtrl.popToRoot();
  }

  loginUser(email: HTMLInputElement, password: HTMLInputElement) {
    if (email.value.length === 0){
      this.toastService.showToast("Please enter your email!");
      return false;
    }

    if (password.value.length === 0){
      this.toastService.showToast("Please enter password!");
      return false;
    }

    let data = {email: email.value, password: password.value, isRemember: this.isRemember};
    
    this.authService.loginAuth(data).subscribe(
      user => {
        this.loggedUser = user;
        console.log(this.loggedUser);
        this.tabsPage(user);
      },
      err => {
        console.log(err);
        this.toastService.showToast(err.error);
      }
    );
    
  }
 
  tabsPage(user: User) {
    this.navCtrl.push(TabsPage, {
      user: user
    }).catch(err => {
      console.log(err);
      
    });
  }
  
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  

}
