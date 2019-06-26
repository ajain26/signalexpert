"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var admin_component_1 = require("./users/admin/admin/admin.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./auth/login/login.component");
var post_list_component_1 = require("./posts/post-list/post-list.component");
var post_create_component_1 = require("./posts/post-create/post-create.component");
var post_messagetemplate_component_1 = require("./posts/post-messagetemplate/post-messagetemplate.component");
var userplan_freetrail_component_1 = require("./userplan/userplan-freetrail/userplan-freetrail.component");
var auth_guard_1 = require("./auth/auth.guard");
var userplan_subscribeduserlist_component_1 = require("./userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component");
var routes = [
    { path: 'Messages', component: post_list_component_1.PostListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'createtemp', component: post_messagetemplate_component_1.PostMessagetemplateComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'create', component: post_create_component_1.PostCreateComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'freetrial', component: userplan_freetrail_component_1.UserplanFreetrailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'subscribed', component: userplan_subscribeduserlist_component_1.UserplanSubscribeduserlistComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: "", component: login_component_1.LoginComponent },
    { path: 'edit/:postId', component: post_create_component_1.PostCreateComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'Admin List', component: admin_component_1.AdminComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [auth_guard_1.AuthGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map