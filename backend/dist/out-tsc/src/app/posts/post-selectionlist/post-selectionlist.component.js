"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var posts_service_1 = require("./../posts.service");
var core_1 = require("@angular/core");
var PostSelectionlistComponent = /** @class */ (function () {
    function PostSelectionlistComponent(postsService) {
        this.postsService = postsService;
        this.typesOfService = ['Basic Forex Pack', 'Premium Forex Pack', 'HNI Forex Pack',
            'Basic Comex Pack', 'Premium Comex Pack',
            'HNI Comex Pack', 'Basic KLSE Pack',
            'Premium KLSE Pack', 'HNI KLSE Pack', 'Basic SGX Pack', 'Premium SGX Pack', 'HNI SGX Pack'];
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
    PostSelectionlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-post-selectionlist',
            templateUrl: './post-selectionlist.component.html',
            styleUrls: ['./post-selectionlist.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService])
    ], PostSelectionlistComponent);
    return PostSelectionlistComponent;
}());
exports.PostSelectionlistComponent = PostSelectionlistComponent;
//# sourceMappingURL=post-selectionlist.component.js.map