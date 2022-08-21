import { Component, Input, OnInit } from '@angular/core';
import { ChatsItem } from '../../models/ChatsItem';

/**
 * Generated class for the ChatsItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chats-item',
  templateUrl: 'chats-item.html'
})
export class ChatsItemComponent implements OnInit {

  @Input() chatsItem: ChatsItem;

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('Hello ChatsItemComponent Component');
    console.log(this.chatsItem);
  }

}
