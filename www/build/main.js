webpackJsonp([4],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_messageItem__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chat_service_chat_service__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatMessagesPage = /** @class */ (function () {
    function ChatMessagesPage(navParams, navCtrl, formBuilder, keyboard, chatService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.keyboard = keyboard;
        this.chatService = chatService;
        this.messages = [];
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
        this.doneLoading = false;
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]('')
        });
        this.chatBox = '';
        window.addEventListener('native.keyboardshow', function (e) {
            document.getElementById('maskc').style.bottom = '-' + (window.innerHeight - e.keyboardHeight - 120) + 'px';
        });
    }
    ChatMessagesPage.prototype.ionViewWillEnter = function () {
        this.user = this.navParams.get('user');
        this.friendID = this.navParams.get('friendID');
        this.friendName = this.navParams.get('friendName');
        console.log(this.user, this.friendName);
        this.showMessages();
    };
    ChatMessagesPage.prototype.ionViewDidLoad = function () {
        // let modelData: string = '用户名：' + this.navParams.get('chatId');
        // console.log(modelData);
    };
    ChatMessagesPage.prototype.showMessages = function () {
        var _this = this;
        this.chatService.getMessagesWithOneFriend(this.user, this.friendID).subscribe(function (messages) {
            _this.messages = _this.sortMessages(messages);
            for (var _i = 0, _a = _this.messages; _i < _a.length; _i++) {
                var message = _a[_i];
                message.read = true;
            }
            console.log(_this.messages);
            _this.scrollToBottom();
        }, function (error) { return _this.errorMessage = error; });
    };
    ChatMessagesPage.prototype.sortMessages = function (messages) {
        return messages.sort(function (a, b) {
            return new Date(a.dateUpdated) - new Date(b.dateUpdated);
        });
    };
    ChatMessagesPage.prototype.send = function (message) {
        var _this = this;
        if (message && message !== '') {
            var time = new Date();
            this.messageItem = new __WEBPACK_IMPORTED_MODULE_4__models_messageItem__["a" /* MessageItem */]();
            this.messageItem.content = message;
            this.messageItem.from = this.user;
            this.messageItem.time = time;
            this.messageItem.to = this.friendID;
            this.messageItem.toName = this.friendName;
            console.log(this.friendName, this.messageItem.toName);
            this.chatService.sendMessage(this.messageItem).subscribe(function (res) {
                console.log(res);
                _this.showMessages();
            }, function (err) {
                console.log(err);
                // console.log(this.blogItem, this.user);
            });
            this.scrollToBottom();
        }
        this.chatBox = '';
    };
    ChatMessagesPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    ChatMessagesPage.prototype.viewProfile = function (message) {
        console.log(message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], ChatMessagesPage.prototype, "content", void 0);
    ChatMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-chatMessages',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chatMessages/chatMessages.html"*/'<!--\n  Generated template for the ChatMessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Chat with {{friendName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngFor="let message of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n\n    <div *ngIf="user._id !== message.from">\n      <img (click)="viewProfile(message)" class="profile-pic left" [src]=""/>\n     \n      <div class="chat-bubble left slide-left">\n        <div class="message" [innerHTML]="message.content" autolinker> </div>\n        <div class="message-detail">\n          <!-- <span (click)="viewProfile(message)" class="bold">{{message.username}}</span> -->\n          <span>{{message.dateUpdated | moment:"ago" | lowercase}}</span>\n        </div>\n      </div>\n    </div>\n\n    \n    <div *ngIf="user._id === message.from">\n      <img (click)="viewProfile(message)" class="profile-pic right" [src]=""/>\n      <div class="chat-bubble right slide-right">\n        <div class="message" [innerHTML]="message.content" autolinker></div>\n        <div class="message-detail">\n          <!-- <span (click)="viewProfile(message)" class="bold">{{user.username}}</span>, -->\n          <span>{{message.dateUpdated | moment:"ago" | lowercase}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="cf"></div>\n  </div>\n\n  <!-- <ion-list no-lines>\n    <ion-item *ngFor="let msg of messages">\n      <chat-bubble [chatMessage]="msg"></chat-bubble>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>\n\n\n<ion-footer>\n  <form [formGroup]="messageForm" (submit)="send(chatBox)" novalidate>\n    <ion-item>\n      <ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send  a message..."></ion-input>\n      <button ion-button clear (click)="send(chatBox)" item-end><ion-icon class="footer-btn" name="send"></ion-icon></button>\n    </ion-item>\n  </form>\n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chatMessages/chatMessages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], ChatMessagesPage);
    return ChatMessagesPage;
}());

