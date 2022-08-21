import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatMessagesPage } from '../chatMessages/chatMessages';
import { ChatsItemComponent } from '../../components/chats-item/chats-item';
import { User } from '../../models/User';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  unread: Number;
  user: User;
  errorMessage : String;
  @Output() unreadChanged = new EventEmitter();
 
  chats = [];
  
  constructor(public navCtrl: NavController,
    public navParam: NavParams,
    public chatService: ChatServiceProvider) {
      this.user = this.navParam.data;
      console.log(this.user);

  }

  ionViewWillEnter () {
    
    this.getRecentChats();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
    
  }

  getRecentChats() {
    this.unread = 0;
    this.chatService.allChatsChannel(this.user).subscribe(
      chats => {
      
        this.chats = this.sortRecentChats(chats);
        console.log(this.chats);
        this.unread = this.getNumOfUnreads();
   
      },
      error => this.errorMessage = <any>error
    );
  }

  getNumOfUnreads() {
    var unread = 0
    for (var chat of this.chats) {
      unread += chat["unread"];
      console.log(unread);
    }
    if (unread !== this.unread) {
      this.unreadChanged.emit(unread);
    }
    
    return unread;
  }

  sortRecentChats(chats) {
    return chats.sort((a, b) => {
      return <any>new Date(b.dateUpdated) - <any>new Date(a.dateUpdated);
    });
  }

  viewMessages(chat) {
    console.log(chat);
    this.navCtrl.push(ChatMessagesPage, {
      friendID: chat.friendID,
      friendName: chat.friendName,
      user: this.user
    });
  }

}
