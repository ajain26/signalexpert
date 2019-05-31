"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var posts_service_1 = require("../posts.service");
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
    var _a;
    PostCreateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-post-create",
            templateUrl: "./post-create.component.html",
            styleUrls: ["./post-create.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" ? _a : Object])
    ], PostCreateComponent);
    return PostCreateComponent;
}());
exports.PostCreateComponent = PostCreateComponent;
//# sourceMappingURL=post-create.component.js.map