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
