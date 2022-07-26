webpackJsonp([4],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(136);
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_input_dialog__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_editing_blog_editing__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_blog_service_blog_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_detail_blog_detail__ = __webpack_require__(160);
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
        this.title = "Blogs";
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
            selector: 'page-blogs',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blogs/blogs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <h3 text-center *ngIf = "items.length === 0">\n    No item available on the list.\n  </h3>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items; let i = index">\n      <ion-item>\n        <h1>{{item.name}}</h1>\n        <p>{{item.quantity}}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button expandable (click)="removeItem(item, item._id)" color = "secondary">\n          <ion-icon name="trash"></ion-icon>\n          Done\n        </button>\n        <button ion-button expandable (click)="editItem(item, item._id)" color = "primary">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n        <button ion-button expandable (click)="shareItem(item, item._id)" color = "light">\n          <ion-icon name="share"></ion-icon>\n          Share\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> -->\n  \n  <ion-card *ngFor="let blog of blogs" (click)="viewTheBlog(blog)" style="height: 30vh;">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="blog.user-image">\n      </ion-avatar>\n      <h2>{{blog.title}}</h2>\n      <p>{{blog.dateUpdated}}</p>\n    </ion-item>\n  \n    <img src="img/advance-card-bttf.png">\n  \n    <ion-card-content>\n      <p>{{blog.content}}</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small (click)="viewMessages(chat)">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{blog.likes}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{blog.comments}} Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-fab right bottom>\n      <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab> -->\n  \n  </ion-card>\n\n\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="addNewBlog(item)">\n      <ion-icon name="add">\n      </ion-icon>\n    </button>\n  </ion-fab>\n  \n  \n\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blogs/blogs.html"*/
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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceriesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(136);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(48);
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
        this.user = navParams.get('user');
        this.blogItem = navParams.get('blog');
    }
    BlogDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogDetailPage');
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
            selector: 'page-blog-detail',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-detail/blog-detail.html"*/'<!--\n  Generated template for the BlogDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{blogItem.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="">\n      </ion-avatar>\n      <h2>{{blogItem.title}}</h2>\n      <p>Date updated: {{blogItem.dateUpdated}}</p>\n    </ion-item>\n  \n    <img src="img/advance-card-bttf.png">\n  \n    <ion-card-content>\n      <p>{{blogItem.content}}\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{blogItem.likes}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{blogItem.comments}} Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  <ion-fab right top>\n    <button ion-fab color="danger" (click)="shareBlog()"><ion-icon name="md-share"></ion-icon></button>\n  \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-detail/blog-detail.html"*/,
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEditingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BlogItem__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blog_service_blog_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blogs_blogs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_upload_service_upload_service__ = __webpack_require__(315);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_service_account_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_email_validation__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(85);
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

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-detail/blog-detail.module": [
		837,
		3
	],
	"../pages/blog-editing/blog-editing.module": [
		838,
		2
	],
	"../pages/login/login.module": [
		839,
		1
	],
	"../pages/register/register.module": [
		840,
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
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_groceries_service_groceries_service__ = __webpack_require__(138);
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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(316);
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__ = __webpack_require__(137);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/tabs/tabs.html"*/'\n\n\n\n  <button full ion-button color="danger" (click)="logoutUser()">Logout</button>\n  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Blogs" tabIcon="home" [rootParams]="user"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Chats" tabBadge="14" tabIcon="chatboxes"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n  </ion-tabs>\n\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatMessages_chatMessages__ = __webpack_require__(321);
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
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
        // mock 数据
        this.chats = [{
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
    }
    ChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsPage');
    };
    ChatsPage.prototype.viewMessages = function (chat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatMessages_chatMessages__["a" /* ChatMessagesPage */], { chatId: chat.id });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chats/chats.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat History\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n\n    <ion-list-header>Today</ion-list-header>\n\n    <ion-item *ngFor="let chat of chats" (click)="viewMessages(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h2>{{chat.title}}</h2>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | date:\'HH:mm:ss\'| lowercase}}</ion-note>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-woody.png">\n      </ion-avatar>\n      <h2>Woody</h2>\n      <p>This town ain\'t big enough for the two of us!</p>\n      <ion-note item-end>3:43 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-buzz.png">\n      </ion-avatar>\n      <h2>Buzz Lightyear</h2>\n      <p>My eyeballs could have been sucked from their sockets!</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Yesterday</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-hamm.png">\n      </ion-avatar>\n      <h2>Hamm</h2>\n      <p>You heard of Kung Fu? Well get ready for pork chop.</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-slinky.png">\n      </ion-avatar>\n      <h2>Slinky Dog</h2>\n      <p>I may not be a smart dog, but I know what roadkill is.</p>\n      <ion-note item-end>8:54 pm</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Last Week</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-barbie.png">\n      </ion-avatar>\n      <h2>Barbie</h2>\n      <p>So, who\'s ready for Ken\'s dream tour?</p>\n      <ion-note item-end>Sun</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(322);
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
    function ChatMessagesPage(navParams, navCtrl, formBuilder, keyboard) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.keyboard = keyboard;
        // constructor(public navCtrl: NavController, public navParams: NavParams) {
        // }
        // ionViewDidLoad() {
        //   console.log('ionViewDidLoad ChatMessagesPage');
        // }
        this.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'assets/img/avatar/ian-avatar.png',
            username: 'Venkman',
        };
        this.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'assets/img/avatar/marty-avatar.png',
            username: 'Marty',
        };
        this.doneLoading = false;
        this.messages = [
            {
                _id: 1,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'OH CRAP!!'
            },
            {
                _id: 2,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'what??'
            },
            {
                _id: 3,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'Pretty long message with lots of content'
            },
            {
                _id: 4,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Pretty long message with even way more of lots and lots of content'
            },
            {
                _id: 5,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: '哪尼??'
            },
            {
                _id: 6,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'yes!'
            }
        ];
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]('')
        });
        this.chatBox = '';
        window.addEventListener('native.keyboardshow', function (e) {
            //e.keyboardHeight键盘的高度
            document.getElementById('maskc').style.bottom = '-' + (window.innerHeight - e.keyboardHeight - 120) + 'px';
        });
    }
    ChatMessagesPage.prototype.ionViewDidLoad = function () {
        var modelData = '用户名：' + this.navParams.get('chatId');
        console.log(modelData);
    };
    // 发送消息
    ChatMessagesPage.prototype.send = function (message) {
        var _this = this;
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);
            var messageData = {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.user._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: message
            };
            this.messages.push(messageData);
            this.scrollToBottom();
            setTimeout(function () {
                var replyData = {
                    toId: _this.toUser._id,
                    _id: 6,
                    date: new Date(),
                    userId: _this.toUser._id,
                    username: _this.toUser.username,
                    pic: _this.toUser.pic,
                    text: 'Just a quick reply'
                };
                _this.messages.push(replyData);
                _this.scrollToBottom();
            }, 1000);
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
            selector: 'page-chatMessages',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chatMessages/chatMessages.html"*/'<!--\n  Generated template for the ChatMessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>chat-messages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngFor="let message of messages" class="message-wrapper" on-hold="onMessageHold($event, $index, message)">\n    <!-- 判断消息是发送 -->\n    <div *ngIf="user._id !== message.userId">\n      <img (click)="viewProfile(message)" class="profile-pic left" [src]="toUser.pic"/>\n     \n      <div class="chat-bubble left slide-left">\n        <div class="message" [innerHTML]="message.text" autolinker> </div>\n        <div class="message-detail">\n          <span (click)="viewProfile(message)" class="bold">{{toUser.username}}</span>\n          <span>{{message.date | moment:"ago" | lowercase}}</span>\n        </div>\n      </div>\n    </div>\n\n    <!-- 判断消息是发送 -->\n    <div *ngIf="user._id === message.userId">\n      <img (click)="viewProfile(message)" class="profile-pic right" [src]="user.pic"/>\n      <div class="chat-bubble right slide-right">\n        <div class="message" [innerHTML]="message.text" autolinker></div>\n        <div class="message-detail">\n          <span (click)="viewProfile(message)" class="bold">{{user.username}}</span>,\n          <span>{{message.date | moment:"ago" | lowercase}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="cf"></div>\n  </div>\n\n  <!-- <ion-list no-lines>\n    <ion-item *ngFor="let msg of messages">\n      <chat-bubble [chatMessage]="msg"></chat-bubble>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>\n\n<!-- 底部固定的输入框 -->\n<ion-footer>\n  <form [formGroup]="messageForm" (submit)="send(chatBox)" novalidate>\n    <ion-item>\n      <ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="Send {{toUser.username}} a message..."></ion-input>\n      <button ion-button clear (click)="send(chatBox)" item-end><ion-icon class="footer-btn" name="send"></ion-icon></button>\n    </ion-item>\n  </form>\n</ion-footer>\n<!-- <ion-footer no-border class="chatPageFooter" [keyboardAttach]="content" [btnClicked]="btnEmitter">\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-label style="margin:0px;"></ion-label>\n      <div item-content style="width:100%;">\n        <elastic-textarea #txtChat placeholder="Send a message" lineHeight="20" maxExpand="5"></elastic-textarea>\n      </div>\n    </ion-item>\n    <ion-buttons right style="margin-left:10px">\n      <button ion-button icon-only style="margin-top: -15px;"\n              [disabled]="txtChat.content.trim().length<1"\n              (click)="sendMessage()">\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chatMessages/chatMessages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], ChatMessagesPage);
    return ChatMessagesPage;
}());

