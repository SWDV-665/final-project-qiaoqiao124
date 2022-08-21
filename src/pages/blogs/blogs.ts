import { Component, OnInit } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
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
import { BlogDetailPage } from '../blog-detail/blog-detail';
import { catchError, retry, map } from 'rxjs/operators';


@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html'
})

export class BlogsPage{
  
  // blogs = [
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
      this.navCtrl.popToRoot();
    
      this.loadBlogs();
      // console.log(this.user);
      // dataService.dataModified.subscribe((dataModified: boolean) => {
      //   // this.loadItems();
      // });
  }

  ionViewWillEnter () {
    this.user = this.navParam.data;
    this.navCtrl.popToRoot();
    
    this.loadBlogs();
  }

  ionViewDidLoad() {
    
    
  }

  loadBlogs() {
    // this.blogs = this.blogService.getBlogs().subscribe(data => this.blogs = data);
    // this.dataService.getItems().subscribe(
    //   items => this.items = items,
    //   error => this.errorMessage = <any>error
    // );
    this.blogService.getBlogs().subscribe(
      blogs => {
        
        this.blogs = this.sortBlogs(blogs);
        console.log(this.blogs);
      },
      error => this.errorMessage = <any>error
    );
  }

  sortBlogs(blogs) {
    return blogs.sort((a, b) => {
      return <any>new Date(b.dateUpdated) - <any>new Date(a.dateUpdated);
    });
  }

  viewTheBlog(blog) {
    this.navCtrl.push(BlogDetailPage, {
      blog:blog,
      viewer: this.user
    });
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

  

  addNewBlog() {
    this.navCtrl.push(BlogEditingPage, {
      user:this.user
    });
  };
}