//# sourceMappingURL=chatMessages.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_input_dialog__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_editing_blog_editing__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_blog_service_blog_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_detail_blog_detail__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BlogsPage = /** @class */ (function () {
    function BlogsPage(navCtrl, toastCtrl, alertCtrl, dataService, inputDialogService, navParam, socialSharing, blogService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.navParam = navParam;
        this.socialSharing = socialSharing;
        this.blogService = blogService;
        // blogs = [
        //   {
        //     'userID': '1',
        //     'username': 'Marty McFly',
        //     'user-image': 'img/advance-card-bttf.png',
        //     'time': 'November 5, 1955',
        //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        //     'likes': '4',
        //     'comments': '12'
        //   }   
        // ];
        this.blogs = [];
        this.user = this.navParam.data;
        this.navCtrl.popToRoot();
        this.loadBlogs();
        // console.log(this.user);
        // dataService.dataModified.subscribe((dataModified: boolean) => {
        //   // this.loadItems();
        // });
    }
    BlogsPage.prototype.ionViewWillEnter = function () {
        this.user = this.navParam.data;
        this.navCtrl.popToRoot();
        this.loadBlogs();
    };
    BlogsPage.prototype.ionViewDidLoad = function () {
    };
    BlogsPage.prototype.loadBlogs = function () {
        var _this = this;
        // this.blogs = this.blogService.getBlogs().subscribe(data => this.blogs = data);
        // this.dataService.getItems().subscribe(
        //   items => this.items = items,
        //   error => this.errorMessage = <any>error
        // );
        this.blogService.getBlogs().subscribe(function (blogs) {
            _this.blogs = _this.sortBlogs(blogs);
            console.log(_this.blogs);
        }, function (error) { return _this.errorMessage = error; });
    };
    BlogsPage.prototype.sortBlogs = function (blogs) {
        return blogs.sort(function (a, b) {
            return new Date(b.dateUpdated) - new Date(a.dateUpdated);
        });
    };
    BlogsPage.prototype.viewTheBlog = function (blog) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__blog_detail_blog_detail__["a" /* BlogDetailPage */], {
            blog: blog,
            viewer: this.user
        });
    };
    BlogsPage.prototype.removeItem = function (item, index) {
        var toast = this.toastCtrl.create({
            message: 'Removing ' + item.name + '...',
            duration: 1000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log(item.name + ' was removed' + ', ' + index);
        });
        toast.present();
        this.dataService.removeItem(index);
    };
    ;
    BlogsPage.prototype.editItem = function (item, index) {
        var toast = this.toastCtrl.create({
            message: 'Edit ' + item.name + '. index' + index,
            duration: 1000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log(item.name + ' is editing' + ', ' + index);
        });
        toast.present();
        this.inputDialogService.showPrompt(item, index);
    };
    ;
    BlogsPage.prototype.addNewBlog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__blog_editing_blog_editing__["a" /* BlogEditingPage */], {
            user: this.user
        });
    };
    ;
    BlogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blogs',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blogs/blogs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Hello, {{user.username}}!</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <h3 text-center *ngIf = "items.length === 0">\n    No item available on the list.\n  </h3>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items; let i = index">\n      <ion-item>\n        <h1>{{item.name}}</h1>\n        <p>{{item.quantity}}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button expandable (click)="removeItem(item, item._id)" color = "secondary">\n          <ion-icon name="trash"></ion-icon>\n          Done\n        </button>\n        <button ion-button expandable (click)="editItem(item, item._id)" color = "primary">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n        <button ion-button expandable (click)="shareItem(item, item._id)" color = "light">\n          <ion-icon name="share"></ion-icon>\n          Share\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> -->\n  \n  <ion-card *ngFor="let blog of blogs" (click)="viewTheBlog(blog)" style="height: 35vh;">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="">\n      </ion-avatar>\n      <h2>{{blog.title}}</h2>\n      <p>Author: {{blog.authorName}}</p>\n      <p>{{blog.dateUpdated}}</p>\n      \n      \n    </ion-item>\n  \n    <img src="img/advance-card-bttf.png">\n  \n    <ion-card-content >\n      <p>{{blog.content}}</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{blog.likes}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{blog.comments}} Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-fab right bottom>\n      <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab> -->\n  \n  </ion-card>\n\n\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="addNewBlog(item)">\n      <ion-icon name="add">\n      </ion-icon>\n    </button>\n  </ion-fab>\n  \n  \n\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blogs/blogs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_input_dialog__["a" /* InputDialogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_6__providers_blog_service_blog_service__["a" /* BlogServiceProvider */]])
    ], BlogsPage);
    return BlogsPage;
}());

//# sourceMappingURL=blogs.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceriesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GroceriesServiceProvider = /** @class */ (function () {
    function GroceriesServiceProvider(http) {
        this.http = http;
        // baseURL = "http://localhost:8080";
        this.baseURL = "https://pet-lovers-server.herokuapp.com";
        this.items = [];
        console.log('Hello GroceriesServiceProvider Provider');
        this.dataModifySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.dataModified = this.dataModifySubject.asObservable();
    }
    GroceriesServiceProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    GroceriesServiceProvider.prototype.getItems = function () {
        console.log('Hello getItems');
        return this.http.get(this.baseURL + "/api/groceries").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    GroceriesServiceProvider.prototype.removeItem = function (index) {
        var _this = this;
        this.http.delete(this.baseURL + "/api/groceries/" + index).subscribe(function (res) {
            _this.items = res;
            _this.dataModifySubject.next(true);
        });
    };
    GroceriesServiceProvider.prototype.addItem = function (data) {
        var _this = this;
        this.http.post(this.baseURL + "/api/groceries", data).subscribe(function (res) {
            _this.items = res;
            _this.dataModifySubject.next(true);
        });
    };
    GroceriesServiceProvider.prototype.editItem = function (item, index) {
        var _this = this;
        console.info(index);
        this.http.put(this.baseURL + "/api/groceries/" + index, item).subscribe(function (res) {
            _this.items = res;
            _this.dataModifySubject.next(true);
        });
    };
    GroceriesServiceProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    GroceriesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GroceriesServiceProvider);
    return GroceriesServiceProvider;
}());

