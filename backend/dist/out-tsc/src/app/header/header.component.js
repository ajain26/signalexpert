"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth/auth.service");
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
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.authUserTpye = this.authService.getUserTypeListener().subscribe(function (isSadmin) {
            _this.userIsSadmin = isSadmin;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    HeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-header",
            templateUrl: "./header.component.html",
            styleUrls: ["./header.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map