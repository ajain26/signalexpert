"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.posttemplate = [];
        this.userdetails = [];
        this.userdetailUpdated = new rxjs_1.Subject();
        this.postsUpdated = new rxjs_1.Subject();
        this.postsTemplateUpdated = new rxjs_1.Subject();
        this.Services = [];
    }
    PostsService.prototype.getPosts = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/api/posts")
            .pipe(operators_1.map(function (postData) {
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
            .pipe(operators_1.map(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    email: post.Email,
                    services: post.services,
                    country: post.Country,
                    phone: post.PhoneNumber,
                    issubscribed: post.issubscribed,
                    isfreetrailaproove: post.isfreetrailaproove,
                    isexpire: post.isexpire,
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
            .pipe(operators_1.map(function (postData) {
            return postData.posts.map(function (post) {
                return {
                    email: post.Email,
                    services: post.services,
                    country: post.Country,
                    phone: post.PhoneNumber,
                    issubscribed: post.issubscribed,
                    isfreetrailaproove: post.isfreetrailaproove,
                    isexpire: post.isexpire,
                    startdate: post.startdate,
                    fromdate: post.fromdate,
                    amountrecive: post.amountrecive,
                    totalamount: post.totalamount,
                };
            });
        }))
            .subscribe(function (transformedPosts) {
            _this.userdetails = transformedPosts;
            _this.userdetailUpdated.next(_this.userdetails.slice());
        });
    };
    PostsService.prototype.getMesageTemplate = function () {
        var _this = this;
        this.http
            .get("http://75.98.169.159:1000/posttemplate")
            .pipe(operators_1.map(function (postData) {
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
    PostsService.prototype.sendAprroveTrialRequest = function (userdetail) {
        var _this = this;
        this.http
            .post("http://75.98.169.159:1000/api/userdetails/aproovetrial", { Email: userdetail.email })
            .subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.posts['nModified']) {
                userdetail.isfreetrailaproove = true;
                _this.userdetailUpdated.next(_this.userdetails.slice());
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
        this.http
            .post("http://75.98.169.159:1000/api/posts", post)
            .subscribe(function (responseData) {
            var id = responseData.postId;
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
    var _a, _b;
    PostsService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: "root" }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" ? _a : Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _b : Object])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map