//# sourceMappingURL=groceries-service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatMessages_chatMessages__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BlogDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogDetailPage = /** @class */ (function () {
    function BlogDetailPage(navCtrl, navParams, toastCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.user = navParams.get('viewer');
        this.blogItem = navParams.get('blog');
    }
    BlogDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogDetailPage');
    };
    BlogDetailPage.prototype.startChat = function (authorID, authorName) {
        console.log(authorID, this.user);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatMessages_chatMessages__["a" /* ChatMessagesPage */], {
            friendID: authorID,
            friendName: authorName,
            user: this.user
        });
    };
    BlogDetailPage.prototype.shareBlog = function () {
        this.toastCtrl.showToast("Sharing the blog..");
        // Check if sharing via email is supported
        this.socialSharing.canShareViaEmail().then(function () {
            // Sharing via email is possible
            console.log("Shared successfully");
        }).catch(function (error) {
            // Sharing via email is not possible
            console.error("Error while sharing", error);
        });
    };
    ;
    BlogDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-detail',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-detail/blog-detail.html"*/'<!--\n  Generated template for the BlogDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Hello, {{user.username}}!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2>{{blogItem.title}}</h2>\n      <p>Author: {{blogItem.authorName}}</p>\n      <p>Date updated: {{blogItem.dateUpdated}}</p>\n    </ion-item>\n  \n    <img src="img/advance-card-bttf.png">\n  \n    <ion-card-content>\n      <p>{{blogItem.content}}\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{blogItem.likes}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{blogItem.comments}} Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  <ion-fab right top>\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="shareBlog()"><ion-icon name="md-share"></ion-icon></button>\n      <button ion-fab (click)="startChat(blogItem.authorID, blogItem.authorName)"><ion-icon name="chatbubbles"></ion-icon></button>\n      \n    </ion-fab-list>\n  \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-detail/blog-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], BlogDetailPage);
    return BlogDetailPage;
}());

//# sourceMappingURL=blog-detail.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEditingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BlogItem__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blog_service_blog_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blogs_blogs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_upload_service_upload_service__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BlogEditingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogEditingPage = /** @class */ (function () {
    function BlogEditingPage(navCtrl, navParams, toastCtrl, blogService, uploadService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.blogService = blogService;
        this.uploadService = uploadService;
        this.blogItem = new __WEBPACK_IMPORTED_MODULE_2__models_BlogItem__["a" /* BlogItem */]();
        this.user = navParams.get('user');
        ;
        console.log(this.user);
    }
    BlogEditingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogEditingPage', this.blogItem);
    };
    BlogEditingPage.prototype.takePhoto = function () {
        this.uploadService.openCamera();
    };
    BlogEditingPage.prototype.uploadImages = function () {
        this.uploadService.openImgGallery();
    };
    BlogEditingPage.prototype.submitBlog = function () {
        var _this = this;
        if (!this.blogItem.title && !this.blogItem.content) {
            this.toastCtrl.showToast('No content in your blog!');
            return;
        }
        this.blogService.postBlog(this.blogItem, this.user).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__blogs_blogs__["a" /* BlogsPage */], {
                user: _this.user
            });
        }, function (err) {
            console.log(err);
            console.log(_this.blogItem, _this.user);
        });
    };
    BlogEditingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-editing',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-editing/blog-editing.html"*/'<!--\n  Generated template for the BlogEditingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>New Blog</ion-title>\n  </ion-navbar>\n  <ion-fab right top>\n    <button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="down">\n      <button ion-fab (click)="takePhoto()"><ion-icon name="camera"></ion-icon></button>\n      <button ion-fab (click)="uploadImages()"><ion-icon name="images"></ion-icon></button>\n      \n    </ion-fab-list>\n  </ion-fab>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="submitBlog()">\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="blogItem.title" name="blogTitle"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Content</ion-label>\n      <ion-textarea rows="10" [(ngModel)]="blogItem.content" name="blogContent"></ion-textarea>\n    </ion-item>\n    <button ion-button type="submit" block>Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-editing/blog-editing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_blog_service_blog_service__["a" /* BlogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_upload_service_upload_service__["a" /* UploadServiceProvider */]])
    ], BlogEditingPage);
    return BlogEditingPage;
}());

