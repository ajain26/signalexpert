"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var post_create_component_1 = require("./posts/post-create/post-create.component");
var header_component_1 = require("./header/header.component");
var post_list_component_1 = require("./posts/post-list/post-list.component");
var app_routing_module_1 = require("./app-routing.module");
var post_selectionlist_component_1 = require("./posts/post-selectionlist/post-selectionlist.component");
var post_messagetemplate_component_1 = require("./posts/post-messagetemplate/post-messagetemplate.component");
var userplan_freetrail_component_1 = require("./userplan/userplan-freetrail/userplan-freetrail.component");
var userplan_startsubscription_component_1 = require("./userplan/userplan-startsubscription/userplan-startsubscription.component");
var userplan_subscribeduserlist_component_1 = require("./userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component");
var login_component_1 = require("./auth/login/login.component");
var admin_component_1 = require("./users/admin/admin/admin.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                post_create_component_1.PostCreateComponent,
                header_component_1.HeaderComponent,
                post_list_component_1.PostListComponent,
                post_selectionlist_component_1.PostSelectionlistComponent,
                post_messagetemplate_component_1.PostMessagetemplateComponent,
                userplan_freetrail_component_1.UserplanFreetrailComponent,
                userplan_startsubscription_component_1.UserplanStartsubscriptionComponent,
                userplan_subscribeduserlist_component_1.UserplanSubscribeduserlistComponent,
                login_component_1.LoginComponent,
                admin_component_1.AdminComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatExpansionModule,
                material_1.MatProgressSpinnerModule,
                http_1.HttpClientModule,
                material_1.MatListModule,
                material_1.MatSelectModule,
                material_1.MatOptionModule,
                material_1.MatNativeDateModule,
                material_1.MatTableModule,
                material_1.MatCheckboxModule,
                material_1.MatPaginatorModule,
                material_1.MatDatepickerModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map