import { Component } from '@angular/core';
import { BlogItem } from '../../models/BlogItem';

/**
 * Generated class for the BlogItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'blog-item',
  templateUrl: 'blog-item.html'
})
export class BlogItemComponent {

  blog: BlogItem;

  constructor() {
    console.log('Hello BlogItemComponent Component');
    
  }

}
