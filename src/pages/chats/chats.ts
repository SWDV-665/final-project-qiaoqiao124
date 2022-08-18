import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatMessagesPage } from '../chatMessages/chatMessages';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  // mock 数据
  chats = [{
    id: '001',
    imageUrl: 'assets/img/avatar/marty-avatar.png',
    title: '房东',
    lastMessage: '这个月的房租怎么还没有交?',
    timestamp: new Date()
  },
    {
      id: '002',
      imageUrl: 'assets/img/avatar/ian-avatar.png',
      title: '房产中介',
      lastMessage: '上次给你推荐的房子，你看了没有?我这边有新的房源，你要不要过来看看？',
      timestamp: new Date()
    },
    {
      id: '003',
      imageUrl: 'assets/img/avatar/sarah-avatar.jpg',
      title: '公司前台',
      lastMessage: '你有新的快递，请注意查收',
      timestamp: new Date()
    }];


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

  viewMessages(chat) {
    this.navCtrl.push(ChatMessagesPage, {chatId: chat.id});
  }

}
