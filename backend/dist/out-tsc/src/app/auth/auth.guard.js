"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
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
    var _a;
    AuthGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" ? _a : Object])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map