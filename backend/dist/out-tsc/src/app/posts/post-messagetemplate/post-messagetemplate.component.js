"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var posts_service_1 = require("../posts.service");
var router_1 = require("@angular/router");
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
    var _a;
    PostMessagetemplateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-post-messagetemplate',
            templateUrl: './post-messagetemplate.component.html',
            styleUrls: ['./post-messagetemplate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" ? _a : Object])
    ], PostMessagetemplateComponent);
    return PostMessagetemplateComponent;
}());
exports.PostMessagetemplateComponent = PostMessagetemplateComponent;
//# sourceMappingURL=post-messagetemplate.component.js.map