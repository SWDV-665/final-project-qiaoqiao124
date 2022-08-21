import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogItem } from '../../models/BlogItem';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { BlogServiceProvider } from '../../providers/blog-service/blog-service';
import { User } from '../../models/User';
import { BlogsPage } from '../blogs/blogs';
import { UploadServiceProvider } from '../../providers/upload-service/upload-service';

/**
 * Generated class for the BlogEditingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog-editing',
  templateUrl: 'blog-editing.html',
})
export class BlogEditingPage {
  blogItem: BlogItem;
  user: User;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastServiceProvider,
    public blogService: BlogServiceProvider,
    public uploadService: UploadServiceProvider) {
      this.blogItem= new BlogItem();
      this.user = navParams.get('user');;
      console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogEditingPage', this.blogItem);
  }

  takePhoto() {
    this.uploadService.openCamera();  
  }

  uploadImages() {
    this.uploadService.openImgGallery();
  }

  submitBlog() {
    if (!this.blogItem.title && !this.blogItem.content) {
      this.toastCtrl.showToast('No content in your blog!')
      return;
    }
    
    this.blogService.postBlog(this.blogItem, this.user).subscribe(
      res => {
        console.log(res);
        this.navCtrl.push(BlogsPage, {
          user:this.user
        })
      },
      err => {
        console.log(err);
        console.log(this.blogItem, this.user);
      }
    );
    
  }

}
