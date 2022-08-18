import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogProvider } from '../../providers/input-dialog/input-dialog';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BlogEditingPage } from '../blog-editing/blog-editing'; 
import { NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { BlogServiceProvider } from '../../providers/blog-service/blog-service';
import { BlogItem } from '../../models/BlogItem';

@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html'
})

export class BlogsPage{
  title = "Blogs";
  // blogs = [
  //   {
  //     'userID': '1',
  //     'username': 'Marty McFly',
  //     'user-image': 'img/advance-card-bttf.png',
  //     'time': 'November 5, 1955',
  //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
  //     'likes': '4',
  //     'comments': '12'
  //   },
  //   {
  //     'userID': '1',
  //     'username': 'Marty McFly',
  //     'user-image': 'img/advance-card-bttf.png',
  //     'time': 'November 5, 1955',
  //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
  //     'likes': '4',
  //     'comments': '12'
  //   },
  //   {
  //     'userID': '1',
  //     'username': 'Marty McFly',
  //     'user-image': 'img/advance-card-bttf.png',
  //     'time': 'November 5, 1955',
  //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
  //     'likes': '4',
  //     'comments': '12'
  //   },
  //   {
  //     'userID': '1',
  //     'username': 'Marty McFly',
  //     'user-image': 'img/advance-card-bttf.png',
  //     'time': 'November 5, 1955',
  //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
  //     'likes': '4',
  //     'comments': '12'
  //   }        
  // ];
  blogs = [];
  user: User;
  errorMessage : string;
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController, 
    public dataService: GroceriesServiceProvider, 
    public inputDialogService: InputDialogProvider, 

    public navParam: NavParams,
    public socialSharing: SocialSharing,
    public blogService: BlogServiceProvider) {
      this.user = this.navParam.data;
      // console.log(this.user);
      dataService.dataModified.subscribe((dataModified: boolean) => {
        // this.loadItems();
      });
  }

  ionViewDidLoad() {
    this.loadBlogs();
  }

  loadBlogs() {
    // this.blogs = this.blogService.getBlogs().subscribe(data => this.blogs = data);
    // this.dataService.getItems().subscribe(
    //   items => this.items = items,
    //   error => this.errorMessage = <any>error
    // );
    this.blogService.getBlogs().subscribe(
      items => {
        this.blogs = items;
        console.log(this.blogs);
      },
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

  addNewBlog() {
    this.navCtrl.push(BlogEditingPage, {
      user:this.user
    });
  };
}

