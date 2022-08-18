import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User'; 
import { ToastServiceProvider } from '../toast-service/toast-service';

/*
  Generated class for the AccountServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountServiceProvider {

  // baseURL = "https://pet-lovers-server.herokuapp.com";
  

  // users = [];
  // dataModified: Observable<boolean>;
  // private dataModifySubject: Subject<boolean>;

  // constructor(public http: HttpClient, public toastCtrl: ToastServiceProvider) {
  //   console.log('Hello AccountServiceProvider Provider');

  //   this.dataModifySubject = new Subject<boolean>();
  //   this.dataModified = this.dataModifySubject.asObservable();
  // }



  // addUser(user: User){
  //   console.log(user);
    
  //   this.http.post(this.baseURL + "/api/users", user).subscribe(res => {
  //     this.users = <any>res;
  //     this.dataModifySubject.next(true);
  //     console.log(user, "new user created!");
      
  //     }, (err) => {
  //       console.log(err);
  //       this.toastCtrl.showToast('Email already exists!')
    
  //   });
    
    
    
  // }

}
