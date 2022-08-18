import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { AccountServiceProvider } from '../../providers/account-service/account-service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { EmailValidationService } from '../../providers/auth-service/email-validation';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
  user:User;
  ischeck: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public accountService: AccountServiceProvider,
    public toastCtrl: ToastServiceProvider,
    public emailValidCtrl: EmailValidationService,
    public auth: AuthServiceProvider) {
      this.user= new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  emailInputValid(email) {
    this.emailValidCtrl.formatValid(email);
  }

  hasWhiteSpace(text) {
    return text.indexOf(' ') >= 0;
  }

  textInputValid(text:String) {
    if (!text || this.hasWhiteSpace(text)) {
      return false;
    }
    return true;
  }

  twoPasswordMatch(password, password2) {
    return password === password2;
  }


  registerUser() {
    if (!this.emailValidCtrl.formatValid(this.user.email)) {
      return;
    };

    if (!this.textInputValid(this.user.username)) {
      this.toastCtrl.showToast('Username cannot be empty or include space!')
      return;
    }

    if (!this.textInputValid(this.user.password)) {
      this.toastCtrl.showToast('Password cannot be empty or include space!');
      return;
    }

    if (!this.twoPasswordMatch(this.user.password, this.user.password2)) {
      this.toastCtrl.showToast('Passwords do not match!');
      return;
    }
    
    // console.log(this.user);
    
    this.auth.registerUser(this.user).subscribe(
      res => {
        console.log(res);
        this.auth.loginPage();
      },
      err => {
        console.log(err)
      }
    );
    // this.accountService.addUser(this.user);
    // this.auth.login();
  }

}