//# sourceMappingURL=blog-editing.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_service_account_service__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_email_validation__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, accountService, toastCtrl, emailValidCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountService = accountService;
        this.toastCtrl = toastCtrl;
        this.emailValidCtrl = emailValidCtrl;
        this.auth = auth;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_User__["a" /* User */]();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.emailInputValid = function (email) {
        this.emailValidCtrl.formatValid(email);
    };
    RegisterPage.prototype.hasWhiteSpace = function (text) {
        return text.indexOf(' ') >= 0;
    };
    RegisterPage.prototype.textInputValid = function (text) {
        if (!text || this.hasWhiteSpace(text)) {
            return false;
        }
        return true;
    };
    RegisterPage.prototype.twoPasswordMatch = function (password, password2) {
        return password === password2;
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        if (!this.emailValidCtrl.formatValid(this.user.email)) {
            return;
        }
        ;
        if (!this.textInputValid(this.user.username)) {
            this.toastCtrl.showToast('Username cannot be empty or include space!');
            return;
        }
        if (!this.textInputValid(this.user.password)) {
            this.toastCtrl.showToast('Password cannot be empty or include space!');
            return;
        }
        if (!this.twoPasswordMatch(this.user.password, this.user.password2)) {
            this.toastCtrl.showToast('Passwords do not match!');
            return;
        }
        // console.log(this.user);
        this.auth.registerUser(this.user).subscribe(function (res) {
            console.log(res);
            _this.auth.loginPage();
        }, function (err) {
            console.log(err);
        });
        // this.accountService.addUser(this.user);
        // this.auth.login();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <form (ngSubmit)="registerUser()">\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="user.email" name="email" (ionBlur)="emailInputValid(user.email)"></ion-input>\n\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="user.username" name="username" (ionBlur)="textInputValid(user.username)"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password" name="password" (ionBlur)="textInputValid(user.password)"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Repeat Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password2" name="password2"></ion-input>\n    </ion-item>\n  \n    <button ion-button type="submit" block>Register</button>\n  </form>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_service_account_service__["a" /* AccountServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_email_validation__["a" /* EmailValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-detail/blog-detail.module": [
		840,
		3
	],
	"../pages/blog-editing/blog-editing.module": [
		841,
		2
	],
	"../pages/login/login.module": [
		842,
		1
	],
	"../pages/register/register.module": [
		843,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service_blog_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServiceProvider = /** @class */ (function () {
    function ChatServiceProvider(http, blogService) {
        this.http = http;
        this.blogService = blogService;
        console.log('Hello ChatServiceProvider Provider');
        this.baseURL = this.blogService.baseURL;
        this.dataModifySubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.dataModified = this.dataModifySubject.asObservable();
    }
    ChatServiceProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ChatServiceProvider.prototype.getMessages = function (userID) {
    };
    ChatServiceProvider.prototype.allChatsChannel = function (user) {
        return this.http.get(this.baseURL + "/api/chats/" + user._id).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    ChatServiceProvider.prototype.getMessagesWithOneFriend = function (user, friendID) {
        return this.http.get(this.baseURL + "/api/chats/" + user._id + "/" + friendID).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    ChatServiceProvider.prototype.sendMessage = function (messageItem) {
        var userID = messageItem.from._id;
        var friendID = messageItem.to;
        return this.http.post(this.baseURL + "/api/chats/send/", messageItem).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    ChatServiceProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__blog_service_blog_service__["a" /* BlogServiceProvider */]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_groceries_service_groceries_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the InputDialogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InputDialogProvider = /** @class */ (function () {
    function InputDialogProvider(alertCtrl, dataService) {
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        console.log('Hello InputDialogProvider Provider');
    }
    InputDialogProvider.prototype.showPrompt = function (item, index) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: item ? 'Edit Item' : 'Add Item',
            message: item ? "Please edit item" : "Please add item",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Name',
                    value: item ? item.name : null
                },
                {
                    name: 'quantity',
                    placeholder: 'Quantity',
                    value: item ? item.quantity : null
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked', data);
                    }
                },
                {
                    text: 'Save',
                    handler: function (item) {
                        console.log('Saved clicked', item);
                        if (index !== undefined) {
                            _this.dataService.editItem(item, index);
                        }
                        else {
                            _this.dataService.addItem(item);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    InputDialogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */]])
    ], InputDialogProvider);
    return InputDialogProvider;
}());

//# sourceMappingURL=input-dialog.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UploadServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UploadServiceProvider = /** @class */ (function () {
    function UploadServiceProvider(http, camera) {
        this.http = http;
        this.camera = camera;
        this.userImg = '';
        this.base64Img = '';
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.gelleryOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true
        };
        this.userImg = 'assets/imgs/logo.png';
        console.log('Hello UploadServiceProvider Provider');
    }
    UploadServiceProvider.prototype.openCamera = function () {
        var _this = this;
        console.log('open the camera!');
        this.camera.getPicture(this.cameraOptions).then(function (imgData) {
            console.log('image data =>  ', imgData);
            _this.base64Img = 'data:image/jpeg;base64,' + imgData;
            _this.userImg = _this.base64Img;
        }, function (err) {
            console.log(err);
        });
    };
    UploadServiceProvider.prototype.openImgGallery = function () {
        var _this = this;
        console.log('open the gallery!');
        this.camera.getPicture(this.gelleryOptions).then(function (imgData) {
            console.log('image data =>  ', imgData);
            _this.base64Img = 'data:image/jpeg;base64,' + imgData;
            _this.userImg = _this.base64Img;
        }, function (err) {
            console.log(err);
        });
    };
    UploadServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], UploadServiceProvider);
    return UploadServiceProvider;
}());

