import { NgModule } from '@angular/core';
import { ChatsItemComponent } from './chats-item/chats-item';
import { BlogItemComponent } from './blog-item/blog-item';
@NgModule({
	declarations: [ChatsItemComponent,
    BlogItemComponent],
	imports: [],
	exports: [ChatsItemComponent,
    BlogItemComponent]
})
export class ComponentsModule {}
