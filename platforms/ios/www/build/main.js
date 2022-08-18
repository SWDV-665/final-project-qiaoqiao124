webpackJsonp([3],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(134);
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
    // getBlogs(): Observable<BlogItem[]> {
    //   return this.http.get<BlogItem[]>(this.baseURL + "/api/blogs");
    // }
    BlogServiceProvider.prototype.getBlogs = function () {
        return this.http.get(this.baseURL + "/api/blogs").pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceriesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(134);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEditingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BlogItem__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blog_service_blog_service__ = __webpack_require__(122);
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
    function BlogEditingPage(navCtrl, navParams, toastCtrl, blogService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.blogService = blogService;
        this.blogItem = new __WEBPACK_IMPORTED_MODULE_2__models_BlogItem__["a" /* BlogItem */]();
        this.user = navParams.get('user');
        ;
        console.log(this.user);
    }
    BlogEditingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlogEditingPage', this.blogItem);
    };
    BlogEditingPage.prototype.submitBlog = function () {
        var _this = this;
        if (!this.blogItem.title && !this.blogItem.content) {
            this.toastCtrl.showToast('No content in your blog!');
            return;
        }
        this.blogService.postBlog(this.blogItem, this.user).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
            console.log(_this.blogItem, _this.user);
        });
        // this.blogService.postBlog(this.blogItem, this.user);
    };
    BlogEditingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blog-editing',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-editing/blog-editing.html"*/'<!--\n  Generated template for the BlogEditingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Editing Your Blog</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="submitBlog()">\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="blogItem.title" name="blogTitle"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Content</ion-label>\n      <ion-textarea rows="10" [(ngModel)]="blogItem.content" name="blogContent"></ion-textarea>\n    </ion-item>\n    <button ion-button type="submit" block>Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blog-editing/blog-editing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_blog_service_blog_service__["a" /* BlogServiceProvider */]])
    ], BlogEditingPage);
    return BlogEditingPage;
}());

