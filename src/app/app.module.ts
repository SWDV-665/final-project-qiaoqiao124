import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
import { Keyboard } from '@ionic-native/keyboard';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ChatsPage } from '../pages/chats/chats';
import { SettingsPage } from '../pages/settings/settings';
import { BlogsPage } from '../pages/blogs/blogs';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChatMessagesPage } from '../pages/chatMessages/chatMessages';
import { BlogEditingPage } from '../pages/blog-editing/blog-editing';
import { BlogDetailPage } from '../pages/blog-detail/blog-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroceriesServiceProvider } from '../providers/groceries-service/groceries-service';
import { InputDialogProvider } from '../providers/input-dialog/input-dialog';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AccountServiceProvider } from '../providers/account-service/account-service';
import { PipesModule } from '../pipes/pipes.module';
import { ChatsItemComponent } from '../components/chats-item/chats-item';

import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { EmailValidationService } from '../providers/auth-service/email-validation';
import { BlogServiceProvider } from '../providers/blog-service/blog-service';
import { UploadServiceProvider } from '../providers/upload-service/upload-service';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';


@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    ChatMessagesPage,
    SettingsPage,
    BlogsPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    BlogEditingPage,
    BlogDetailPage,
    ChatsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true,
      backButtonIcon:'arrow-back'
    }),
    PipesModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    ChatMessagesPage,
    SettingsPage,
    BlogsPage,
    TabsPage, 
    LoginPage,
    RegisterPage,
    BlogEditingPage,
    BlogDetailPage,
    ChatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera, 
    GroceriesServiceProvider,
    InputDialogProvider,
    SocialSharing,
    AuthServiceProvider,
    AccountServiceProvider,
    IonicStorageModule,
    Keyboard,
    ToastServiceProvider,
    EmailValidationService,
    BlogServiceProvider,
    UploadServiceProvider,
    ChatServiceProvider,
  ]
})
export class AppModule {}
