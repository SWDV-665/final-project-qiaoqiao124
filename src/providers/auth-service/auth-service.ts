import { NavController, AlertController, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { LoginPage } from '../../pages/login/login';

// import { AccountServiceProvider } from '../account-service/account-service';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
  //baseURL = "http://localhost:8080";
  baseURL = "https://pet-lovers-server.herokuapp.com";

  
  constructor(public http: HttpClient,
    public appCtrl: App,
    public alertCtrl: AlertController,
    private location: LocationStrategy) {
    console.log('Hello AuthServiceProvider Provider');
  }
  // serverUrl = this.accountService.baseURL;
  

  // go to the login page
  loginPage() {
    // this.nav.setRoot(LoginPage);
    // this.nav.popToRoot();
    
    this.appCtrl.getRootNav().push(LoginPage).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'No entry!',
        subTitle: 'You shall not pass',
        buttons: ['Okay']
      });
      alert.present();
    });
    // this.isLoggedIn = true;
  }
 
  // go to the login page
  logout() {
    this.loginPage();
  }

  loginAuth(data) {
    console.log(data);
    return this.http.post<any>(this.baseURL + "/api/users/login", data)
    // this.http.post(this.serverUrl + "/api/login", data).subscribe(res => {
    //   this.users = <any>res;
    //   this.dataModifySubject.next(true);
    //   console.log(user, "new user created!");
      
    //   }, (err) => {
    //     console.log(err);
    //     this.toastCtrl.showToast('Email already exists!')
    
    // });

  }

  registerUser(data) {
    console.log(data);
    return this.http.post<any>(this.baseURL + "/api/users/register", data)
    // this.http.post(this.serverUrl + "/api/login", data).subscribe(res => {
    //   this.users = <any>res;
    //   this.dataModifySubject.next(true);
    //   console.log(user, "new user created!");
      
    //   }, (err) => {
    //     console.log(err);
    //     this.toastCtrl.showToast('Email already exists!')
    
    // });

  }
 
  
}

