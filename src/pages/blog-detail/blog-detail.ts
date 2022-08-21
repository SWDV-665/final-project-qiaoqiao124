import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogItem } from '../../models/BlogItem';
import { User } from '../../models/User';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { ChatMessagesPage } from '../chatMessages/chatMessages';

/**
 * Generated class for the BlogDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {
  blogItem: BlogItem;
  user: User;
  authorID: String;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastServiceProvider,
    public socialSharing: SocialSharing) {
    this.user = navParams.get('viewer');
    this.blogItem = navParams.get('blog');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogDetailPage');
  }

  startChat(authorID, authorName){
    console.log(authorID, this.user);
    this.navCtrl.push(ChatMessagesPage, {
      friendID: authorID,
      friendName: authorName,
      user: this.user
    })
  }

  shareBlog() {
    this.toastCtrl.showToast("Sharing the blog..");
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
      console.log("Shared successfully");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error while sharing", error);
    });
  };

}
