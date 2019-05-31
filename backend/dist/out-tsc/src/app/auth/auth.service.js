"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.isSadmin = false;
        this.userEmail = "";
        this.authStatusListener = new rxjs_1.Subject();
        this.userdetailUpdated = new rxjs_1.Subject();
        this.userTypeListener = new rxjs_1.Subject();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getIsSAdmin = function () {
        return this.isSadmin;
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
        localStorage.setItem("expiration", expirationDate.toISOString());
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
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
    AuthService.prototype.getUserList = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/adminuser")
            .pipe(operators_1.map(function (postData) {
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
    var _a, _b;
    AuthService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: "root" }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" ? _a : Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _b : Object])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map