//# sourceMappingURL=chatMessages.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(85);
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
    function SettingsPage(appCtrl, navCtrl, authService, alertCtrl) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
    }
    SettingsPage.prototype.logoutUser = function () {
        this.authService.logout();
        // this.navCtrl.setRoot(LoginPage);
        // this.navCtrl.popToRoot();
        // this.loginPage();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n    <button full ion-button color="danger" (click)="logoutUser()">Logout</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 324:
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service_toast_service__ = __webpack_require__(48);
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chats_chats__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_blogs_blogs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatMessages_chatMessages__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_blog_editing_blog_editing__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_blog_detail_blog_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_groceries_service_groceries_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_input_dialog_input_dialog__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_account_service_account_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_toast_service_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_email_validation__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_blog_service_blog_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_upload_service_upload_service__ = __webpack_require__(315);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatMessages_chatMessages__["a" /* ChatMessagesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_blog_editing_blog_editing__["a" /* BlogEditingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_blog_detail_blog_detail__["a" /* BlogDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatMessages_chatMessages__["a" /* ChatMessagesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_blog_editing_blog_editing__["a" /* BlogEditingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_blog_detail_blog_detail__["a" /* BlogDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_input_dialog_input_dialog__["a" /* InputDialogProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_account_service_account_service__["a" /* AccountServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_26__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_auth_service_email_validation__["a" /* EmailValidationService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_blog_service_blog_service__["a" /* BlogServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_upload_service_upload_service__["a" /* UploadServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
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

/***/ 813:
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

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(90);
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

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(834);
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

/***/ 834:
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

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 367,
	"./af.js": 367,
	"./ar": 368,
	"./ar-dz": 369,
	"./ar-dz.js": 369,
	"./ar-kw": 370,
	"./ar-kw.js": 370,
	"./ar-ly": 371,
	"./ar-ly.js": 371,
	"./ar-ma": 372,
	"./ar-ma.js": 372,
	"./ar-sa": 373,
	"./ar-sa.js": 373,
	"./ar-tn": 374,
	"./ar-tn.js": 374,
	"./ar.js": 368,
	"./az": 375,
	"./az.js": 375,
	"./be": 376,
	"./be.js": 376,
	"./bg": 377,
	"./bg.js": 377,
	"./bm": 378,
	"./bm.js": 378,
	"./bn": 379,
	"./bn-bd": 380,
	"./bn-bd.js": 380,
	"./bn.js": 379,
	"./bo": 381,
	"./bo.js": 381,
	"./br": 382,
	"./br.js": 382,
	"./bs": 383,
	"./bs.js": 383,
	"./ca": 384,
	"./ca.js": 384,
	"./cs": 385,
	"./cs.js": 385,
	"./cv": 386,
	"./cv.js": 386,
	"./cy": 387,
	"./cy.js": 387,
	"./da": 388,
	"./da.js": 388,
	"./de": 389,
	"./de-at": 390,
	"./de-at.js": 390,
	"./de-ch": 391,
	"./de-ch.js": 391,
	"./de.js": 389,
	"./dv": 392,
	"./dv.js": 392,
	"./el": 393,
	"./el.js": 393,
	"./en-au": 394,
	"./en-au.js": 394,
	"./en-ca": 395,
	"./en-ca.js": 395,
	"./en-gb": 396,
	"./en-gb.js": 396,
	"./en-ie": 397,
	"./en-ie.js": 397,
	"./en-il": 398,
	"./en-il.js": 398,
	"./en-in": 399,
	"./en-in.js": 399,
	"./en-nz": 400,
	"./en-nz.js": 400,
	"./en-sg": 401,
	"./en-sg.js": 401,
	"./eo": 402,
	"./eo.js": 402,
	"./es": 403,
	"./es-do": 404,
	"./es-do.js": 404,
	"./es-mx": 405,
	"./es-mx.js": 405,
	"./es-us": 406,
	"./es-us.js": 406,
	"./es.js": 403,
	"./et": 407,
	"./et.js": 407,
	"./eu": 408,
	"./eu.js": 408,
	"./fa": 409,
	"./fa.js": 409,
	"./fi": 410,
	"./fi.js": 410,
	"./fil": 411,
	"./fil.js": 411,
	"./fo": 412,
	"./fo.js": 412,
	"./fr": 413,
	"./fr-ca": 414,
	"./fr-ca.js": 414,
	"./fr-ch": 415,
	"./fr-ch.js": 415,
	"./fr.js": 413,
	"./fy": 416,
	"./fy.js": 416,
	"./ga": 417,
	"./ga.js": 417,
	"./gd": 418,
	"./gd.js": 418,
	"./gl": 419,
	"./gl.js": 419,
	"./gom-deva": 420,
	"./gom-deva.js": 420,
	"./gom-latn": 421,
	"./gom-latn.js": 421,
	"./gu": 422,
	"./gu.js": 422,
	"./he": 423,
	"./he.js": 423,
	"./hi": 424,
	"./hi.js": 424,
	"./hr": 425,
	"./hr.js": 425,
	"./hu": 426,
	"./hu.js": 426,
	"./hy-am": 427,
	"./hy-am.js": 427,
	"./id": 428,
	"./id.js": 428,
	"./is": 429,
	"./is.js": 429,
	"./it": 430,
	"./it-ch": 431,
	"./it-ch.js": 431,
	"./it.js": 430,
	"./ja": 432,
	"./ja.js": 432,
	"./jv": 433,
	"./jv.js": 433,
	"./ka": 434,
	"./ka.js": 434,
	"./kk": 435,
	"./kk.js": 435,
	"./km": 436,
	"./km.js": 436,
	"./kn": 437,
	"./kn.js": 437,
	"./ko": 438,
	"./ko.js": 438,
	"./ku": 439,
	"./ku.js": 439,
	"./ky": 440,
	"./ky.js": 440,
	"./lb": 441,
	"./lb.js": 441,
	"./lo": 442,
	"./lo.js": 442,
	"./lt": 443,
	"./lt.js": 443,
	"./lv": 444,
	"./lv.js": 444,
	"./me": 445,
	"./me.js": 445,
	"./mi": 446,
	"./mi.js": 446,
	"./mk": 447,
	"./mk.js": 447,
	"./ml": 448,
	"./ml.js": 448,
	"./mn": 449,
	"./mn.js": 449,
	"./mr": 450,
	"./mr.js": 450,
	"./ms": 451,
	"./ms-my": 452,
	"./ms-my.js": 452,
	"./ms.js": 451,
	"./mt": 453,
	"./mt.js": 453,
	"./my": 454,
	"./my.js": 454,
	"./nb": 455,
	"./nb.js": 455,
	"./ne": 456,
	"./ne.js": 456,
	"./nl": 457,
	"./nl-be": 458,
	"./nl-be.js": 458,
	"./nl.js": 457,
	"./nn": 459,
	"./nn.js": 459,
	"./oc-lnc": 460,
	"./oc-lnc.js": 460,
	"./pa-in": 461,
	"./pa-in.js": 461,
	"./pl": 462,
	"./pl.js": 462,
	"./pt": 463,
	"./pt-br": 464,
	"./pt-br.js": 464,
	"./pt.js": 463,
	"./ro": 465,
	"./ro.js": 465,
	"./ru": 466,
	"./ru.js": 466,
	"./sd": 467,
	"./sd.js": 467,
	"./se": 468,
	"./se.js": 468,
	"./si": 469,
	"./si.js": 469,
	"./sk": 470,
	"./sk.js": 470,
	"./sl": 471,
	"./sl.js": 471,
	"./sq": 472,
	"./sq.js": 472,
	"./sr": 473,
	"./sr-cyrl": 474,
	"./sr-cyrl.js": 474,
	"./sr.js": 473,
	"./ss": 475,
	"./ss.js": 475,
	"./sv": 476,
	"./sv.js": 476,
	"./sw": 477,
	"./sw.js": 477,
	"./ta": 478,
	"./ta.js": 478,
	"./te": 479,
	"./te.js": 479,
	"./tet": 480,
	"./tet.js": 480,
	"./tg": 481,
	"./tg.js": 481,
	"./th": 482,
	"./th.js": 482,
	"./tk": 483,
	"./tk.js": 483,
	"./tl-ph": 484,
	"./tl-ph.js": 484,
	"./tlh": 485,
	"./tlh.js": 485,
	"./tr": 486,
	"./tr.js": 486,
	"./tzl": 487,
	"./tzl.js": 487,
	"./tzm": 488,
	"./tzm-latn": 489,
	"./tzm-latn.js": 489,
	"./tzm.js": 488,
	"./ug-cn": 490,
	"./ug-cn.js": 490,
	"./uk": 491,
	"./uk.js": 491,
	"./ur": 492,
	"./ur.js": 492,
	"./uz": 493,
	"./uz-latn": 494,
	"./uz-latn.js": 494,
	"./uz.js": 493,
	"./vi": 495,
	"./vi.js": 495,
	"./x-pseudo": 496,
	"./x-pseudo.js": 496,
	"./yo": 497,
	"./yo.js": 497,
	"./zh-cn": 498,
	"./zh-cn.js": 498,
	"./zh-hk": 499,
	"./zh-hk.js": 499,
	"./zh-mo": 500,
	"./zh-mo.js": 500,
	"./zh-tw": 501,
	"./zh-tw.js": 501
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
webpackContext.id = 836;

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(90);
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(162);
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
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {
            user: user
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'No entry!',
                subTitle: 'You shall not pass',
                buttons: ['Okay']
            });
            alert.present();
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

},[502]);
//# sourceMappingURL=main.js.map