//# sourceMappingURL=upload-service.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__["a" /* BlogsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.user = navParams.get('user');
        console.log(this.user);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/tabs/tabs.html"*/'\n\n\n\n  <button full ion-button color="danger" (click)="logoutUser()">Logout</button>\n  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Blogs" tabIcon="home" [rootParams]="user"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Chats" tabBadge="4" tabIcon="chatboxes" [rootParams]="user" (unreadChanged)="receiveVal($event)"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings" [rootParams]="user"></ion-tab>\n  </ion-tabs>\n\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatMessages_chatMessages__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_service_chat_service__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatsPage = /** @class */ (function () {
    // mock 数据
    // chats = [{
    //   id: '001',
    //   imageUrl: 'assets/img/avatar/marty-avatar.png',
    //   from: '房东',
    //   lastMessage: '这个月的房租怎么还没有交?',
    //   lastTime: new Date()
    // },
    //   {
    //     id: '002',
    //     imageUrl: 'assets/img/avatar/ian-avatar.png',
    //     from: '房产中介',
    //     lastMessage: '上次给你推荐的房子，你看了没有?我这边有新的房源，你要不要过来看看？',
    //     lastTime: new Date()
    //   },
    //   {
    //     id: '003',
    //     imageUrl: 'assets/img/avatar/sarah-avatar.jpg',
    //     from: '公司前台',
    //     lastMessage: '你有新的快递，请注意查收',
    //     lastTime: new Date()
    //   }];
    function ChatsPage(navCtrl, navParam, chatService) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.chatService = chatService;
        this.unreadChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.chats = [];
        this.user = this.navParam.data;
        console.log(this.user);
    }
    ChatsPage.prototype.ionViewWillEnter = function () {
        this.getRecentChats();
    };
    ChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsPage');
    };
    ChatsPage.prototype.getRecentChats = function () {
        var _this = this;
        this.unread = 0;
        this.chatService.allChatsChannel(this.user).subscribe(function (chats) {
            _this.chats = _this.sortRecentChats(chats);
            console.log(_this.chats);
            _this.unread = _this.getNumOfUnreads();
            // this.scrollToBottom();
        }, function (error) { return _this.errorMessage = error; });
    };
    ChatsPage.prototype.getNumOfUnreads = function () {
        var unread = 0;
        for (var _i = 0, _a = this.chats; _i < _a.length; _i++) {
            var chat = _a[_i];
            unread += chat["unread"];
            console.log(unread);
        }
        if (unread !== this.unread) {
            this.unreadChanged.emit(unread);
        }
        return unread;
    };
    ChatsPage.prototype.sortRecentChats = function (chats) {
        return chats.sort(function (a, b) {
            return new Date(b.dateUpdated) - new Date(a.dateUpdated);
        });
    };
    ChatsPage.prototype.viewMessages = function (chat) {
        console.log(chat);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatMessages_chatMessages__["a" /* ChatMessagesPage */], {
            friendID: chat.friendID,
            friendName: chat.friendName,
            user: this.user
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ChatsPage.prototype, "unreadChanged", void 0);
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chats/chats.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hello, {{user.username}}!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n\n    <ion-list-header>Today</ion-list-header>\n\n    <!-- <ion-item *ngFor="let chat of chats" (click)="viewMessages(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h2>{{chat.title}}</h2>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | date:\'HH:mm:ss\'| lowercase}}</ion-note>\n    </ion-item> -->\n\n    <chats-item *ngFor="let chat of chats" (click)="viewMessages(chat)" [chatsItem]="chat">\n      \n    </chats-item>\n\n    <!-- <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-woody.png">\n      </ion-avatar>\n      <h2>Woody</h2>\n      <p>This town ain\'t big enough for the two of us!</p>\n      <ion-note item-end>3:43 pm</ion-note>\n    </ion-item> -->\n\n  </ion-list>\n\n  <!-- <ion-list>\n\n    <ion-list-header>Yesterday</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-hamm.png">\n      </ion-avatar>\n      <h2>Hamm</h2>\n      <p>You heard of Kung Fu? Well get ready for pork chop.</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-slinky.png">\n      </ion-avatar>\n      <h2>Slinky Dog</h2>\n      <p>I may not be a smart dog, but I know what roadkill is.</p>\n      <ion-note item-end>8:54 pm</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Last Week</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-barbie.png">\n      </ion-avatar>\n      <h2>Barbie</h2>\n      <p>So, who\'s ready for Ken\'s dream tour?</p>\n      <ion-note item-end>Sun</ion-note>\n    </ion-item>\n\n\n  </ion-list> -->\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(appCtrl, navCtrl, authService, alertCtrl, navParam) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navParam = navParam;
        this.user = this.navParam.data;
    }
    SettingsPage.prototype.logoutUser = function () {
        this.authService.logout();
        // this.navCtrl.setRoot(LoginPage);
        // this.navCtrl.popToRoot();
        // this.loginPage();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hello, {{user.username}}!\n    </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n    <button full ion-button color="danger" (click)="logoutUser()">Logout</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the AccountServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AccountServiceProvider = /** @class */ (function () {
    function AccountServiceProvider() {
    }
    AccountServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AccountServiceProvider);
    return AccountServiceProvider;
}());

//# sourceMappingURL=account-service.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service_toast_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailValidationService = /** @class */ (function () {
    function EmailValidationService(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        console.log('Hello EmailValidationService Provider');
    }
    EmailValidationService.prototype.formatValid = function (email) {
        this.validFormat = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
        if (!this.validFormat) {
            email = '';
            this.toastCtrl.showToast('Please enter a valid email!');
            return false;
        }
        return true;
    };
    EmailValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], EmailValidationService);
    return EmailValidationService;
}());

