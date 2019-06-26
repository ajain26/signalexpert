"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
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
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map