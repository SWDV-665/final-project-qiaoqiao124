import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastServiceProvider } from '../toast-service/toast-service';

@Injectable()
export class EmailValidationService {
    validFormat: boolean;

  constructor(public http: HttpClient,
    public toastCtrl: ToastServiceProvider) {
    console.log('Hello EmailValidationService Provider');
  }

  formatValid(email) {
    this.validFormat = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
    if (!this.validFormat) {
      email = '';
     
      this.toastCtrl.showToast('Please enter a valid email!');
      return false;
    }
    return true;
  }

}