//# sourceMappingURL=email-validation.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastServiceProvider = /** @class */ (function () {
    function ToastServiceProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastServiceProvider Provider');
    }
    ToastServiceProvider.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(508);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_blogs_blogs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chatMessages_chatMessages__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_blog_editing_blog_editing__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_blog_detail_blog_detail__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_groceries_service_groceries_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_input_dialog_input_dialog__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_pipes_module__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chats_item_chats_item__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_toast_service_toast_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_email_validation__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_blog_service_blog_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_upload_service_upload_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_chat_service_chat_service__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chatMessages_chatMessages__["a" /* ChatMessagesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_blog_editing_blog_editing__["a" /* BlogEditingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_blog_detail_blog_detail__["a" /* BlogDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_chats_item_chats_item__["a" /* ChatsItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                    backButtonIcon: 'arrow-back'
                }, {
                    links: [
                        { loadChildren: '../pages/blog-detail/blog-detail.module#BlogDetailPageModule', name: 'BlogDetailPage', segment: 'blog-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog-editing/blog-editing.module#BlogEditingPageModule', name: 'BlogEditingPage', segment: 'blog-editing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chatMessages_chatMessages__["a" /* ChatMessagesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_blog_editing_blog_editing__["a" /* BlogEditingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_blog_detail_blog_detail__["a" /* BlogDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__["a" /* ChatsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_input_dialog_input_dialog__["a" /* InputDialogProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__["a" /* AccountServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_26__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_email_validation__["a" /* EmailValidationService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_blog_service_blog_service__["a" /* BlogServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_upload_service_upload_service__["a" /* UploadServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageItem; });
var MessageItem = /** @class */ (function () {
    function MessageItem() {
    }
    return MessageItem;
}());

//# sourceMappingURL=messageItem.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the BlogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BlogServiceProvider = /** @class */ (function () {
    function BlogServiceProvider(http) {
        this.http = http;
        this.baseURL = "http://localhost:8080";
        this.items = [];
        console.log('Hello BlogServiceProvider Provider');
        this.dataModifySubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.dataModified = this.dataModifySubject.asObservable();
    }
    BlogServiceProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    BlogServiceProvider.prototype.getBlogs = function () {
        return this.http.get(this.baseURL + "/api/blogs").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    BlogServiceProvider.prototype.getBlogsOfOneUser = function (user, authorID) {
        return this.http.get(this.baseURL + "/api/blogs/authorID").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // getItems(): Observable<object[]> {
    //   console.log('Hello getItems');
    //   return this.http.get(this.baseURL + "/api/groceries").pipe(
    //     map(this.extractData),
    //     catchError(this.handleError)
    //   );
    // }
    BlogServiceProvider.prototype.removeItem = function (index) {
        var _this = this;
        this.http.delete(this.baseURL + "/api/groceries/" + index).subscribe(function (res) {
            _this.items = res;
            _this.dataModifySubject.next(true);
        });
    };
    BlogServiceProvider.prototype.postBlog = function (blogItem, user) {
        this.newBlog = {
            user: user,
            blogItem: blogItem
        };
        console.log(this.newBlog);
        return this.http.post(this.baseURL + "/api/blogs/create", this.newBlog);
        // this.http.post(this.baseURL + "/api/blogs", blogItem).subscribe(res => {
        //   this.items = <any>res;
        //   this.dataModifySubject.next(true);
        // });
    };
    BlogServiceProvider.prototype.editItem = function (item, index) {
        var _this = this;
        console.info(index);
        this.http.put(this.baseURL + "/api/groceries/" + index, item).subscribe(function (res) {
            _this.items = res;
            _this.dataModifySubject.next(true);
        });
    };
    BlogServiceProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BlogServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BlogServiceProvider);
    return BlogServiceProvider;
}());

//# sourceMappingURL=blog-service.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogItem; });
var BlogItem = /** @class */ (function () {
    function BlogItem() {
    }
    return BlogItem;
}());

