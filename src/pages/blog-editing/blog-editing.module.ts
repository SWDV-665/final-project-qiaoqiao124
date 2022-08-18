import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogEditingPage } from './blog-editing';

@NgModule({
  declarations: [
    BlogEditingPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogEditingPage),
  ],
})
export class BlogEditingPageModule {}
