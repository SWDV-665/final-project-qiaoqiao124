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
 
  

  // go to the login page
  loginPage() {
    
    this.appCtrl.getRootNav().push(LoginPage).catch(err => {
      
      console.log(err);
    });
   
  }
 
  // go to the login page
  logout() {
    this.loginPage();
  }

  loginAuth(data) {
    console.log(data);
    return this.http.post<any>(this.baseURL + "/api/users/login", data)
   
  }

  registerUser(data) {
    console.log(data);
    return this.http.post<any>(this.baseURL + "/api/users/register", data)
    
  }
 
  
}

