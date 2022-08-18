import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogItem } from '../../models/BlogItem';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { BlogServiceProvider } from '../../providers/blog-service/blog-service';
import { User } from '../../models/User';

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
    public blogService: BlogServiceProvider) {
      this.blogItem= new BlogItem();
      this.user = navParams.get('user');;
      console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogEditingPage', this.blogItem);
  }

  submitBlog() {
    if (!this.blogItem.title && !this.blogItem.content) {
      this.toastCtrl.showToast('No content in your blog!')
      return;
    }
    
    
    this.blogService.postBlog(this.blogItem, this.user).subscribe(
      res => {
        console.log(res);
        
      },
      err => {
        console.log(err);
        console.log(this.blogItem, this.user);
      }
    );
    // this.blogService.postBlog(this.blogItem, this.user);
  }

}
