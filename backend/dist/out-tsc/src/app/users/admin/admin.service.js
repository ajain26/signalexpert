"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AdminService = /** @class */ (function () {
    function AdminService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.userdetails = [];
        this.userdetailUpdated = new rxjs_1.Subject();
        this.authStatusListener = new rxjs_1.Subject();
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
            .pipe(operators_1.map(function (postData) {
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
    AdminService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: "root" }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map