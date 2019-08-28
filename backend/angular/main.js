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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component */ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.ts");
/* harmony import */ var _userplan_userplannotsubscribed_subscribeduserlist_userplannotsubscribed_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component */ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.ts");
/* harmony import */ var _users_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/admin/admin/admin.component */ "./src/app/users/admin/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _posts_post_messagetemplate_post_messagetemplate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-messagetemplate/post-messagetemplate.component */ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.ts");
/* harmony import */ var _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userplan/userplan-freetrail/userplan-freetrail.component */ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _userplan_userplan_subscribeduserlist_userplan_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component */ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.ts");













var routes = [
    { path: 'Messages', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'createtemp', component: _posts_post_messagetemplate_post_messagetemplate_component__WEBPACK_IMPORTED_MODULE_9__["PostMessagetemplateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_8__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'freetrial', component: _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_10__["UserplanFreetrailComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'subscribed', component: _userplan_userplan_subscribeduserlist_userplan_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_12__["UserplanSubscribeduserlistComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'notfreetrial', component: _userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_1__["UserplannotapprooveFreetrailComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'notsubscribed', component: _userplan_userplannotsubscribed_subscribeduserlist_userplannotsubscribed_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_2__["UserplannotsubscribedSubscribeduserlistComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: "", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'edit/:postId', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_8__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'Admin List', component: _users_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _posts_post_selectionlist_post_selectionlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/post-selectionlist/post-selectionlist.component */ "./src/app/posts/post-selectionlist/post-selectionlist.component.ts");
/* harmony import */ var _posts_post_messagetemplate_post_messagetemplate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/post-messagetemplate/post-messagetemplate.component */ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.ts");
/* harmony import */ var _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userplan/userplan-freetrail/userplan-freetrail.component */ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.ts");
/* harmony import */ var _userplan_userplan_startsubscription_userplan_startsubscription_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userplan/userplan-startsubscription/userplan-startsubscription.component */ "./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.ts");
/* harmony import */ var _userplan_userplan_subscribeduserlist_userplan_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component */ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _users_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/admin/admin/admin.component */ "./src/app/users/admin/admin/admin.component.ts");
/* harmony import */ var _userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component */ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.ts");
/* harmony import */ var _userplan_userplannotsubscribed_subscribeduserlist_userplannotsubscribed_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component */ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_9__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__["PostListComponent"],
                _posts_post_selectionlist_post_selectionlist_component__WEBPACK_IMPORTED_MODULE_13__["PostSelectionlistComponent"],
                _posts_post_messagetemplate_post_messagetemplate_component__WEBPACK_IMPORTED_MODULE_14__["PostMessagetemplateComponent"],
                _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_15__["UserplanFreetrailComponent"],
                _userplan_userplan_startsubscription_userplan_startsubscription_component__WEBPACK_IMPORTED_MODULE_16__["UserplanStartsubscriptionComponent"],
                _userplan_userplan_subscribeduserlist_userplan_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_17__["UserplanSubscribeduserlistComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _users_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                _userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_20__["UserplannotapprooveFreetrailComponent"],
                _userplan_userplannotsubscribed_subscribeduserlist_userplannotsubscribed_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_21__["UserplannotsubscribedSubscribeduserlistComponent"],
                _userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_20__["DilogdateStartendComponent"],
                _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_15__["DilogSubscribeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            entryComponents: [_userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_20__["UserplannotapprooveFreetrailComponent"], _userplan_userplannotapproove_freetrail_userplannotapproove_freetrail_component__WEBPACK_IMPORTED_MODULE_20__["DilogdateStartendComponent"], _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_15__["UserplanFreetrailComponent"], _userplan_userplannotsubscribed_subscribeduserlist_userplannotsubscribed_subscribeduserlist_component__WEBPACK_IMPORTED_MODULE_21__["UserplannotsubscribedSubscribeduserlistComponent"], _userplan_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_15__["DilogSubscribeComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/']);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isSadmin = false;
        this.userEmail = "";
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userdetailUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userTypeListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        if (this.getAuthData()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.navToMessage = function () {
        this.router.navigate(['/Messages']);
    };
    AuthService.prototype.getIsSAdmin = function () {
        if (this.getUSer()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.getUserTypeListener = function () {
        return this.userTypeListener.asObservable();
    };
    AuthService.prototype.createUser = function (email, password) {
        var authData = { email: email, password: password };
        this.http
            .post("http://75.98.169.159:1000/api/user/signup", authData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.userEmail = email;
        this.http
            .post("http://75.98.169.159:1000/api/adminuser/login", authData)
            .subscribe(function (response) {
            if (response.token) {
                var token = response.token;
                _this.token = token;
                if (token) {
                    var expiresInDuration = response.expiresIn;
                    _this.setAuthTimer(expiresInDuration);
                    _this.isAuthenticated = true;
                    if (response.type == "sadmin") {
                        _this.isSadmin = true;
                        _this.userTypeListener.next(true);
                    }
                    _this.authStatusListener.next(true);
                    var now = new Date();
                    var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    console.log(expirationDate);
                    _this.saveAuthData(token, expirationDate);
                    _this.router.navigate(['/Messages']);
                }
            }
            else {
                alert("Authorisation Failed");
                _this.authStatusListener.next(false);
            }
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem("token", token);
        if (this.isSadmin) {
            localStorage.setItem("isSadmin", "1");
        }
        localStorage.setItem("expiration", expirationDate.toISOString());
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("isSadmin");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    };
    AuthService.prototype.getUSer = function () {
        var token = localStorage.getItem("isSadmin");
        if (!token) {
            return;
        }
        else if (token == "1") {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getUserList = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/adminuser")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    email: post.email,
                    type: post.type
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.userdetails = transformedPosts;
            _this.userdetailUpdated.next(_this.userdetails.slice());
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 100%;\n  }\n  \n  mat-spinner {\n    margin: auto;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBtYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"!isLoading\">Login</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        this.authListenerSubs = this.authService.getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.isLoading = isAuthenticated;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/custom/dilog-subscribe/dilog-subscribe.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/custom/dilog-subscribe/dilog-subscribe.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n\n  <p>\n      <mat-form-field>\n\n    <input matInput #fromInput [matDatepicker]=\"picker\" placeholder=\"fromdate\"  [(ngModel)]=\"stardate\"  (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" disabled>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n</p>\n\n<p>\n<mat-form-field>\n    <input matInput #endInput [min]=\"stardate\" [matDatepicker]=\"picker2\" placeholder=\"enddate\"  [(ngModel)]=\"enddate\" (dateInput)=\"addEnddate('input', $event)\" (dateChange)=\"addEnddate('change', $event)\"disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n     \n  </mat-form-field>\n</p>\n<p>\n       <mat-form-field>\n          <input matInput [(ngModel)]=\"data.amount\" rows=\"1\" placeholder=\"Amount\"/>\n        </mat-form-field>\n  </p>\n  \n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button (click)=\"saveClick()\"  cdkFocusInitial>Save</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/custom/dilogdate-startend/dilogdate-startend.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/custom/dilogdate-startend/dilogdate-startend.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <p>\n      <mat-form-field>\n\n    <input matInput #fromInput [matDatepicker]=\"picker\" placeholder=\"From Date\"  [(ngModel)]=\"stardate\" (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" disabled>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n</p>\n\n<p>\n<mat-form-field>\n    <input matInput #endInput [min]=\"stardate\" name=\"enddate\" [(ngModel)]=\"enddate\"\n   [matDatepicker]=\"picker2\" placeholder=\"End Date\" (dateInput)=\"addEnddate('input', $event)\" (dateChange)=\"addEnddate('change', $event)\"disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n     \n  </mat-form-field>\n</p>\n\n\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button (click)=\"saveClick()\" cdkFocusInitial>Save</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.spacerright {\n  flex: 10;\n}\n\nul {\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zcGFjZXJyaWdodCB7XG4gIGZsZXg6IDEwO1xufVxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n  <span>\n    <a routerLink=\"/\">MyMessages</a>\n  </span>\n  <span class=\"spacer\"></span>\n  <ul>\n    <li>\n    <a mat-button routerLink=\"/createtemp\" routerLinkActive=\"mat-accent\">Create Template</a>\n  </li>\n</ul>\n<span class=\"spacerright\"></span>\n  <ul>\n    <li>\n      <a mat-button routerLink=\"/create\" routerLinkActive=\"mat-accent\">New Post</a>\n    </li>\n  </ul>\n  <span class=\"spaceright\"></span>\n  <ul>\n    <li>\n    <a mat-button routerLink=\"/freetrial\" routerLinkActive=\"mat-accent\">Free trial</a>\n  </li>\n</ul>\n<span class=\"spaceright\"></span>\n  <ul>\n    <li>\n    <a mat-button routerLink=\"/subscribed\" routerLinkActive=\"mat-accent\">Subscribed User</a>\n  </li>\n</ul>\n</mat-toolbar> -->\n<mat-toolbar color=\"primary\">\n  <ul>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a mat-button routerLink=\"/\" routerLinkActive=\"mat-accent\">Login</a>\n    </li>\n      <li *ngIf=\"userIsAuthenticated && userIsSadmin\">\n      <a mat-button routerLink=\"/createtemp\" routerLinkActive=\"mat-accent\">Create Template</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n     <a mat-button routerLink=\"/create\" routerLinkActive=\"mat-accent\">New Post</a>\n      </li>\n      <li *ngIf=\"userIsAuthenticated && userIsSadmin\">\n      <a mat-button routerLink=\"/freetrial\" routerLinkActive=\"mat-accent\">Free Trial</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated && userIsSadmin\">\n      <a mat-button routerLink=\"/notfreetrial\" routerLinkActive=\"mat-accent\">Free Trial Pending</a>\n    </li>\n      <li *ngIf=\"userIsAuthenticated && userIsSadmin\">\n      <a mat-button routerLink=\"/subscribed\" routerLinkActive=\"mat-accent\">Subscribed User</a>\n    </li>\n  \n  <li *ngIf=\"userIsAuthenticated && userIsSadmin\">\n  <a mat-button routerLink=\"/notsubscribed\" routerLinkActive=\"mat-accent\">Subscription Pending</a>\n</li>\n    <li *ngIf=\"userIsAuthenticated\">\n        <a mat-button routerLink=\"/Messages\" routerLinkActive=\"mat-accent\">Messages</a>\n      </li>\n      <li *ngIf=\"userIsAuthenticated && userIsSadmin\">\n        <a mat-button routerLink=\"/Admin List\" routerLinkActive=\"mat-accent\">Admin List</a>\n      </li>\n    <li *ngIf=\"userIsAuthenticated\">\n        <button mat-button (click)=\"onLogout()\">Logout</button>\n      </li>\n\n      <li >\n\n     \n    \n  </ul>\n</mat-toolbar>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
        this.userIsSadmin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.userIsSadmin = this.authService.getIsSAdmin();
        console.log(this.authService.getIsSAdmin());
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.authUserTpye = this.authService.getUserTypeListener().subscribe(function (isSadmin) {
            _this.userIsSadmin = isSadmin;
        });
        if (this.userIsAuthenticated) {
            this.authService.navToMessage();
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n\n}\n\n/* mat-card\n{\n  position: absolute;\n  bottom: 10px;\n  width: 50%;\n\n} */\n\nmat-spinner {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXOztBQUViOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLyogbWF0LWNhcmRcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG5cbn0gKi9cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onSavePost(postForm)\" #postForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <textarea\n        matInput\n        rows=\"4\"\n        type=\"text\"\n        name=\"title\"\n        [ngModel]=\"selectedprefix + messagetemplate + bottomspace + selectedSuffix\"\n        required\n        minlength=\"3\"\n        placeholder=\"Signal Message\"\n        #title=\"ngModel\"></textarea>\n      <mat-error *ngIf=\"title.invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Select message template\" [(value)]=\"messagetemplate\">\n        <mat-option *ngFor=\"let food of templateNameArray\" [value]=\"food.message\">\n          {{food.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n      <!-- <mat-form-field>\n          <mat-select placeholder=\"Select Prefix\" [(value)]=\"selectedprefix\">\n            <mat-option *ngFor=\"let food of preffixArray\" [value]=\"food\">\n                {{food}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-select placeholder=\"Select Suffix\" [(value)]=\"selectedSuffix\">\n              <mat-option *ngFor=\"let food of suffixArray\" [value]=\"food\">\n                {{food}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field> -->\n         \n            <button\n            mat-raised-button\n            color=\"accent\"\n            type=\"submit\">Send Post</button>\n  </form>\n</mat-card>\n<app-post-selectionlist></app-post-selectionlist>\n"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");




var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
        this.selectedprefix = '';
        this.selectedSuffix = '';
        this.messagetemplate = '';
        this.enteredTitle = "";
        this.preffixArray = [];
        this.suffixArray = [];
        this.templateNameArray = [];
        this.bottomspace = "\n\n\n";
        this.enteredContent = "";
        this.posttemplate = [];
        this.isLoading = false;
        this.mode = "create";
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        // this.route.paramMap.subscribe((paramMap: ParamMap) => {
        //   if (paramMap.has("postId")) {
        //     this.mode = "edit";
        //     this.postId = paramMap.get("postId");
        //     this.isLoading = true;
        //     this.postsService.getPost(this.postId).subscribe(postData => {
        //       this.isLoading = false;
        //       this.post = {id: postData._id, title: postData.title, services: postData.services};
        //     });
        //   } else {
        //     this.isLoading = false;
        //     alert("remove alert")
        //     this.mode = "create";
        //     this.postId = null;
        //   }
        // });
        var _this = this;
        this.postsService.getPostUpdateListener()
            .subscribe(function (posts) {
            _this.isLoading = false;
        });
        this.postsService.getMesageTemplate();
        this.postsSub = this.postsService.getPostTemplateUpdateListener()
            .subscribe(function (poststemp) {
            _this.isLoading = false;
            _this.posttemplate = poststemp;
            for (var _i = 0, _a = _this.posttemplate; _i < _a.length; _i++) {
                var val = _a[_i];
                if (val.preffix) {
                    _this.preffixArray.push(val.preffix);
                }
                if (val.suffix) {
                    _this.suffixArray.push(val.suffix);
                }
                if (val.templatename) {
                    _this.templateNameArray.push({ 'name': val.templatename, 'message': val.message });
                }
            }
        });
    };
    PostCreateComponent.prototype.onSavePost = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.postsService.addPost(form.value.title.replace(/\s+/, ""), []);
        // if (this.mode === "create") {
        //   this.postsService.addPost(form.value.title, []);
        // } else {
        //   this.postsService.updatePost(
        //     this.postId,
        //     form.value.title,
        //     []
        //   );
        // }
        this.selectedprefix = '';
        this.messagetemplate = '';
        this.selectedSuffix = '';
        form.resetForm();
    };
    PostCreateComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-post-create",
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nmat-list\n{\n  margin: auto;\n}\n\n.info-text {\n  text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubWF0LWxpc3RcbntcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<!-- <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\" > -->\n\n\n  <!-- <mat-expansion-panel *ngFor=\"let post of posts\"> -->\n      <mat-list role=\"list\" *ngFor=\"let post of posts\" >\n          <mat-list-item role=\"listitem\">{{ post.title }}</mat-list-item>\n          <mat-divider></mat-divider>\n        </mat-list>\n\n    <!-- <mat-expansion-panel-header>\n\n    </mat-expansion-panel-header> -->\n    <!-- <p>{{ post.content }}</p> -->\n    <!-- <mat-action-row>\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>\n    </mat-action-row> -->\n  <!-- </mat-expansion-panel> -->\n<!-- </mat-accordion> -->\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>\n"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService) {
        this.postsService = postsService;
        // posts = [
        //   { title: "First Post", content: "This is the first post's content" },
        //   { title: "Second Post", content: "This is the second post's content" },
        //   { title: "Third Post", content: "This is the third post's content" }
        // ];
        this.posts = [];
        this.isLoading = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe(function (posts) {
            _this.isLoading = false;
            _this.posts = posts;
        });
    };
    PostListComponent.prototype.onDelete = function (postId) {
        this.postsService.deletePost(postId);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-post-list",
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/posts/post-messagetemplate/post-messagetemplate.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1tZXNzYWdldGVtcGxhdGUvcG9zdC1tZXNzYWdldGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1tZXNzYWdldGVtcGxhdGUvcG9zdC1tZXNzYWdldGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/posts/post-messagetemplate/post-messagetemplate.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n    <form (submit)=\"onSavePost(postForm)\" #postForm=\"ngForm\" *ngIf=\"!isLoading\">\n  <!-- <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\"\n    name=\"preffix\" placeholder=\"preffix\" [ngModel]=\"post?.preffix\"\n    #preffix = \"ngModel\">\n  </mat-form-field> -->\n  <!-- <mat-form-field class=\"example-full-width\">\n    <input matInput  placeholder=\"suffix\" type=\"text\"\n    name=\"suffix\"  [ngModel]=\"post?.suffix\"\n    #suffix = \"ngModel\">\n  </mat-form-field> -->\n  <mat-form-field class=\"example-full-width\">\n    <input matInput  placeholder=\"Template Name\" type=\"text\"\n    name=\"name\"  [ngModel]=\"post?.templatename\"\n    #templatename = \"ngModel\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea  matInput placeholder=\"Add message\" name=\"message\" [ngModel]=\"post?.message\"\n    #message = \"ngModel\"></textarea>\n  </mat-form-field>\n  <button mat-raised-button color=\"accent\" type=\"submit\">Save Record</button>\n</form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/posts/post-messagetemplate/post-messagetemplate.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostMessagetemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMessagetemplateComponent", function() { return PostMessagetemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostMessagetemplateComponent = /** @class */ (function () {
    function PostMessagetemplateComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
        this.isLoading = false;
    }
    PostMessagetemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPostTemplateUpdateListener()
            .subscribe(function (posts) {
            _this.isLoading = false;
        });
    };
    PostMessagetemplateComponent.prototype.onSavePost = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.postsService.addTemplate(form.value.message, form.value.name, form.value.preffix, form.value.suffix);
    };
    PostMessagetemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-messagetemplate',
            template: __webpack_require__(/*! ./post-messagetemplate.component.html */ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.html"),
            styles: [__webpack_require__(/*! ./post-messagetemplate.component.css */ "./src/app/posts/post-messagetemplate/post-messagetemplate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PostMessagetemplateComponent);
    return PostMessagetemplateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-selectionlist/post-selectionlist.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/posts/post-selectionlist/post-selectionlist.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3Qtc2VsZWN0aW9ubGlzdC9wb3N0LXNlbGVjdGlvbmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/posts/post-selectionlist/post-selectionlist.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/posts/post-selectionlist/post-selectionlist.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfService\" (click)=\"onAreaListControlChanged(shoe)\" [value]=\"shoe\" checkboxPosition=\"before\">\n    {{shoe.toUpperCase()}}\n  </mat-list-option>\n</mat-selection-list>\n\n<!-- <p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p> -->"

/***/ }),

/***/ "./src/app/posts/post-selectionlist/post-selectionlist.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/posts/post-selectionlist/post-selectionlist.component.ts ***!
  \**************************************************************************/
/*! exports provided: PostSelectionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSelectionlistComponent", function() { return PostSelectionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PostSelectionlistComponent = /** @class */ (function () {
    function PostSelectionlistComponent(postsService) {
        this.postsService = postsService;
        this.typesOfService = ['basic forex pack', 'premium forex pack', 'hni forex pack',
            'basic comex pack', 'premium comex pack',
            'Hhni comex pack'];
        this.selectedService = [];
    }
    PostSelectionlistComponent.prototype.ngOnInit = function () { };
    PostSelectionlistComponent.prototype.onAreaListControlChanged = function (list) {
        var indexelement = this.selectedService.indexOf(list);
        if (indexelement !== -1) {
            this.selectedService.splice(indexelement, 1);
            this.postsService.addSevices(this.selectedService);
        }
        else {
            this.selectedService.push(list);
            this.postsService.addSevices(this.selectedService);
        }
    };
    PostSelectionlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-post-selectionlist',
            template: __webpack_require__(/*! ./post-selectionlist.component.html */ "./src/app/posts/post-selectionlist/post-selectionlist.component.html"),
            styles: [__webpack_require__(/*! ./post-selectionlist.component.css */ "./src/app/posts/post-selectionlist/post-selectionlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], PostSelectionlistComponent);
    return PostSelectionlistComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var PostsService = /** @class */ (function () {
    function PostsService(http, router, datepipe) {
        this.http = http;
        this.router = router;
        this.datepipe = datepipe;
        this.posts = [];
        this.posttemplate = [];
        this.userdetails = [];
        this.userdetailUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.postsTemplateUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.Services = [];
    }
    PostsService.prototype.getPosts = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/posts")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    title: post.title,
                    services: post.services,
                    id: post._id
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.posts = transformedPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService.prototype.getUserDetail = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/userdetails/freeetrail")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    email: post.Email,
                    services: post.services,
                    country: post.Country,
                    phone: post.PhoneNumber,
                    issubscribed: post.issubscribed,
                    isSubscriptionaproove: post.isSubscriptionaproove,
                    isfreetrailaproove: post.isfreetrailaproove,
                    isexpire: post.isexpire,
                    startdate: _this.datepipe.transform(post.startdate, 'yyyy-MM-dd') ? _this.datepipe.transform(post.startdate, 'yyyy-MM-dd') : '',
                    enddate: _this.datepipe.transform(post.enddate, 'yyyy-MM-dd') ? _this.datepipe.transform(post.enddate, 'yyyy-MM-dd') : '',
                    IP: post.IP,
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.userdetails = transformedPosts;
            _this.userdetailUpdated.next(_this.userdetails.slice());
        });
    };
    PostsService.prototype.getSubscribedUserDetail = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/userdetails/getsubscribeduser")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    email: post.Email,
                    services: post.services,
                    country: post.Country,
                    phone: post.PhoneNumber,
                    issubscribed: post.issubscribed,
                    isSubscriptionaproove: post.isSubscriptionaproove,
                    isfreetrailaproove: post.isfreetrailaproove,
                    isexpire: post.isexpire,
                    startdate: _this.datepipe.transform(post.startdate, 'yyyy-MM-dd') ? _this.datepipe.transform(post.startdate, 'yyyy-MM-dd') : '',
                    enddate: _this.datepipe.transform(post.enddate, 'yyyy-MM-dd') ? _this.datepipe.transform(post.enddate, 'yyyy-MM-dd') : '',
                    IP: post.IP,
                    amountrecive: post.amountrecive,
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            console.log(transformedPosts);
            _this.userdetails = transformedPosts;
            _this.userdetailUpdated.next(_this.userdetails.slice());
        });
    };
    PostsService.prototype.getMesageTemplate = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/posttemplate")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return postData.posts.map(function (postdf) {
                return {
                    suffix: postdf.suffix,
                    preffix: postdf.prefix,
                    message: postdf.message,
                    templatename: postdf.templatename
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.posttemplate = transformedPosts;
            _this.postsTemplateUpdated.next(_this.posttemplate.slice());
        });
    };
    PostsService.prototype.sendAprroveTrialRequest = function (userdetail, startDate, endDate) {
        var _this = this;
        this.http
            .post("http://75.98.169.159:1000/api/userdetails/aproovetrial", { Email: userdetail.map(function (t) { return t.email; }).join(","),
            startdate: startDate,
            endate: endDate })
            .subscribe(function (responseData) {
            if (responseData.posts['nModified']) {
                // this.userdetailUpdated.next([...this.userdetails]);
                _this.getUserDetail();
            }
            else {
            }
        });
    };
    PostsService.prototype.sendinitialSubscriptionRequest = function (userdetail) {
        var _this = this;
        this.http
            .post("http://75.98.169.159:1000/api/userdetails/intialSusbscription", { Email: userdetail.email,
            fromdate: userdetail.fromdate,
            totalamount: userdetail.totalamount,
            amountrecive: userdetail.amountrecive,
            enddate: userdetail.enddate,
            startdate: userdetail.startdate,
            issubscribed: true,
            isSubscriptionaproove: true
        })
            .subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.posts['nModified']) {
                alert("record updated succesfully");
                _this.getUserDetail();
                // userdetail.issubscribed = true
                //this.userdetailUpdated.next([...this.userdetails]);
            }
            else {
                alert("record not updated");
            }
        });
    };
    PostsService.prototype.sendaproovalSubscriptionRequest = function (userdetail) {
        var _this = this;
        this.http
            .post("http://75.98.169.159:1000/api/userdetails/aproveSusbscription", { Email: userdetail.email,
            fromdate: userdetail.fromdate,
            totalamount: userdetail.totalamount,
            amountrecive: userdetail.amountrecive,
            enddate: userdetail.enddate,
            startdate: userdetail.fromdate,
            issubscribed: true
        })
            .subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.posts['nModified']) {
                alert("record updated succesfully");
                userdetail.issubscribed = true;
                _this.userdetailUpdated.next(_this.userdetails.slice());
            }
            else {
                alert("record not updated");
            }
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getPostTemplateUpdateListener = function () {
        return this.postsTemplateUpdated.asObservable();
    };
    PostsService.prototype.getUserDetailListener = function () {
        return this.userdetailUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get("http://75.98.169.159:1000/api/posts/" + id);
    };
    PostsService.prototype.addPost = function (title, services) {
        var _this = this;
        var post = { id: null, title: title, services: this.Services };
        console.log({ id: null, title: title, services: this.Services });
        this.http
            .post("http://75.98.169.159:1000/api/posts", post)
            .subscribe(function (responseData) {
            var id = responseData.postId;
            console.log();
            post.id = id;
            _this.posts.push(post);
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService.prototype.addSevices = function (service) {
        this.Services = service;
    };
    PostsService.prototype.addTemplate = function (message, templatename, prefix, sufix) {
        var _this = this;
        var post = { id: null, message: message, templatename: templatename, preffix: prefix, suffix: sufix };
        this.http
            .post("http://75.98.169.159:1000/posttemplate/template", post)
            .subscribe(function (responseData) {
            var id = responseData.MessageObjId;
            post.id = id;
            _this.posttemplate.push(post);
            _this.postsTemplateUpdated.next(_this.posttemplate.slice());
        });
    };
    PostsService.prototype.updatePost = function (id, title, services) {
        var _this = this;
        var post = { id: id, title: title, services: [] };
        this.http
            .put("http://75.98.169.159:1000/api/posts/" + id, post)
            .subscribe(function (response) {
            var updatedPosts = _this.posts.slice();
            var oldPostIndex = updatedPosts.findIndex(function (p) { return p.id === post.id; });
            updatedPosts[oldPostIndex] = post;
            _this.posts = updatedPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        var _this = this;
        this.http
            .delete("http://75.98.169.159:1000/api/posts/" + postId)
            .subscribe(function () {
            var updatedPosts = _this.posts.filter(function (post) { return post.id !== postId; });
            _this.posts = updatedPosts;
            _this.postsUpdated.next(_this.posts.slice());
        });
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/userplan/userplan-freetrail/userplan-freetrail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  .filter {\n    font-size: 14px;\n    width: 40%;\n  }\n  .dismissbutton{\n    left: 10px;\n    margin: 0;\n  }\n  .buttonright{\n    position: absolute;\n    right: 40px;\n    margin: 0;\n  }\n  .buttonright2{\n    position: absolute;\n    right: 150px;\n    margin: 0;\n  }\n  .buttonright3{\n    position: absolute;\n    right: 270px;\n    margin: 0;\n  }\n  .spacerright {\n    flex: 10;\n  }\n  .mat-column-Email {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 15% !important;\n    width: 15% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-Services {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 20% !important;\n    width: 20% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  /* .mat-column-Phone {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 17% !important;\n    width: 17% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -moz-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n   */\n  .mat-column-Country {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 8% !important;\n    width: 8% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-Select {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 10% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .Free Trial Aprroved {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .IP {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBsYW4vdXNlcnBsYW4tZnJlZXRyYWlsL3VzZXJwbGFuLWZyZWV0cmFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0VBQ1g7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztFQUNYO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUlBOzs7Ozs7Ozs7Ozs7Ozs7SUFlRTtFQUNGO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VycGxhbi91c2VycGxhbi1mcmVldHJhaWwvdXNlcnBsYW4tZnJlZXRyYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbHRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLmRpc21pc3NidXR0b257XG4gICAgbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmJ1dHRvbnJpZ2h0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYnV0dG9ucmlnaHQye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJ1dHRvbnJpZ2h0M3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI3MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc3BhY2VycmlnaHQge1xuICAgIGZsZXg6IDEwO1xuICB9XG5cbiAgLm1hdC1jb2x1bW4tRW1haWwge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1TZXJ2aWNlcyB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIC5tYXQtY29sdW1uLVBob25lIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMTclICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE3JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgICovXG4gIC5tYXQtY29sdW1uLUNvdW50cnkge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLVNlbGVjdCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG5cbiAgLkZyZWUgVHJpYWwgQXBycm92ZWQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAzJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cblxuICAuSVAge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAzJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/userplan/userplan-freetrail/userplan-freetrail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <mat-card  *ngIf=\"isSubscriptionClicked\">\n  <form (submit) = onsendDetail(postForm)  #postForm=\"ngForm\">\n    <p>\n        <mat-form-field>\n            <input\n        matInput\n        rows=\"1\"\n        type=\"text\"\n            disabled [value] = \"selectedUser.email\" />\n        </mat-form-field>\n        </p>\n  <p>\n<mat-form-field>\n  <input matInput #fromInput [matDatepicker]=\"picker\" placeholder=\"fromdate\"   (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" disabled>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n</p>\n\n<p>\n<mat-form-field>\n    <input matInput #endInput [min]=\"selectedUser.fromdate\"  [matDatepicker]=\"picker2\" placeholder=\"enddate\" (dateInput)=\"addEnddate('input', $event)\" (dateChange)=\"addEnddate('change', $event)\"disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n<mat-form-field>\n<input\n[ngModel]=\"selectedUser?.amountrecive\"\nmatInput\nrows=\"1\"\ntype=\"number\"\nname=\"amountrecive\"\nrequired\nplaceholder=\"Amount Recieved\" #amountrecive=\"ngModel\"/>\n<mat-error *ngIf=\"amountrecive.invalid\">Please enter a post title.</mat-error>\n</mat-form-field>\n</p>\n\n<button\nmat-raised-button\ncolor=\"accent\"\ntype=\"submit\">Send Detail</button>\n\n\n<button\nmat-raised-button class = \"dismissbutton\"\ncolor=\"accent\"\ntype=\"dismiss\" (click)=\"dismiss()\">Dismiss</button>\n</form>\n</mat-card> -->\n\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n<mat-card  *ngIf=\"!isLoading\">\n  \n<form>\n<mat-form-field class=\"filter\">\n\n  <input  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n  <button class = \"buttonright2\"\n  mat-raised-button\n  color=\"accent\"\n  type=\"Subscribe\" (click)=\"subscribe()\">Subscribe</button>\n\n  <button class = \"buttonright3\"\n  mat-raised-button\n  color=\"accent\"\n  type=\"trial\" (click)=\"exportRecord()\">Export All Record</button>\n</form>\n\n\n<div class=\"mat-elevation-z8\">\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"Select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <!-- <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container> -->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"Email\">\n    <th mat-header-cell *matHeaderCellDef> Email </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"Services\">\n    <th mat-header-cell *matHeaderCellDef> Services </th>\n    <td mat-cell *matCellDef=\"let element\" > {{element.services}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"Phone\">\n    <th mat-header-cell *matHeaderCellDef> Phone </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"Country\">\n    <th mat-header-cell *matHeaderCellDef> Country </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n  </ng-container>\n   <!-- Symbol Column -->\n\n   <!-- <ng-container matColumnDef=\"Free Trial Aprroved\">\n    <th mat-header-cell *matHeaderCellDef> Free Trial Aprroved </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.isfreetrailaproove}} </td>\n  </!--> -->\n  \n  <ng-container matColumnDef=\"IP\">\n    <th mat-header-cell *matHeaderCellDef>IP</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.IP}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Start Date\">\n    <th mat-header-cell *matHeaderCellDef>Start Date</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.startdate}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"End Date\">\n    <th mat-header-cell *matHeaderCellDef>End Date</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.enddate}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n  </tr>\n</table>\n<!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n</div>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/userplan/userplan-freetrail/userplan-freetrail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserplanFreetrailComponent, DilogSubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserplanFreetrailComponent", function() { return UserplanFreetrailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DilogSubscribeComponent", function() { return DilogSubscribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");







var UserplanFreetrailComponent = /** @class */ (function () {
    function UserplanFreetrailComponent(postsService, dialog) {
        this.postsService = postsService;
        this.dialog = dialog;
        this.isLoading = true;
        this.stardate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'IP', 'Start Date', 'End Date'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplanFreetrailComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplanFreetrailComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplanFreetrailComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DilogSubscribeComponent, {
            width: '250px',
            data: { name: "", animal: "" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.length > 1) {
                _this.isLoading = true;
                console.log(_this.selectedUser);
                _this.selectedUser.startdate = result[0];
                _this.selectedUser.enddate = result[1];
                _this.selectedUser.amountrecive = result[2];
                _this.postsService.sendinitialSubscriptionRequest(_this.selectedUser);
                _this.selection.clear();
            }
            console.log('The dialog was closed');
        });
    };
    UserplanFreetrailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.userdetails = _this.userdetails.filter(function (userdetails) { return userdetails.isfreetrailaproove === true && userdetails.isSubscriptionaproove === false; });
            //    this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.isSubscriptionaproove === false )
            // this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.issubscribed === false )
            _this.dataSource.data = _this.userdetails;
            _this.dismiss();
        });
    };
    UserplanFreetrailComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplanFreetrailComponent.prototype.edit = function () {
    };
    UserplanFreetrailComponent.prototype.exportRecord = function () {
        var csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'Your Holiday List :',
            useBom: true,
            noDownload: false,
            headers: ["Email", "Country", "Phone", "Expire", "Free Trail Aproove", "Subscribed", "Start Date", "End Date", "IP", "Services"]
        };
        var arrayfilter = (this.userdetails.filter(function (userdetails) { return userdetails.isfreetrailaproove === true; }));
        arrayfilter.forEach(function (part, index, theArray) {
            part.newServices = part.services.join(",");
            delete part.services;
            console.log(theArray);
            console.log(arrayfilter);
        });
        delete arrayfilter["services"];
        console.log(arrayfilter);
        new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5__["AngularCsv"](arrayfilter, "Userdata", csvOptions);
    };
    UserplanFreetrailComponent.prototype.subscribe = function () {
        if (this.selection.selected.length == 1) {
            this.isSubscriptionClicked = true;
            var res = this.selection.selected;
            this.selectedUser = res[0];
            this.openDialog();
        }
        else if (this.selection.selected.length == 0) {
            alert("Please select record to subscribe");
        }
        else if (this.selection.selected.length > 1) {
            alert("You can not subscribe more then 1 record");
        }
    };
    UserplanFreetrailComponent.prototype.onsendDetail = function (form) {
        if (!this.selectedUser.fromdate) {
            alert("Please select fromdate");
        }
        else if (!this.selectedUser.enddate) {
            alert("Please select enddate");
        }
        else {
            this.isLoading = true;
            this.selectedUser.amountrecive = form.value.amountrecive;
            this.selectedUser.totalamount = form.value.amountrecive;
            this.postsService.sendinitialSubscriptionRequest(this.selectedUser);
        }
    };
    UserplanFreetrailComponent.prototype.addStartDate = function (type, event) {
        this.selectedUser.fromdate = event.value;
    };
    UserplanFreetrailComponent.prototype.addEnddate = function (type, event) {
        this.selectedUser.enddate = event.value;
    };
    UserplanFreetrailComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserplanFreetrailComponent.prototype, "paginator", void 0);
    UserplanFreetrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userplan-freetrail',
            template: __webpack_require__(/*! ./userplan-freetrail.component.html */ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.html"),
            styles: [__webpack_require__(/*! ./userplan-freetrail.component.css */ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], UserplanFreetrailComponent);
    return UserplanFreetrailComponent;
}());

var DilogSubscribeComponent = /** @class */ (function () {
    function DilogSubscribeComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.stardate = new Date();
        this.enddate = new Date();
    }
    DilogSubscribeComponent.prototype.onNoClick = function () {
        this.dialogRef.close([]);
    };
    DilogSubscribeComponent.prototype.saveClick = function () {
        //alert(this.data.amount)
        this.dialogRef.close([this.stardate, this.enddate, this.data.amount]);
    };
    DilogSubscribeComponent.prototype.addStartDate = function (type, event) {
        this.stardate = event.value;
        this.enddate = event.value;
    };
    DilogSubscribeComponent.prototype.addEnddate = function (type, event) {
        //this.selectedUser.enddate =  event.value;
        this.enddate = event.value;
    };
    DilogSubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dilog-subscribe',
            template: __webpack_require__(/*! ../../custom/dilog-subscribe/dilog-subscribe.component.html */ "./src/app/custom/dilog-subscribe/dilog-subscribe.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], DilogSubscribeComponent);
    return DilogSubscribeComponent;
}());



/***/ }),

/***/ "./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .buttonright{\n    left: 10px;\n    margin: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBsYW4vdXNlcnBsYW4tc3RhcnRzdWJzY3JpcHRpb24vdXNlcnBsYW4tc3RhcnRzdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvdXNlcnBsYW4vdXNlcnBsYW4tc3RhcnRzdWJzY3JpcHRpb24vdXNlcnBsYW4tc3RhcnRzdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuYnV0dG9ucmlnaHR7XG4gICAgbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UserplanStartsubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserplanStartsubscriptionComponent", function() { return UserplanStartsubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserplanStartsubscriptionComponent = /** @class */ (function () {
    function UserplanStartsubscriptionComponent() {
    }
    UserplanStartsubscriptionComponent.prototype.ngOnInit = function () {
    };
    UserplanStartsubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userplan-startsubscription',
            template: __webpack_require__(/*! ./userplan-startsubscription.component.html */ "./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.html"),
            styles: [__webpack_require__(/*! ./userplan-startsubscription.component.css */ "./src/app/userplan/userplan-startsubscription/userplan-startsubscription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserplanStartsubscriptionComponent);
    return UserplanStartsubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n.filter {\n  font-size: 14px;\n  width: 40%;\n}\n.dismissbutton{\n  left: 10px;\n  margin: 0;\n}\n.buttonright{\n  position: absolute;\n  right: 40px;\n  margin: 0;\n}\n.buttonright2{\n  position: absolute;\n  right: 150px;\n  margin: 0;\n}\n.buttonright3{\n  position: absolute;\n  right: 270px;\n  margin: 0;\n}\n.spacerright {\n  flex: 10;\n}\n.mat-column-Email {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-Services {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/* .mat-column-Phone {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 17% !important;\n  width: 17% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n */\n.mat-column-Country {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-Select {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.Free Trial Aprroved {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 3% !important;\n  width: 3% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.IP {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 3% !important;\n  width: 3% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBsYW4vdXNlcnBsYW4tc3Vic2NyaWJlZHVzZXJsaXN0L3VzZXJwbGFuLXN1YnNjcmliZWR1c2VybGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRTtBQUNGO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VycGxhbi91c2VycGxhbi1zdWJzY3JpYmVkdXNlcmxpc3QvdXNlcnBsYW4tc3Vic2NyaWJlZHVzZXJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbHRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5kaXNtaXNzYnV0dG9ue1xuICBsZWZ0OiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG4uYnV0dG9ucmlnaHR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbnJpZ2h0MntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbnJpZ2h0M3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjcwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5zcGFjZXJyaWdodCB7XG4gIGZsZXg6IDEwO1xufVxuXG4ubWF0LWNvbHVtbi1FbWFpbCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cbi5tYXQtY29sdW1uLVNlcnZpY2VzIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMjAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG5cblxuLyogLm1hdC1jb2x1bW4tUGhvbmUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNyUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE3JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG4gKi9cbi5tYXQtY29sdW1uLUNvdW50cnkge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogOCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1TZWxlY3Qge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5GcmVlIFRyaWFsIEFwcnJvdmVkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMyUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLklQIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMyUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-card  *ngIf=\"!isLoading\">\n    <form>\n        <mat-form-field class=\"filter\">\n        \n          <input  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n          <button class = \"buttonright3\"\n          mat-raised-button\n          color=\"accent\"\n          type=\"trial\" (click)=\"exportRecord()\">Export All Record</button>\n        </form>\n\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            \n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"Select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                (change)=\"$event ? selection.toggle(row) : null\"\n                                [checked]=\"selection.isSelected(row)\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n            \n              <!-- Position Column -->\n              <!-- <ng-container matColumnDef=\"position\">\n                <th mat-header-cell *matHeaderCellDef> No. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n              </ng-container> -->\n            \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"Email\">\n                <th mat-header-cell *matHeaderCellDef> Email </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n              </ng-container>\n            \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"Services\">\n                <th mat-header-cell *matHeaderCellDef> Services </th>\n                <td mat-cell *matCellDef=\"let element\" > {{element.services}} </td>\n              </ng-container>\n            \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"Phone\">\n                <th mat-header-cell *matHeaderCellDef> Phone </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n              </ng-container>\n            \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"Country\">\n                <th mat-header-cell *matHeaderCellDef> Country </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n              </ng-container>\n               <!-- Symbol Column -->\n            \n               <!-- <ng-container matColumnDef=\"Free Trial Aprroved\">\n                <th mat-header-cell *matHeaderCellDef> Free Trial Aprroved </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.isfreetrailaproove}} </td>\n              </!--> -->\n              \n              <ng-container matColumnDef=\"IP\">\n                <th mat-header-cell *matHeaderCellDef>IP</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.IP}} </td>\n              </ng-container>\n            \n              <ng-container matColumnDef=\"Start Date\">\n                <th mat-header-cell *matHeaderCellDef>Start Date</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.startdate}} </td>\n              </ng-container>\n              <ng-container matColumnDef=\"End Date\">\n                <th mat-header-cell *matHeaderCellDef>End Date</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.enddate}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"Amount\">\n                <th mat-header-cell *matHeaderCellDef>Amount</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.amountrecive}} </td>\n              </ng-container>\n\n\n              \n            \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                  (click)=\"selection.toggle(row)\">\n              </tr>\n            </table>\n            <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n            </div>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserplanSubscribeduserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserplanSubscribeduserlistComponent", function() { return UserplanSubscribeduserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5__);






var UserplanSubscribeduserlistComponent = /** @class */ (function () {
    function UserplanSubscribeduserlistComponent(postsService) {
        this.postsService = postsService;
        this.isLoading = true;
        this.stardate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'IP', 'Start Date', 'End Date', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplanSubscribeduserlistComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplanSubscribeduserlistComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplanSubscribeduserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getSubscribedUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.userdetails = _this.userdetails.filter(function (userdetails) { return userdetails.issubscribed === true; });
            _this.dataSource.data = _this.userdetails;
            _this.dismiss();
        });
    };
    UserplanSubscribeduserlistComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplanSubscribeduserlistComponent.prototype.edit = function () {
        // this.isLoading = true;
        //  this.postsService.sendAprroveTrialRequest(this.selection)
    };
    UserplanSubscribeduserlistComponent.prototype.trial = function () {
        //  if(this.selection.selected.length>0)
        //  {
        //    if(this.selection.selected.length == 1)
        //    {
        //    let res =  this.selection.selected;
        //    let userde: Userdetails =   res[0] 
        //   if(!userde.isSubscriptionaproove)
        //   {
        //   this.isLoading = true
        //   this.postsService.sendAprroveTrialRequest(userde);
        //   }
        //   else
        //   { 
        //     alert("free trail already aprroved for the record");
        //   }
        //    }
        //    else
        //    {
        //    alert("you can not select more then one record");
        //    }
        //  }
        //  else
        //  {
        //    alert("Please select any record for approval");
        //  }
        // this.postsService.
    };
    UserplanSubscribeduserlistComponent.prototype.exportRecord = function () {
        var csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'User Data',
            useBom: true,
            noDownload: false,
            headers: ["Email", "Country", "Phone", "Start Date", "End Date", "IP", "Amount", "Services"]
        };
        var arrayfilter = (this.userdetails.filter(function (userdetails) { return userdetails.issubscribed === true; }));
        arrayfilter.forEach(function (part, index, theArray) {
            part.newServices = part.services.join(",");
            delete part.services;
            delete part.isexpire;
            delete part.isfreetrailaproove;
            delete part.issubscribed;
            delete part.isSubscriptionaproove;
            console.log(theArray);
            console.log(arrayfilter);
        });
        delete arrayfilter["services"];
        console.log(arrayfilter);
        new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_5__["AngularCsv"](arrayfilter, "Userdata", csvOptions);
    };
    UserplanSubscribeduserlistComponent.prototype.subscribe = function () {
        this.isSubscriptionClicked = true;
        var res = this.selection.selected;
        this.selectedUser = res[0];
    };
    UserplanSubscribeduserlistComponent.prototype.onsendDetail = function (form) {
        if (!this.selectedUser.fromdate) {
            alert("Please select fromdate");
        }
        else if (!this.selectedUser.enddate) {
            alert("Please select enddate");
        }
        else {
            this.isLoading = true;
            this.selectedUser.isSubscriptionaproove = true;
            this.selectedUser.amountrecive = form.value.amountrecive;
            alert(+this.selectedUser.amountrecive);
            alert(+this.selectedUser.totalamount);
            var respo = +this.selectedUser.totalamount + +this.selectedUser.amountrecive;
            alert(respo.toString());
            this.selectedUser.totalamount = respo.toString();
            this.postsService.sendaproovalSubscriptionRequest(this.selectedUser);
        }
    };
    UserplanSubscribeduserlistComponent.prototype.addStartDate = function (type, event) {
        this.selectedUser.fromdate = event.value;
    };
    UserplanSubscribeduserlistComponent.prototype.addEnddate = function (type, event) {
        this.selectedUser.enddate = event.value;
    };
    UserplanSubscribeduserlistComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserplanSubscribeduserlistComponent.prototype, "paginator", void 0);
    UserplanSubscribeduserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userplan-subscribeduserlist',
            template: __webpack_require__(/*! ./userplan-subscribeduserlist.component.html */ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.html"),
            styles: [__webpack_require__(/*! ./userplan-subscribeduserlist.component.css */ "./src/app/userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], UserplanSubscribeduserlistComponent);
    return UserplanSubscribeduserlistComponent;
}());



/***/ }),

/***/ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  .filter {\n    font-size: 14px;\n    width: 40%;\n  }\n  .dismissbutton{\n    left: 10px;\n    margin: 0;\n  }\n  .buttonright{\n    position: absolute;\n    right: 40px;\n    margin: 0;\n  }\n  .buttonright2{\n    position: absolute;\n    right: 150px;\n    margin: 0;\n  }\n  .buttonright3{\n    position: absolute;\n    right: 290px;\n    margin: 0;\n  }\n  .spacerright {\n    flex: 10;\n  }\n  .mat-column-Email {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 15% !important;\n    width: 15% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-Services {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 20% !important;\n    width: 20% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-Phone {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 17% !important;\n    width: 17% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-Country {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 8% !important;\n    width: 8% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-Select {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 10% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .Free Trial Aprroved {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .IP {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBsYW4vdXNlcnBsYW5ub3RhcHByb292ZS1mcmVldHJhaWwvdXNlcnBsYW5ub3RhcHByb292ZS1mcmVldHJhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztFQUNYO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7RUFDWDtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFJQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwbGFuL3VzZXJwbGFubm90YXBwcm9vdmUtZnJlZXRyYWlsL3VzZXJwbGFubm90YXBwcm9vdmUtZnJlZXRyYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbHRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLmRpc21pc3NidXR0b257XG4gICAgbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmJ1dHRvbnJpZ2h0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYnV0dG9ucmlnaHQye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJ1dHRvbnJpZ2h0M3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDI5MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc3BhY2VycmlnaHQge1xuICAgIGZsZXg6IDEwO1xuICB9XG5cbiAgLm1hdC1jb2x1bW4tRW1haWwge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1TZXJ2aWNlcyB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIFxuICBcbiAgXG4gIC5tYXQtY29sdW1uLVBob25lIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMTclICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE3JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLUNvdW50cnkge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLVNlbGVjdCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG5cbiAgLkZyZWUgVHJpYWwgQXBycm92ZWQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAzJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cblxuICAuSVAge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAzJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card  *ngIf=\"isSubscriptionClicked\">\n  <form (submit) = onsendDetail(postForm)  #postForm=\"ngForm\">\n    <p>\n        <mat-form-field>\n            <input\n        matInput\n        rows=\"1\"\n        type=\"text\"\n            disabled [value] = \"selectedUser.email\" />\n        </mat-form-field>\n        </p>\n  <p>\n<mat-form-field>\n  <input matInput #fromInput [matDatepicker]=\"picker\" placeholder=\"fromdate\"   (dateInput)=\"addStartDate('input', $event)\" (dateChange)=\"addStartDate('change', $event)\" disabled>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n  <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n</p>\n\n<p>\n<mat-form-field>\n    <input matInput #endInput [min]=\"selectedUser.fromdate\"  [matDatepicker]=\"picker2\" placeholder=\"enddate\" (dateInput)=\"addEnddate('input', $event)\" (dateChange)=\"addEnddate('change', $event)\"disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n     \n  </mat-form-field>\n</p>\n\n<p>\n<mat-form-field>\n<input\n[ngModel]=\"selectedUser?.amountrecive\"\nmatInput\nrows=\"1\"\ntype=\"number\"\nname=\"amountrecive\"\nrequired\nplaceholder=\"Amount Recieved\" #amountrecive=\"ngModel\"/>\n<mat-error *ngIf=\"amountrecive.invalid\">Please enter a post title.</mat-error>\n</mat-form-field>\n</p>\n\n<button\nmat-raised-button\ncolor=\"accent\"\ntype=\"submit\">Send Detail</button>\n\n\n<button\nmat-raised-button class = \"dismissbutton\"\ncolor=\"accent\"\ntype=\"dismiss\" (click)=\"dismiss()\">Dismiss</button>\n</form>\n</mat-card>\n\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n<mat-card  *ngIf=\"!isLoading && !isSubscriptionClicked\">\n  \n<form>\n<mat-form-field class=\"filter\">\n\n  <input  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n  \n<button class = \"buttonright2\"\n  mat-raised-button\n  color=\"accent\"\n  type=\"Subscribe\" (click)=\"trial()\">Approve Trail</button>\n\n  <button class = \"buttonright3\"\n  mat-raised-button\n  color=\"accent\"\n  type=\"trial\" (click)=\"exportRecord()\">Export All Record</button>\n\n  \n</form>\n\n\n<div class=\"mat-elevation-z8\">\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"Select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <!-- <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container> -->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"Email\">\n    <th mat-header-cell *matHeaderCellDef> Email </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"Services\">\n    <th mat-header-cell *matHeaderCellDef> Services </th>\n    <td mat-cell *matCellDef=\"let element\" > {{element.services}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"Phone\">\n    <th mat-header-cell *matHeaderCellDef> Phone </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"Country\">\n    <th mat-header-cell *matHeaderCellDef> Country </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n  </ng-container>\n   <!-- Symbol Column -->\n\n   <!-- <ng-container matColumnDef=\"Free Trial Aprroved\">\n    <th mat-header-cell *matHeaderCellDef> Free Trial Aprroved </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.isfreetrailaproove}} </td>\n  </ng-container> -->\n  \n  <ng-container matColumnDef=\"IP\">\n    <th mat-header-cell *matHeaderCellDef>IP</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.IP}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n  </tr>\n</table>\n<!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n</div>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserplannotapprooveFreetrailComponent, DilogdateStartendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserplannotapprooveFreetrailComponent", function() { return UserplannotapprooveFreetrailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DilogdateStartendComponent", function() { return DilogdateStartendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__);







var UserplannotapprooveFreetrailComponent = /** @class */ (function () {
    function UserplannotapprooveFreetrailComponent(postsService, dialog) {
        this.postsService = postsService;
        this.dialog = dialog;
        this.isLoading = true;
        this.startdate = "";
        this.enddate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'IP'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplannotapprooveFreetrailComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplannotapprooveFreetrailComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplannotapprooveFreetrailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.userdetails = _this.userdetails.filter(function (userdetails) { return userdetails.isfreetrailaproove === false; });
            _this.dataSource.data = _this.userdetails;
            _this.dismiss();
        });
    };
    UserplannotapprooveFreetrailComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplannotapprooveFreetrailComponent.prototype.edit = function () {
        // this.isLoading = true;
        //  this.postsService.sendAprroveTrialRequest(this.selection)
    };
    UserplannotapprooveFreetrailComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DilogdateStartendComponent, {
            width: '250px',
            data: { name: "", animal: "" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.length > 1) {
                _this.startdate = result[0];
                _this.enddate = result[1];
                var res = _this.selection.selected;
                _this.isLoading = true;
                _this.postsService.sendAprroveTrialRequest(res, _this.startdate, _this.enddate);
                _this.selection.clear();
            }
            console.log('The dialog was closed');
        });
    };
    UserplannotapprooveFreetrailComponent.prototype.exportRecord = function () {
        var csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'User Data :',
            useBom: true,
            noDownload: false,
            headers: ["Email", "Country", "Phone", "Expire", "Free Trail Aproove", "Subscribed", "IP", "Services"]
        };
        var arrayfilter = this.userdetails;
        arrayfilter.forEach(function (part, index, theArray) {
            part.newServices = part.services.join(",");
            delete part.services;
            delete part.startdate;
            delete part.enddate;
            console.log(theArray);
            console.log(arrayfilter);
        });
        delete arrayfilter["services"];
        console.log(arrayfilter);
        new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](arrayfilter, "Userdata", csvOptions);
    };
    UserplannotapprooveFreetrailComponent.prototype.trial = function () {
        if (this.selection.selected.length > 0) {
            this.openDialog();
        }
        else {
            alert("Please select any record for approval");
        }
    };
    UserplannotapprooveFreetrailComponent.prototype.subscribe = function () {
        this.isSubscriptionClicked = true;
        var res = this.selection.selected;
        this.selectedUser = res[0];
    };
    UserplannotapprooveFreetrailComponent.prototype.onsendDetail = function (form) {
        if (!this.selectedUser.fromdate) {
            alert("Please select fromdate");
        }
        else if (!this.selectedUser.enddate) {
            alert("Please select enddate");
        }
        else {
            this.isLoading = true;
            this.selectedUser.amountrecive = form.value.amountrecive;
            this.selectedUser.totalamount = form.value.amountrecive;
            this.postsService.sendinitialSubscriptionRequest(this.selectedUser);
        }
    };
    UserplannotapprooveFreetrailComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UserplannotapprooveFreetrailComponent.prototype, "paginator", void 0);
    UserplannotapprooveFreetrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userplannotapproove-freetrail',
            template: __webpack_require__(/*! ./userplannotapproove-freetrail.component.html */ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.html"),
            styles: [__webpack_require__(/*! ./userplannotapproove-freetrail.component.css */ "./src/app/userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UserplannotapprooveFreetrailComponent);
    return UserplannotapprooveFreetrailComponent;
}());

var DilogdateStartendComponent = /** @class */ (function () {
    function DilogdateStartendComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.stardate = new Date();
        this.enddate = new Date();
    }
    DilogdateStartendComponent.prototype.onNoClick = function () {
        this.dialogRef.close([]);
    };
    DilogdateStartendComponent.prototype.saveClick = function () {
        this.dialogRef.close([this.stardate, this.enddate]);
    };
    DilogdateStartendComponent.prototype.addStartDate = function (type, event) {
        this.stardate = event.value;
        this.enddate = event.value;
    };
    DilogdateStartendComponent.prototype.addEnddate = function (type, event) {
        //this.selectedUser.enddate =  event.value;
        this.enddate = event.value;
    };
    DilogdateStartendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dilogdate-startend',
            template: __webpack_require__(/*! ../../custom/dilogdate-startend/dilogdate-startend.component.html */ "./src/app/custom/dilogdate-startend/dilogdate-startend.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], DilogdateStartendComponent);
    return DilogdateStartendComponent;
}());



/***/ }),

/***/ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n.filter {\n  font-size: 14px;\n  width: 40%;\n}\n.dismissbutton{\n  left: 10px;\n  margin: 0;\n}\n.buttonright{\n  position: absolute;\n  right: 40px;\n  margin: 0;\n}\n.buttonright2{\n  position: absolute;\n  right: 150px;\n  margin: 0;\n}\n.buttonright3{\n  position: absolute;\n  right: 270px;\n  margin: 0;\n}\n.spacerright {\n  flex: 10;\n}\n.mat-column-Email {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-Services {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/* .mat-column-Phone {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 17% !important;\n  width: 17% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n */\n.mat-column-Country {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-Select {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.Free Trial Aprroved {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 3% !important;\n  width: 3% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.IP {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 3% !important;\n  width: 3% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBsYW4vdXNlcnBsYW5ub3RzdWJzY3JpYmVkLXN1YnNjcmliZWR1c2VybGlzdC91c2VycGxhbm5vdHN1YnNjcmliZWQtc3Vic2NyaWJlZHVzZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLFFBQVE7QUFDVjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBQ0Y7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwbGFuL3VzZXJwbGFubm90c3Vic2NyaWJlZC1zdWJzY3JpYmVkdXNlcmxpc3QvdXNlcnBsYW5ub3RzdWJzY3JpYmVkLXN1YnNjcmliZWR1c2VybGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5maWx0ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiA0MCU7XG59XG4uZGlzbWlzc2J1dHRvbntcbiAgbGVmdDogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmJ1dHRvbnJpZ2h0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b25yaWdodDJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b25yaWdodDN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI3MHB4O1xuICBtYXJnaW46IDA7XG59XG4uc3BhY2VycmlnaHQge1xuICBmbGV4OiAxMDtcbn1cblxuLm1hdC1jb2x1bW4tRW1haWwge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG4ubWF0LWNvbHVtbi1TZXJ2aWNlcyB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuXG5cbi8qIC5tYXQtY29sdW1uLVBob25lIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTclICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNyUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuICovXG4ubWF0LWNvbHVtbi1Db3VudHJ5IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tU2VsZWN0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4uRnJlZSBUcmlhbCBBcHJyb3ZlZCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDMlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5JUCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDMlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-card  *ngIf=\"!isLoading\">\n    <form>\n        <mat-form-field class=\"filter\">\n        \n          <input  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n          <button class = \"buttonright3\"\n          mat-raised-button\n          color=\"accent\"\n          type=\"trial\" (click)=\"exportRecord()\">Export All Record</button>\n          <button class = \"buttonright2\"\n          mat-raised-button\n          color=\"accent\"\n          type=\"Subscribe\" (click)=\"subscribe()\">Subscribe</button>\n        </form>\n        \n\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            \n              <!-- Checkbox Column -->\n              <ng-container matColumnDef=\"Select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                (change)=\"$event ? selection.toggle(row) : null\"\n                                [checked]=\"selection.isSelected(row)\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n            \n              <!-- Position Column -->\n              <!-- <ng-container matColumnDef=\"position\">\n                <th mat-header-cell *matHeaderCellDef> No. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n              </ng-container> -->\n            \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"Email\">\n                <th mat-header-cell *matHeaderCellDef> Email </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n              </ng-container>\n            \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"Services\">\n                <th mat-header-cell *matHeaderCellDef> Services </th>\n                <td mat-cell *matCellDef=\"let element\" > {{element.services}} </td>\n              </ng-container>\n            \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"Phone\">\n                <th mat-header-cell *matHeaderCellDef> Phone </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n              </ng-container>\n            \n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"Country\">\n                <th mat-header-cell *matHeaderCellDef> Country </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n              </ng-container>\n               <!-- Symbol Column -->\n            \n               <!-- <ng-container matColumnDef=\"Free Trial Aprroved\">\n                <th mat-header-cell *matHeaderCellDef> Free Trial Aprroved </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.isfreetrailaproove}} </td>\n              </!--> -->\n              \n              <ng-container matColumnDef=\"IP\">\n                <th mat-header-cell *matHeaderCellDef>IP</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.IP}} </td>\n              </ng-container>\n            \n              <ng-container matColumnDef=\"Start Date\">\n                <th mat-header-cell *matHeaderCellDef>Start Date</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.startdate}} </td>\n              </ng-container>\n              <ng-container matColumnDef=\"End Date\">\n                <th mat-header-cell *matHeaderCellDef>End Date</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.enddate}} </td>\n              </ng-container>\n              <ng-container matColumnDef=\"Amount\">\n                <th mat-header-cell *matHeaderCellDef>Amount</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.amountrecive}} </td>\n              </ng-container>\n            \n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                  (click)=\"selection.toggle(row)\">\n              </tr>\n            </table>\n            <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n            </div>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: UserplannotsubscribedSubscribeduserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserplannotsubscribedSubscribeduserlistComponent", function() { return UserplannotsubscribedSubscribeduserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../userplan-freetrail/userplan-freetrail.component */ "./src/app/userplan/userplan-freetrail/userplan-freetrail.component.ts");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");








var UserplannotsubscribedSubscribeduserlistComponent = /** @class */ (function () {
    function UserplannotsubscribedSubscribeduserlistComponent(postsService, dialog) {
        this.postsService = postsService;
        this.dialog = dialog;
        this.isLoading = true;
        this.stardate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'IP', 'Start Date', 'End Date', 'Amount'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplannotsubscribedSubscribeduserlistComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplannotsubscribedSubscribeduserlistComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.dataSource.data = _this.userdetails.filter(function (userdetails) { return userdetails.isSubscriptionaproove === true && userdetails.issubscribed === false; });
            _this.dismiss();
        });
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.edit = function () {
        // this.isLoading = true;
        //  this.postsService.sendAprroveTrialRequest(this.selection)
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.trial = function () {
        // let userde: Userdetails =   res[0] 
        if (this.selection.selected.length > 0) {
            this.isLoading = true;
            this.postsService.sendAprroveTrialRequest(this.selection.selected, "", "");
        }
        else {
            alert("Please select any record for approval");
        }
        //  if(this.selection.selected.length>0)
        //  {
        //    if(this.selection.selected.length == 1)
        //    {
        //    let res =  this.selection.selected;
        //    let userde: Userdetails =   res[0] 
        //   if(!userde.isSubscriptionaproove)
        //   {
        //   this.isLoading = true
        //   this.postsService.sendAprroveTrialRequest(userde);
        //   }
        //   else
        //   { 
        //     alert("free trail already aprroved for the record");
        //   }
        //    }
        //    else
        //    {
        //    alert("you can not select more then one record");
        //    }
        //  }
        //  else
        //  {
        //    alert("Please select any record for approval");
        //  }
        // this.postsService.
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.exportRecord = function () {
        var csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'User Data',
            useBom: true,
            noDownload: false,
            headers: ["Email", "Country", "Phone", "Start Date", "End Date", "IP", "Amount", "Services"]
        };
        var arrayfilter = (this.userdetails.filter(function (userdetails) { return userdetails.issubscribed === true; }));
        arrayfilter.forEach(function (part, index, theArray) {
            part.newServices = part.services.join(",");
            delete part.services;
            delete part.isexpire;
            delete part.isfreetrailaproove;
            delete part.issubscribed;
            delete part.isSubscriptionaproove;
            console.log(theArray);
            console.log(arrayfilter);
        });
        delete arrayfilter["services"];
        console.log(arrayfilter);
        new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](arrayfilter, "Userdata", csvOptions);
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.subscribe = function () {
        if (this.selection.selected.length == 1) {
            this.isSubscriptionClicked = true;
            var res = this.selection.selected;
            this.selectedUser = res[0];
            this.openDialog();
        }
        else if (this.selection.selected.length == 0) {
            alert("Please select record to subscribe");
        }
        else if (this.selection.selected.length > 1) {
            alert("You can not subscribe more then 1 record");
        }
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_userplan_freetrail_userplan_freetrail_component__WEBPACK_IMPORTED_MODULE_1__["DilogSubscribeComponent"], {
            width: '250px',
            data: { name: "", animal: "" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.length > 1) {
                _this.isLoading = true;
                console.log(_this.selectedUser);
                _this.selectedUser.startdate = result[0];
                _this.selectedUser.enddate = result[1];
                _this.selectedUser.amountrecive = result[2];
                _this.postsService.sendinitialSubscriptionRequest(_this.selectedUser);
                _this.selection.clear();
            }
            console.log('The dialog was closed');
        });
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.onsendDetail = function (form) {
        if (!this.selectedUser.fromdate) {
            alert("Please select fromdate");
        }
        else if (!this.selectedUser.enddate) {
            alert("Please select enddate");
        }
        else {
            this.isLoading = true;
            this.selectedUser.isSubscriptionaproove = true;
            this.selectedUser.amountrecive = form.value.amountrecive;
            alert(+this.selectedUser.amountrecive);
            alert(+this.selectedUser.totalamount);
            var respo = +this.selectedUser.totalamount + +this.selectedUser.amountrecive;
            alert(respo.toString());
            this.selectedUser.totalamount = respo.toString();
            this.postsService.sendaproovalSubscriptionRequest(this.selectedUser);
        }
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.addStartDate = function (type, event) {
        this.selectedUser.fromdate = event.value;
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.addEnddate = function (type, event) {
        this.selectedUser.enddate = event.value;
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UserplannotsubscribedSubscribeduserlistComponent.prototype, "paginator", void 0);
    UserplannotsubscribedSubscribeduserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-userplannotsubscribed-subscribeduserlist',
            template: __webpack_require__(/*! ./userplannotsubscribed-subscribeduserlist.component.html */ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.html"),
            styles: [__webpack_require__(/*! ./userplannotsubscribed-subscribeduserlist.component.css */ "./src/app/userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], UserplannotsubscribedSubscribeduserlistComponent);
    return UserplannotsubscribedSubscribeduserlistComponent;
}());



/***/ }),

/***/ "./src/app/users/admin/admin.service.ts":
/*!**********************************************!*\
  !*** ./src/app/users/admin/admin.service.ts ***!
  \**********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AdminService = /** @class */ (function () {
    function AdminService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.userdetails = [];
        this.userdetailUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AdminService.prototype.getToken = function () {
        return this.token;
    };
    AdminService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AdminService.prototype.getUserDetail = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/adminuser")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (postData) {
            return postData.users.map(function (post) {
                return {
                    email: post.email,
                    type: post.type
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.userdetails = transformedPosts;
            _this.userdetailUpdated.next(_this.userdetails.slice());
        });
    };
    AdminService.prototype.getUserDetailListener = function () {
        return this.userdetailUpdated.asObservable();
    };
    AdminService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AdminService.prototype.createUser = function (email, password, type) {
        var _this = this;
        var authData = { email: email, password: password, type: type };
        this.http
            .post("http://75.98.169.159:1000/api/adminuser/signup", authData)
            .subscribe(function (response) {
            alert("user added");
            _this.userdetails.push(authData);
            _this.userdetailUpdated.next(_this.userdetails.slice());
        });
    };
    AdminService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password, type: "admin" };
        this.http
            .post("http://75.98.169.159:1000/api/adminuser/login", authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                _this.saveAuthData(token, expirationDate);
                _this.router.navigate(["/"]);
            }
        });
    };
    AdminService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AdminService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    };
    AdminService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AdminService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    };
    AdminService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    };
    AdminService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/users/admin/admin/admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/admin/admin/admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 100%;\n  }\n  \n  mat-spinner {\n    margin: auto;\n  }\n  \n  table {\n    width: 100%;\n  }\n  \n  .filter {\n    font-size: 14px;\n    width: 40%;\n  }\n  \n  .dismissbutton{\n    left: 10px;\n    margin: 0;\n  }\n  \n  .buttonright{\n    position: absolute;\n    right: 40px;\n    margin: 0;\n  }\n  \n  .buttonright2{\n    position: absolute;\n    right: 150px;\n    margin: 0;\n  }\n  \n  .buttonright3{\n    position: absolute;\n    right: 270px;\n    margin: 0;\n  }\n  \n  .spacerright {\n    flex: 10;\n  }\n  \n  .mat-column-email {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 15% !important;\n    width: 15% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .mat-column-type {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 40% !important;\n    width: 20% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .mat-column-phone {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 10% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .mat-column-expired {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 5% !important;\n    width: 5% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .mat-column-select {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 10% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .Subscription Aprroved {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .Total Amount Recieved {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  \n  .Amount Recieved {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 3% !important;\n    width: 3% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvYWRtaW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztFQUNYOztFQUNBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjs7RUFJQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjs7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmOztFQUlBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIG1hdC1zcGlubmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZmlsdGVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAuZGlzbWlzc2J1dHRvbntcbiAgICBsZWZ0OiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuYnV0dG9ucmlnaHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG5cbiAgLmJ1dHRvbnJpZ2h0MntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5idXR0b25yaWdodDN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNzBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnNwYWNlcnJpZ2h0IHtcbiAgICBmbGV4OiAxMDtcbiAgfVxuXG4gIC5tYXQtY29sdW1uLWVtYWlsIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgLm1hdC1jb2x1bW4tdHlwZSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDQwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIFxuICBcbiAgXG4gIC5tYXQtY29sdW1uLXBob25lIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLWV4cGlyZWQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLXNlbGVjdCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5TdWJzY3JpcHRpb24gQXBycm92ZWQge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCAzJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cblxuXG5cbiAgLlRvdGFsIEFtb3VudCBSZWNpZXZlZCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDMlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAuQW1vdW50IFJlY2lldmVkIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgMyUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMyUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG5cbiAiXX0= */"

/***/ }),

/***/ "./src/app/users/admin/admin/admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/admin/admin/admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n\n<mat-card  *ngIf=\"isAddUser\" >\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>user role</mat-label>\n        <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n          <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\" >Create User</button>\n    <button mat-raised-button color=\"accent\" type=\"dismiss\" (click)=\"dismissAddUser()\" class = \"dismissbutton\">Dismiss</button>\n\n  </form>\n</mat-card>\n\n<mat-card *ngIf=\"!isAddUser && !isLoading\">\n  <form>\n    <mat-form-field class=\"filter\">\n    \n      <input  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    \n      <button class = \"buttonright3\"\n      mat-raised-button\n      color=\"accent\"\n      type=\"trial\" (click)=\"adduser()\">Add user</button>\n    </form>\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  \n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n  \n    <!-- Position Column -->\n    <!-- <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container> -->\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef> email </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> User type </th>\n      <td mat-cell *matCellDef=\"let element\" > {{element.type}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n        (click)=\"selection.toggle(row)\">\n    </tr>\n  </table>\n  <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/users/admin/admin/admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/admin/admin/admin.component.ts ***!
  \******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/users/admin/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.isAddUser = false;
        this.userdetails = [];
        this.displayedColumns = ['select', 'email', 'type'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.foods = [
            { value: 'admin', viewValue: 'admin' },
            { value: 'super admin', viewValue: 'super admin' }
        ];
    }
    AdminComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    AdminComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    AdminComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password, this.selectedValue);
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.authService.getUserDetail();
        this.authService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.dataSource.data = _this.userdetails;
        });
    };
    AdminComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminComponent.prototype.adduser = function () {
        this.isAddUser = true;
    };
    AdminComponent.prototype.dismissAddUser = function () {
        this.isAddUser = false;
    };
    AdminComponent.prototype.createUserRequest = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.isAddUser = false;
        this.authService.createUser(form.value.email, form.value.password, "admin");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AdminComponent.prototype, "paginator", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/users/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/users/admin/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], AdminComponent);
    return AdminComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anshuljain/Documents/signalexpert/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map