//# sourceMappingURL=BlogItem.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var pipes = [
    __WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]
];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__moment_moment__["a" /* MomentPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'moment',
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 368,
	"./af.js": 368,
	"./ar": 369,
	"./ar-dz": 370,
	"./ar-dz.js": 370,
	"./ar-kw": 371,
	"./ar-kw.js": 371,
	"./ar-ly": 372,
	"./ar-ly.js": 372,
	"./ar-ma": 373,
	"./ar-ma.js": 373,
	"./ar-sa": 374,
	"./ar-sa.js": 374,
	"./ar-tn": 375,
	"./ar-tn.js": 375,
	"./ar.js": 369,
	"./az": 376,
	"./az.js": 376,
	"./be": 377,
	"./be.js": 377,
	"./bg": 378,
	"./bg.js": 378,
	"./bm": 379,
	"./bm.js": 379,
	"./bn": 380,
	"./bn-bd": 381,
	"./bn-bd.js": 381,
	"./bn.js": 380,
	"./bo": 382,
	"./bo.js": 382,
	"./br": 383,
	"./br.js": 383,
	"./bs": 384,
	"./bs.js": 384,
	"./ca": 385,
	"./ca.js": 385,
	"./cs": 386,
	"./cs.js": 386,
	"./cv": 387,
	"./cv.js": 387,
	"./cy": 388,
	"./cy.js": 388,
	"./da": 389,
	"./da.js": 389,
	"./de": 390,
	"./de-at": 391,
	"./de-at.js": 391,
	"./de-ch": 392,
	"./de-ch.js": 392,
	"./de.js": 390,
	"./dv": 393,
	"./dv.js": 393,
	"./el": 394,
	"./el.js": 394,
	"./en-au": 395,
	"./en-au.js": 395,
	"./en-ca": 396,
	"./en-ca.js": 396,
	"./en-gb": 397,
	"./en-gb.js": 397,
	"./en-ie": 398,
	"./en-ie.js": 398,
	"./en-il": 399,
	"./en-il.js": 399,
	"./en-in": 400,
	"./en-in.js": 400,
	"./en-nz": 401,
	"./en-nz.js": 401,
	"./en-sg": 402,
	"./en-sg.js": 402,
	"./eo": 403,
	"./eo.js": 403,
	"./es": 404,
	"./es-do": 405,
	"./es-do.js": 405,
	"./es-mx": 406,
	"./es-mx.js": 406,
	"./es-us": 407,
	"./es-us.js": 407,
	"./es.js": 404,
	"./et": 408,
	"./et.js": 408,
	"./eu": 409,
	"./eu.js": 409,
	"./fa": 410,
	"./fa.js": 410,
	"./fi": 411,
	"./fi.js": 411,
	"./fil": 412,
	"./fil.js": 412,
	"./fo": 413,
	"./fo.js": 413,
	"./fr": 414,
	"./fr-ca": 415,
	"./fr-ca.js": 415,
	"./fr-ch": 416,
	"./fr-ch.js": 416,
	"./fr.js": 414,
	"./fy": 417,
	"./fy.js": 417,
	"./ga": 418,
	"./ga.js": 418,
	"./gd": 419,
	"./gd.js": 419,
	"./gl": 420,
	"./gl.js": 420,
	"./gom-deva": 421,
	"./gom-deva.js": 421,
	"./gom-latn": 422,
	"./gom-latn.js": 422,
	"./gu": 423,
	"./gu.js": 423,
	"./he": 424,
	"./he.js": 424,
	"./hi": 425,
	"./hi.js": 425,
	"./hr": 426,
	"./hr.js": 426,
	"./hu": 427,
	"./hu.js": 427,
	"./hy-am": 428,
	"./hy-am.js": 428,
	"./id": 429,
	"./id.js": 429,
	"./is": 430,
	"./is.js": 430,
	"./it": 431,
	"./it-ch": 432,
	"./it-ch.js": 432,
	"./it.js": 431,
	"./ja": 433,
	"./ja.js": 433,
	"./jv": 434,
	"./jv.js": 434,
	"./ka": 435,
	"./ka.js": 435,
	"./kk": 436,
	"./kk.js": 436,
	"./km": 437,
	"./km.js": 437,
	"./kn": 438,
	"./kn.js": 438,
	"./ko": 439,
	"./ko.js": 439,
	"./ku": 440,
	"./ku.js": 440,
	"./ky": 441,
	"./ky.js": 441,
	"./lb": 442,
	"./lb.js": 442,
	"./lo": 443,
	"./lo.js": 443,
	"./lt": 444,
	"./lt.js": 444,
	"./lv": 445,
	"./lv.js": 445,
	"./me": 446,
	"./me.js": 446,
	"./mi": 447,
	"./mi.js": 447,
	"./mk": 448,
	"./mk.js": 448,
	"./ml": 449,
	"./ml.js": 449,
	"./mn": 450,
	"./mn.js": 450,
	"./mr": 451,
	"./mr.js": 451,
	"./ms": 452,
	"./ms-my": 453,
	"./ms-my.js": 453,
	"./ms.js": 452,
	"./mt": 454,
	"./mt.js": 454,
	"./my": 455,
	"./my.js": 455,
	"./nb": 456,
	"./nb.js": 456,
	"./ne": 457,
	"./ne.js": 457,
	"./nl": 458,
	"./nl-be": 459,
	"./nl-be.js": 459,
	"./nl.js": 458,
	"./nn": 460,
	"./nn.js": 460,
	"./oc-lnc": 461,
	"./oc-lnc.js": 461,
	"./pa-in": 462,
	"./pa-in.js": 462,
	"./pl": 463,
	"./pl.js": 463,
	"./pt": 464,
	"./pt-br": 465,
	"./pt-br.js": 465,
	"./pt.js": 464,
	"./ro": 466,
	"./ro.js": 466,
	"./ru": 467,
	"./ru.js": 467,
	"./sd": 468,
	"./sd.js": 468,
	"./se": 469,
	"./se.js": 469,
	"./si": 470,
	"./si.js": 470,
	"./sk": 471,
	"./sk.js": 471,
	"./sl": 472,
	"./sl.js": 472,
	"./sq": 473,
	"./sq.js": 473,
	"./sr": 474,
	"./sr-cyrl": 475,
	"./sr-cyrl.js": 475,
	"./sr.js": 474,
	"./ss": 476,
	"./ss.js": 476,
	"./sv": 477,
	"./sv.js": 477,
	"./sw": 478,
	"./sw.js": 478,
	"./ta": 479,
	"./ta.js": 479,
	"./te": 480,
	"./te.js": 480,
	"./tet": 481,
	"./tet.js": 481,
	"./tg": 482,
	"./tg.js": 482,
	"./th": 483,
	"./th.js": 483,
	"./tk": 484,
	"./tk.js": 484,
	"./tl-ph": 485,
	"./tl-ph.js": 485,
	"./tlh": 486,
	"./tlh.js": 486,
	"./tr": 487,
	"./tr.js": 487,
	"./tzl": 488,
	"./tzl.js": 488,
	"./tzm": 489,
	"./tzm-latn": 490,
	"./tzm-latn.js": 490,
	"./tzm.js": 489,
	"./ug-cn": 491,
	"./ug-cn.js": 491,
	"./uk": 492,
	"./uk.js": 492,
	"./ur": 493,
	"./ur.js": 493,
	"./uz": 494,
	"./uz-latn": 495,
	"./uz-latn.js": 495,
	"./uz.js": 494,
	"./vi": 496,
	"./vi.js": 496,
	"./x-pseudo": 497,
	"./x-pseudo.js": 497,
	"./yo": 498,
	"./yo.js": 498,
	"./zh-cn": 499,
	"./zh-cn.js": 499,
	"./zh-hk": 500,
	"./zh-hk.js": 500,
	"./zh-mo": 501,
	"./zh-mo.js": 501,
	"./zh-tw": 502,
	"./zh-tw.js": 502
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 837;

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ChatsItem__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatsItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatsItemComponent = /** @class */ (function () {
    function ChatsItemComponent() {
    }
    ChatsItemComponent.prototype.ngOnInit = function () {
        console.log('Hello ChatsItemComponent Component');
        console.log(this.chatsItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_ChatsItem__["a" /* ChatsItem */])
    ], ChatsItemComponent.prototype, "chatsItem", void 0);
    ChatsItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chats-item',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/components/chats-item/chats-item.html"*/'<!-- Generated template for the ChatsItemComponent component -->\n<ion-item>\n  <ion-avatar item-start>\n    <img [src]="">\n    \n  </ion-avatar>\n  \n  <h2>{{chatsItem.friendName}}</h2>\n  <p>{{chatsItem.content}}</p>\n  <ion-note item-end>{{chatsItem.dateUpdated | date:\'HH:mm:ss\'| lowercase}}</ion-note>\n  \n</ion-item>\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/components/chats-item/chats-item.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatsItemComponent);
    return ChatsItemComponent;
}());

//# sourceMappingURL=chats-item.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsItem; });
var ChatsItem = /** @class */ (function () {
    function ChatsItem() {
    }
    return ChatsItem;
}());

//# sourceMappingURL=ChatsItem.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AccountServiceProvider } from '../account-service/account-service';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, appCtrl, alertCtrl, location) {
        this.http = http;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.location = location;
        // private isLoggedIn = false;
        this.baseURL = "http://localhost:8080";
        console.log('Hello AuthServiceProvider Provider');
    }
    // serverUrl = this.accountService.baseURL;
    // go to the login page
    AuthServiceProvider.prototype.loginPage = function () {
        // this.nav.setRoot(LoginPage);
        // this.nav.popToRoot();
        var _this = this;
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'No entry!',
                subTitle: 'You shall not pass',
                buttons: ['Okay']
            });
            alert.present();
        });
        // this.isLoggedIn = true;
    };
    // go to the login page
    AuthServiceProvider.prototype.logout = function () {
        this.loginPage();
    };
    AuthServiceProvider.prototype.loginAuth = function (data) {
        console.log(data);
        return this.http.post(this.baseURL + "/api/users/login", data);
        // this.http.post(this.serverUrl + "/api/login", data).subscribe(res => {
        //   this.users = <any>res;
        //   this.dataModifySubject.next(true);
        //   console.log(user, "new user created!");
        //   }, (err) => {
        //     console.log(err);
        //     this.toastCtrl.showToast('Email already exists!')
        // });
    };
    AuthServiceProvider.prototype.registerUser = function (data) {
        console.log(data);
        return this.http.post(this.baseURL + "/api/users/register", data);
        // this.http.post(this.serverUrl + "/api/login", data).subscribe(res => {
        //   this.users = <any>res;
        //   this.dataModifySubject.next(true);
        //   console.log(user, "new user created!");
        //   }, (err) => {
        //     console.log(err);
        //     this.toastCtrl.showToast('Email already exists!')
        // });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, navCtrl, navParams, authService, modalCtrl, toastService, storage) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.storage = storage;
        this.isRemember = false;
        this.isShow = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.navCtrl.popToRoot();
    };
    LoginPage.prototype.loginUser = function (email, password) {
        var _this = this;
        if (email.value.length === 0) {
            this.toastService.showToast("Please enter your email!");
            return false;
        }
        if (password.value.length === 0) {
            this.toastService.showToast("Please enter password!");
            return false;
        }
        var data = { email: email.value, password: password.value, isRemember: this.isRemember };
        // 储存用户信息
        // this.storage.remove("USER_INFO");
        // this.storage.set("USER_INFO", JSON.stringify(data));
        // 界面跳转
        // let modal = this.modalCtrl.create(TabsPage, data);
        // modal.present();
        this.authService.loginAuth(data).subscribe(function (user) {
            _this.loggedUser = user;
            console.log(_this.loggedUser);
            _this.tabsPage(user);
        }, function (err) {
            console.log(err);
            _this.toastService.showToast(err.error);
        });
        // this.tabsPage();
    };
    // showToast(position: string, message: string) {
    //   let toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 2000,
    //     position: position
    //   });
    //   toast.present(toast);
    // }
    // logoutUser() {
    //   this.authService.logout();
    // }
    LoginPage.prototype.tabsPage = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {
            user: user
        }).catch(function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <h2 *ngIf="isAuthenticated()" text-center>User is logged in!</h2>\n    <h2 *ngIf="!isAuthenticated()" text-center>User is not logged in!</h2>\n    \n    \n    <button full ion-button color="primary" (click)="loginUser()">Login</button>\n    \n\n    <button full ion-button color="primary" (click)="registerPage()">Register</button>\n    \n  \n  </ion-list> -->\n  <ion-list inset>\n    <ion-item>\n      <ion-input type="text" placeholder="Email:" #email></ion-input>\n      <ion-icon ios="ios-person" md="md-person" item-end [ngStyle]="iconStyle"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [type]="isShow ? \'text\':\'password\'" placeholder="passsword" #password></ion-input>\n      <ion-icon ios="ios-key" md="md-key" item-end [ngStyle]="iconStyle"></ion-icon>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label>\n        <!-- 控制字体图标的显示是由 ios 以及 md 两个属性控制的  -->\n        <ion-icon [ios]="isShow ? \'ios-eye\' : \'ios-eye-off\'" [md]="isShow ? \'md-eye\' : \'md-eye-off\'"></ion-icon>\n      </ion-label>\n      <ion-toggle checked="false" [(ngModel)]="isShow"></ion-toggle>\n    </ion-item>\n\n    <ion-item no-lines>\n      <label item-left>Remenber Password</label>\n      <ion-toggle checked="false" [(ngModel)]="isRemember"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button block color="primary" (click)="loginUser(email, password)">Login</button>\n  </div>\n  <div padding>\n    <button ion-button block color="primary" (click)="registerPage()">Register</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[503]);
//# sourceMappingURL=main.js.map