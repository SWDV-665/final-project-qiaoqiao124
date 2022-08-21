import { FormControl, FormBuilder } from '@angular/forms';
import * as _ from "lodash";
import { Component, ViewChild, EventEmitter, NgZone } from '@angular/core';
import {IonicPage, NavController, Content, NavParams, DateTime} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { User } from '../../models/User';
import { MessageItem } from '../../models/MessageItem';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';

/**
 * Generated class for the ChatMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chatMessages',
  templateUrl: 'chatMessages.html',
})
export class ChatMessagesPage {
  user: User;
  friendID: String;
  friendName: String;
  messageItem: MessageItem;
 
  messages = [];
  errorMessage : string;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ChatMessagesPage');
  // }


  // toUser = {
  //   _id: '534b8e5aaa5e7afc1b23e69b',
  //   pic: 'assets/img/avatar/ian-avatar.png',
  //   username: 'Venkman',
  // };

  // user = {
  //   _id: '534b8fb2aa5e7afc1b23e69c',
  //   pic: 'assets/img/avatar/marty-avatar.png',
  //   username: 'Marty',
  // };

  doneLoading = false;


  @ViewChild(Content) content: Content;
 

  public messageForm: any;
  chatBox: any;

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public formBuilder: FormBuilder,
              private keyboard: Keyboard,
              public chatService: ChatServiceProvider) {

                this.messageForm = formBuilder.group({
                  message: new FormControl('')
                });
                this.chatBox = '';
                window.addEventListener('native.keyboardshow', (e: any) => {
               
                  document.getElementById('maskc').style.bottom = '-' + (window.innerHeight - e.keyboardHeight - 120) + 'px';
                });
  }

  ionViewWillEnter () {
    
    this.user = this.navParams.get('user');
    this.friendID = this.navParams.get('friendID')
    this.friendName = this.navParams.get('friendName')
    console.log(this.user, this.friendName);
    this.showMessages();
    
  }

  ionViewDidLoad() {
    // let modelData: string = '用户名：' + this.navParams.get('chatId');
    // console.log(modelData);
    
  }

  showMessages() {
    this.chatService.getMessagesWithOneFriend(this.user, this.friendID).subscribe(
      messages => {
      
        this.messages = this.sortMessages(messages);
        for (var message of this.messages) {
          message.read = true;
        }

        console.log(this.messages);
        this.scrollToBottom();
      },
      error => this.errorMessage = <any>error
    );
    
  }

  sortMessages(messages) {
    return messages.sort((a, b) => {
      return <any>new Date(a.dateUpdated) - <any>new Date(b.dateUpdated);
    });
  }

  send(message) {
    if (message && message !== '') {
      var time = new Date();
      this.messageItem = new MessageItem();
      this.messageItem.content = message;
      this.messageItem.from = this.user;
      this.messageItem.time = time
      this.messageItem.to = this.friendID
      this.messageItem.toName = this.friendName
      console.log(this.friendName, this.messageItem.toName);
      this.chatService.sendMessage(this.messageItem).subscribe(
        res => {
          console.log(res);
          this.showMessages();
        },
        err => {
          console.log(err);
          // console.log(this.blogItem, this.user);
        }
      );
      
    
      this.scrollToBottom();

    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  viewProfile(message: string){
    console.log(message);
  }


}
