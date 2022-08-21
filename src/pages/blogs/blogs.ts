import { Component, OnInit } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  
  blogs = [];
  user: User;
  errorMessage : string;
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public alertCtrl: AlertController, 
    public navParam: NavParams,
    public socialSharing: SocialSharing,
    public blogService: BlogServiceProvider) {
      this.user = this.navParam.data;
      this.navCtrl.popToRoot();
    
      this.loadBlogs();
     
  }

  ionViewWillEnter () {
    this.user = this.navParam.data;
    this.navCtrl.popToRoot();
    
    this.loadBlogs();
  }

  ionViewDidLoad() {
    
  }

  loadBlogs() {
    
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


  addNewBlog() {
    this.navCtrl.push(BlogEditingPage, {
      user:this.user
    });
  };
}

