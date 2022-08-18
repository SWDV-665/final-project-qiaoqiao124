import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ChatsPage } from '../chats/chats';
import { SettingsPage } from '../settings/settings';
import { BlogsPage } from '../blogs/blogs';
import { User } from '../../models/User';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  user: User;
  
  constructor(public navParams: NavParams) {
    this.user = navParams.get('user');;
    console.log(this.user);
  }

  tab1Root = BlogsPage;
  tab2Root = ChatsPage;
  tab3Root = SettingsPage;
}
