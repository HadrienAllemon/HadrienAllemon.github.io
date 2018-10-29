(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'book-worm';
        var config = {
            apiKey: "AIzaSyB2tnJKG85nlEiQsBuWh2PmIaXXKM48W6s",
            authDomain: "book-worm-22daf.firebaseapp.com",
            databaseURL: "https://book-worm-22daf.firebaseio.com",
            projectId: "book-worm-22daf",
            storageBucket: "book-worm-22daf.appspot.com",
            messagingSenderId: "555785235576"
        };
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-list/single-book/single-book.component */ "./src/app/book-list/single-book/single-book.component.ts");
/* harmony import */ var _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-list/book-form/book-form.component */ "./src/app/book-list/book-form/book-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/books.service */ "./src/app/services/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'auth/signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'auth/signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
    { path: 'books', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"] },
    { path: 'books/new', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], component: _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_10__["BookFormComponent"] },
    { path: 'books/view/:id', canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], component: _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_9__["SingleBookComponent"] },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '**', redirectTo: 'books' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"],
                _book_list_single_book_single_book_component__WEBPACK_IMPORTED_MODULE_9__["SingleBookComponent"],
                _book_list_book_form_book_form_component__WEBPACK_IMPORTED_MODULE_10__["BookFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_books_service__WEBPACK_IMPORTED_MODULE_14__["BooksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <h2>Sign In</h2>\n    <form [formGroup]='signinForm' (ngSubmit)='onSubmit()'>\n      <div class=\"form-group\">\n        <label for=\"email\">Email Adress</label>\n        <input type=\"text\"\n               id='email'\n               class='form-control'\n               formControlName='email' />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\"\n               id='password'\n               class='form-control'\n               formControlName='password' />\n      </div>\n      <button class='btn btn-primary'\n              type=\"submit\" name=\"button\"\n              [disabled]='signinForm.invalid'\n              >Create</button>\n    </form>\n    <p class='text-danger'>{{ errorMessage }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninComponent.prototype.initForm = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signinForm.get('email').value;
        var password = this.signinForm.get('password').value;
        this.authService.signInUser(email, password).then(function () {
            _this.router.navigate(['/books']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <h2>Create a new account</h2>\n    <form [formGroup]='signupForm' (ngSubmit)='onSubmit()'>\n      <div class=\"form-group\">\n        <label for=\"email\">Email Adress</label>\n        <input type=\"text\"\n               id='email'\n               class='form-control'\n               formControlName='email' />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\"\n               id='password'\n               class='form-control'\n               formControlName='password' />\n      </div>\n      <button class='btn btn-primary'\n              type=\"submit\" name=\"button\"\n              [disabled]='signupForm.invalid'\n              >Create</button>\n    </form>\n    <p class='text-danger'>{{ errorMessage }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.initForm = function () {
        this.signupForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        console.log('yes');
        this.authService.createNewUser(email, password).then(function () {
            _this.router.navigate(['/books']);
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWZvcm0vYm9vay1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <form [formGroup]='bookForm' (ngSubmit)='onSaveBook()'>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\"\n               name=\"title\"\n               id='title'\n               class='form-control'\n               formControlName='title'\n               placeholder='Title'>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"author\">Author</label>\n        <input type=\"text\"\n               class='form-control'\n               name=\"author\"\n               placeholder='Author'\n               id='author'\n               formControlName='author'>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"synopsis\">Synopsis</label>\n        <textarea type=\"text\"\n               class='form-control'\n               name=\"synopsis\"\n               placeholder='Synopsis'\n               id='synopsis'\n               formControlName='synopsis'>\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <h4>Add a picture</h4>\n        <input type=\"file\"\n               name=\"photo\"\n               id='photo'\n               (change)='detectFile($event)'\n               accept='image/*'>\n        <p class='text-success' *ngIf='fileUploaded'>File uploaded !</p>\n      </div>\n      <button class='btn btn-success' type=\"submit\" [disabled]='bookForm.invalid || fileIsUploading'>Create</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-form/book-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/book-list/book-form/book-form.component.ts ***!
  \************************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/models/book.model.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(formBuilder, booksService, router) {
        this.formBuilder = formBuilder;
        this.booksService = booksService;
        this.router = router;
        this.fileIsUploading = false;
        this.fileUploaded = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    BookFormComponent.prototype.initForm = function () {
        this.bookForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            synopsis: ""
        });
    };
    BookFormComponent.prototype.onSaveBook = function () {
        var title = this.bookForm.get('title').value;
        var author = this.bookForm.get('author').value;
        var synopsis = this.bookForm.get('synopsis').value;
        var newBook = new _models_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"](title, author);
        var fileUrl = this.fileUrl;
        newBook.synopsis = synopsis;
        if (fileUrl && fileUrl !== '') {
            newBook.photo = this.fileUrl;
        }
        this.booksService.createNewBook(newBook);
        this.router.navigate(['/books']);
    };
    BookFormComponent.prototype.onUploadFile = function (file) {
        var _this = this;
        this.fileIsUploading = true;
        this.booksService.uploadFile(file).then(function (url) {
            _this.fileUrl = url;
            _this.fileIsUploading = false;
            _this.fileUploaded = true;
        });
    };
    BookFormComponent.prototype.detectFile = function (event) {
        this.onUploadFile(event.target.files[0]);
    };
    BookFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-list/book-form/book-form.component.html"),
            styles: [__webpack_require__(/*! ./book-form.component.css */ "./src/app/book-list/book-form/book-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h2>Vos livres</h2>\n    <div class=\"list-group\">\n      <div\n        class=\"list-group-item\"\n        *ngFor=\"let book of books; let i = index\"\n        (click)=\"onViewBook(i)\">\n        <h3 class=\"list-group-item-heading\">\n          {{ book.title }}\n        </h3>\n        <button class=\"btn btn-default pull-right\" (click)=\"onDeleteBook(book)\">\n          <span class=\"glyphicon glyphicon-minus\"></span>\n        </button>\n        <p class=\"list-group-item-text\">{{ book.author }}</p>\n        <div>\n\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"onNewBook()\">Nouveau livre</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(router, booksService) {
        this.router = router;
        this.booksService = booksService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksSubscription = this.booksService.BookSubject.subscribe(function (books) {
            _this.books = books;
        });
        this.booksService.emitBooks();
    };
    BookListComponent.prototype.onNewBook = function () {
        this.router.navigate(['/books', 'new']);
    };
    BookListComponent.prototype.onDeleteBook = function (book) {
        this.booksService.removeBook(book);
    };
    BookListComponent.prototype.onViewBook = function (id) {
        this.router.navigate(['/books', 'view', id]);
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9zaW5nbGUtYm9vay9zaW5nbGUtYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.html":
/*!******************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img style='max-width:400px' *ngIf='book.photo' [src]='book.photo'>\n    <h1>{{ book.title }}</h1>\n    <h3>{{ book.author }}</h3>\n    <p>{{ book.synopsis }}</p>\n    <button class=\"btn btn-default\" (click)=\"onBack()\">Retour</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/single-book/single-book.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/book-list/single-book/single-book.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBookComponent", function() { return SingleBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/book.model */ "./src/app/models/book.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/services/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleBookComponent = /** @class */ (function () {
    function SingleBookComponent(route, booksService, router) {
        this.route = route;
        this.booksService = booksService;
        this.router = router;
    }
    SingleBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book = new _models_book_model__WEBPACK_IMPORTED_MODULE_1__["Book"]('', '');
        var id = this.route.snapshot.params['id'];
        this.booksService.getSingleBook(+id).then(function (book) {
            _this.photo = book.photo;
            console.log(_this.photo, book.photo);
            _this.book = book;
        });
        console.log(this.photo);
    };
    SingleBookComponent.prototype.onBack = function () {
        this.router.navigate(['/books']);
    };
    SingleBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-book',
            template: __webpack_require__(/*! ./single-book.component.html */ "./src/app/book-list/single-book/single-book.component.html"),
            styles: [__webpack_require__(/*! ./single-book.component.css */ "./src/app/book-list/single-book/single-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SingleBookComponent);
    return SingleBookComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"books\">Livres</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li routerLinkActive=\"active\" *ngIf='!isAuth'>\n        <a routerLink=\"auth/signup\">Create an account</a>\n      </li>\n      <li routerLinkActive=\"active\" *ngIf='!isAuth'>\n        <a routerLink=\"auth/signin\">Sign In</a>\n      </li>\n      <li>\n        <a (click)='onSignOut()'\n        style='cursor:pointer'\n        *ngIf='isAuth'>Sign Out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    };
    HeaderComponent.prototype.onSignOut = function () {
        this.authService.signOutUser();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/book.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/book.model.ts ***!
  \**************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/auth', 'signin']);
                    resolve(false);
                }
            });
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.createNewUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
                .then(function () { resolve(); console.log('success'); }, function (error) { reject(error); });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
                .then(function () { resolve(); }, function (error) { reject(error); });
        });
    };
    AuthService.prototype.signOutUser = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksService = /** @class */ (function () {
    function BooksService() {
        this.books = [];
        this.BookSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getBooks();
    }
    BooksService.prototype.emitBooks = function () {
        this.BookSubject.next(this.books);
    };
    BooksService.prototype.saveBooks = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books').set(this.books);
    };
    BooksService.prototype.getBooks = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books')
            .on('value', function (data) {
            _this.books = data.val() ? data.val() : [];
            _this.emitBooks();
        });
    };
    BooksService.prototype.getSingleBook = function (id) {
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('/books/' + id).once('value').then(function (data) {
                resolve(data.val());
            }, function (error) {
                reject(error);
            });
        });
    };
    BooksService.prototype.createNewBook = function (newBook) {
        this.books.push(newBook);
        this.saveBooks();
        this.emitBooks();
        console.log(this.books);
    };
    BooksService.prototype.removeBook = function (book) {
        if (book.photo) {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().refFromURL(book.photo);
            storageRef.delete().then(function () {
                console.log('photo removed');
            }, function (error) {
                console.log('there was an error while deleting the picture: ' + error);
            });
        }
        var bookIndexToRemove = this.books.findIndex(function (bookEl) {
            if (bookEl === book) {
                return true;
            }
        });
        this.books.splice(bookIndexToRemove, 1);
        this.saveBooks();
        this.emitBooks();
    };
    BooksService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            var almostUniqueFileName = Date.now().toString();
            var upload = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref()
                .child('images/' + almostUniqueFileName + file.name).put(file);
            upload.on(firebase__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function () {
                console.log('Chargement…');
            }, function (error) {
                console.log('Erreur de chargement ! : ' + error);
                reject();
            }, function () {
                resolve(upload.snapshot.ref.getDownloadURL());
            });
        });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gaufre A\Desktop\GIT\typescript experiment\book-worm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map