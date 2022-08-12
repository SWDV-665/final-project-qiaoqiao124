import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogProvider } from '../..//providers/input-dialog/input-dialog';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  title = "Groceries";
  items = [];
  errorMessage : string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogProvider, public socialSharing: SocialSharing) {
    dataService.dataModified.subscribe((dataModified: boolean) => {
      this.loadItems();
    });
  }

  ionViewDidLoad() {
    this.loadItems();
  }

  loadItems() {
    this.dataService.getItems().subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    );
  }

  removeItem(item, index) {
    let toast = this.toastCtrl.create({
      message: 'Removing ' + item.name + '...',
      duration: 1000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log(item.name + ' was removed' + ', ' + index);
    });
  
    toast.present();
    this.dataService.removeItem(index); 
  };

  editItem(item, index) {
    let toast = this.toastCtrl.create({
      message: 'Edit ' + item.name + '. index' + index,
      duration: 1000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log(item.name + ' is editing' + ', ' + index);
    });
  
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  };

  shareItem(item, index) {
    let toast = this.toastCtrl.create({
      message: 'Share ' + item.name + '. index' + index,
      duration: 1000,
      position: 'bottom'
    });

    toast.present();
    let message = "Grocery item - Name: " + item.name + "- Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
      console.log("Shared successfully");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error while sharing", error);
    });
  };

  addItem() {
    console.log('adding item');
    this.inputDialogService.showPrompt();
  };
}