//# sourceMappingURL=blog-editing.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_service_account_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_email_validation__ = __webpack_require__(322);
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

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blog-editing/blog-editing.module": [
		834,
		2
	],
	"../pages/login/login.module": [
		835,
		1
	],
	"../pages/register/register.module": [
		836,
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__ = __webpack_require__(318);
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
        ;
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatMessages_chatMessages__ = __webpack_require__(314);
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
            selector: 'page-chats',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chats/chats.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat History\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n\n    <ion-list-header>Today</ion-list-header>\n\n    <ion-item *ngFor="let chat of chats" (click)="viewMessages(chat)">\n      <ion-avatar item-start>\n        <img [src]="chat.imageUrl">\n      </ion-avatar>\n      <h2>{{chat.title}}</h2>\n      <p>{{chat.lastMessage}}</p>\n      <ion-note item-end>{{chat.timestamp | date:\'HH:mm:ss\'| lowercase}}</ion-note>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-woody.png">\n      </ion-avatar>\n      <h2>Woody</h2>\n      <p>This town ain\'t big enough for the two of us!</p>\n      <ion-note item-end>3:43 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-buzz.png">\n      </ion-avatar>\n      <h2>Buzz Lightyear</h2>\n      <p>My eyeballs could have been sucked from their sockets!</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Yesterday</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-hamm.png">\n      </ion-avatar>\n      <h2>Hamm</h2>\n      <p>You heard of Kung Fu? Well get ready for pork chop.</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-slinky.png">\n      </ion-avatar>\n      <h2>Slinky Dog</h2>\n      <p>I may not be a smart dog, but I know what roadkill is.</p>\n      <ion-note item-end>8:54 pm</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Last Week</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-barbie.png">\n      </ion-avatar>\n      <h2>Barbie</h2>\n      <p>So, who\'s ready for Ken\'s dream tour?</p>\n      <ion-note item-end>Sun</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-squeeze.png">\n      </ion-avatar>\n      <h2>Squeeze</h2>\n      <p>The claw is our master.</p>\n      <ion-note item-end>Fri</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/chats/chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(315);
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groceries_service_groceries_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_dialog_input_dialog__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_editing_blog_editing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_blog_service_blog_service__ = __webpack_require__(122);
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
        //   },
        //   {
        //     'userID': '1',
        //     'username': 'Marty McFly',
        //     'user-image': 'img/advance-card-bttf.png',
        //     'time': 'November 5, 1955',
        //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        //     'likes': '4',
        //     'comments': '12'
        //   },
        //   {
        //     'userID': '1',
        //     'username': 'Marty McFly',
        //     'user-image': 'img/advance-card-bttf.png',
        //     'time': 'November 5, 1955',
        //     'text': 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        //     'likes': '4',
        //     'comments': '12'
        //   },
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
        // console.log(this.user);
        dataService.dataModified.subscribe(function (dataModified) {
            // this.loadItems();
        });
    }
    BlogsPage.prototype.ionViewDidLoad = function () {
        this.loadBlogs();
    };
    BlogsPage.prototype.loadBlogs = function () {
        var _this = this;
        // this.blogs = this.blogService.getBlogs().subscribe(data => this.blogs = data);
        // this.dataService.getItems().subscribe(
        //   items => this.items = items,
        //   error => this.errorMessage = <any>error
        // );
        this.blogService.getBlogs().subscribe(function (items) {
            _this.blogs = items;
            console.log(_this.blogs);
        }, function (error) { return _this.errorMessage = error; });
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
    BlogsPage.prototype.shareItem = function (item, index) {
        var toast = this.toastCtrl.create({
            message: 'Share ' + item.name + '. index' + index,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
        var message = "Grocery item - Name: " + item.name + "- Quantity: " + item.quantity;
        var subject = "Shared via Groceries app";
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
    BlogsPage.prototype.addNewBlog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__blog_editing_blog_editing__["a" /* BlogEditingPage */], {
            user: this.user
        });
    };
    ;
    BlogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blogs',template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blogs/blogs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <h3 text-center *ngIf = "items.length === 0">\n    No item available on the list.\n  </h3>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items; let i = index">\n      <ion-item>\n        <h1>{{item.name}}</h1>\n        <p>{{item.quantity}}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button expandable (click)="removeItem(item, item._id)" color = "secondary">\n          <ion-icon name="trash"></ion-icon>\n          Done\n        </button>\n        <button ion-button expandable (click)="editItem(item, item._id)" color = "primary">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n        <button ion-button expandable (click)="shareItem(item, item._id)" color = "light">\n          <ion-icon name="share"></ion-icon>\n          Share\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> -->\n  \n  <ion-card *ngFor="let blog of blogs">\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="blog.user-image">\n      </ion-avatar>\n      <h2>{{blog.title}}</h2>\n      <p>{{blog.dateUpdated}}</p>\n    </ion-item>\n  \n    <img src="img/advance-card-bttf.png">\n  \n    <ion-card-content>\n      <p>{{blog.content}}</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small (click)="viewMessages(chat)">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{blog.likes}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{blog.comments}} Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n\n\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="addNewBlog(item)">\n      <ion-icon name="add">\n      </ion-icon>\n    </button>\n  </ion-fab>\n  \n  \n\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/pages/blogs/blogs.html"*/
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDialogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_groceries_service_groceries_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
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

/***/ 321:
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service_toast_service__ = __webpack_require__(58);
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

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(504);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chats_chats__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_blogs_blogs__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chatMessages_chatMessages__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_blog_editing_blog_editing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_groceries_service_groceries_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_input_dialog_input_dialog__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_account_service_account_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_toast_service_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_email_validation__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_blog_service_blog_service__ = __webpack_require__(122);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_blog_editing_blog_editing__["a" /* BlogEditingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                    backButtonIcon: 'arrow-back'
                }, {
                    links: [
                        { loadChildren: '../pages/blog-editing/blog-editing.module#BlogEditingPageModule', name: 'BlogEditingPage', segment: 'blog-editing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__pipes_pipes_module__["a" /* PipesModule */],
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
                __WEBPACK_IMPORTED_MODULE_14__pages_blog_editing_blog_editing__["a" /* BlogEditingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__providers_groceries_service_groceries_service__["a" /* GroceriesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_input_dialog_input_dialog__["a" /* InputDialogProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_account_service_account_service__["a" /* AccountServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_24__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_service_email_validation__["a" /* EmailValidationService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_blog_service_blog_service__["a" /* BlogServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 524:
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
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

/***/ 810:
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

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/qq/Desktop/maryville_modules/665-adv-softwareDevelopment/week8/final-project-qiaoqiao124/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pipes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_moment__ = __webpack_require__(831);
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

/***/ 831:
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

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 364,
	"./af.js": 364,
	"./ar": 365,
	"./ar-dz": 366,
	"./ar-dz.js": 366,
	"./ar-kw": 367,
	"./ar-kw.js": 367,
	"./ar-ly": 368,
	"./ar-ly.js": 368,
	"./ar-ma": 369,
	"./ar-ma.js": 369,
	"./ar-sa": 370,
	"./ar-sa.js": 370,
	"./ar-tn": 371,
	"./ar-tn.js": 371,
	"./ar.js": 365,
	"./az": 372,
	"./az.js": 372,
	"./be": 373,
	"./be.js": 373,
	"./bg": 374,
	"./bg.js": 374,
	"./bm": 375,
	"./bm.js": 375,
	"./bn": 376,
	"./bn-bd": 377,
	"./bn-bd.js": 377,
	"./bn.js": 376,
	"./bo": 378,
	"./bo.js": 378,
	"./br": 379,
	"./br.js": 379,
	"./bs": 380,
	"./bs.js": 380,
	"./ca": 381,
	"./ca.js": 381,
	"./cs": 382,
	"./cs.js": 382,
	"./cv": 383,
	"./cv.js": 383,
	"./cy": 384,
	"./cy.js": 384,
	"./da": 385,
	"./da.js": 385,
	"./de": 386,
	"./de-at": 387,
	"./de-at.js": 387,
	"./de-ch": 388,
	"./de-ch.js": 388,
	"./de.js": 386,
	"./dv": 389,
	"./dv.js": 389,
	"./el": 390,
	"./el.js": 390,
	"./en-au": 391,
	"./en-au.js": 391,
	"./en-ca": 392,
	"./en-ca.js": 392,
	"./en-gb": 393,
	"./en-gb.js": 393,
	"./en-ie": 394,
	"./en-ie.js": 394,
	"./en-il": 395,
	"./en-il.js": 395,
	"./en-in": 396,
	"./en-in.js": 396,
	"./en-nz": 397,
	"./en-nz.js": 397,
	"./en-sg": 398,
	"./en-sg.js": 398,
	"./eo": 399,
	"./eo.js": 399,
	"./es": 400,
	"./es-do": 401,
	"./es-do.js": 401,
	"./es-mx": 402,
	"./es-mx.js": 402,
	"./es-us": 403,
	"./es-us.js": 403,
	"./es.js": 400,
	"./et": 404,
	"./et.js": 404,
	"./eu": 405,
	"./eu.js": 405,
	"./fa": 406,
	"./fa.js": 406,
	"./fi": 407,
	"./fi.js": 407,
	"./fil": 408,
	"./fil.js": 408,
	"./fo": 409,
	"./fo.js": 409,
	"./fr": 410,
	"./fr-ca": 411,
	"./fr-ca.js": 411,
	"./fr-ch": 412,
	"./fr-ch.js": 412,
	"./fr.js": 410,
	"./fy": 413,
	"./fy.js": 413,
	"./ga": 414,
	"./ga.js": 414,
	"./gd": 415,
	"./gd.js": 415,
	"./gl": 416,
	"./gl.js": 416,
	"./gom-deva": 417,
	"./gom-deva.js": 417,
	"./gom-latn": 418,
	"./gom-latn.js": 418,
	"./gu": 419,
	"./gu.js": 419,
	"./he": 420,
	"./he.js": 420,
	"./hi": 421,
	"./hi.js": 421,
	"./hr": 422,
	"./hr.js": 422,
	"./hu": 423,
	"./hu.js": 423,
	"./hy-am": 424,
	"./hy-am.js": 424,
	"./id": 425,
	"./id.js": 425,
	"./is": 426,
	"./is.js": 426,
	"./it": 427,
	"./it-ch": 428,
	"./it-ch.js": 428,
	"./it.js": 427,
	"./ja": 429,
	"./ja.js": 429,
	"./jv": 430,
	"./jv.js": 430,
	"./ka": 431,
	"./ka.js": 431,
	"./kk": 432,
	"./kk.js": 432,
	"./km": 433,
	"./km.js": 433,
	"./kn": 434,
	"./kn.js": 434,
	"./ko": 435,
	"./ko.js": 435,
	"./ku": 436,
	"./ku.js": 436,
	"./ky": 437,
	"./ky.js": 437,
	"./lb": 438,
	"./lb.js": 438,
	"./lo": 439,
	"./lo.js": 439,
	"./lt": 440,
	"./lt.js": 440,
	"./lv": 441,
	"./lv.js": 441,
	"./me": 442,
	"./me.js": 442,
	"./mi": 443,
	"./mi.js": 443,
	"./mk": 444,
	"./mk.js": 444,
	"./ml": 445,
	"./ml.js": 445,
	"./mn": 446,
	"./mn.js": 446,
	"./mr": 447,
	"./mr.js": 447,
	"./ms": 448,
	"./ms-my": 449,
	"./ms-my.js": 449,
	"./ms.js": 448,
	"./mt": 450,
	"./mt.js": 450,
	"./my": 451,
	"./my.js": 451,
	"./nb": 452,
	"./nb.js": 452,
	"./ne": 453,
	"./ne.js": 453,
	"./nl": 454,
	"./nl-be": 455,
	"./nl-be.js": 455,
	"./nl.js": 454,
	"./nn": 456,
	"./nn.js": 456,
	"./oc-lnc": 457,
	"./oc-lnc.js": 457,
	"./pa-in": 458,
	"./pa-in.js": 458,
	"./pl": 459,
	"./pl.js": 459,
	"./pt": 460,
	"./pt-br": 461,
	"./pt-br.js": 461,
	"./pt.js": 460,
	"./ro": 462,
	"./ro.js": 462,
	"./ru": 463,
	"./ru.js": 463,
	"./sd": 464,
	"./sd.js": 464,
	"./se": 465,
	"./se.js": 465,
	"./si": 466,
	"./si.js": 466,
	"./sk": 467,
	"./sk.js": 467,
	"./sl": 468,
	"./sl.js": 468,
	"./sq": 469,
	"./sq.js": 469,
	"./sr": 470,
	"./sr-cyrl": 471,
	"./sr-cyrl.js": 471,
	"./sr.js": 470,
	"./ss": 472,
	"./ss.js": 472,
	"./sv": 473,
	"./sv.js": 473,
	"./sw": 474,
	"./sw.js": 474,
	"./ta": 475,
	"./ta.js": 475,
	"./te": 476,
	"./te.js": 476,
	"./tet": 477,
	"./tet.js": 477,
	"./tg": 478,
	"./tg.js": 478,
	"./th": 479,
	"./th.js": 479,
	"./tk": 480,
	"./tk.js": 480,
	"./tl-ph": 481,
	"./tl-ph.js": 481,
	"./tlh": 482,
	"./tlh.js": 482,
	"./tr": 483,
	"./tr.js": 483,
	"./tzl": 484,
	"./tzl.js": 484,
	"./tzm": 485,
	"./tzm-latn": 486,
	"./tzm-latn.js": 486,
	"./tzm.js": 485,
	"./ug-cn": 487,
	"./ug-cn.js": 487,
	"./uk": 488,
	"./uk.js": 488,
	"./ur": 489,
	"./ur.js": 489,
	"./uz": 490,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 490,
	"./vi": 492,
	"./vi.js": 492,
	"./x-pseudo": 493,
	"./x-pseudo.js": 493,
	"./yo": 494,
	"./yo.js": 494,
	"./zh-cn": 495,
	"./zh-cn.js": 495,
	"./zh-hk": 496,
	"./zh-hk.js": 496,
	"./zh-mo": 497,
	"./zh-mo.js": 497,
	"./zh-tw": 498,
	"./zh-tw.js": 498
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
webpackContext.id = 833;

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(43);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(159);
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

},[499]);
//# sourceMappingURL=main.js.map