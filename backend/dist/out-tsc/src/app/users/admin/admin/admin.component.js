"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var admin_service_1 = require("../admin.service");
var material_1 = require("@angular/material");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
        this.isAddUser = false;
        this.userdetails = [];
        this.displayedColumns = ['select', 'email', 'type'];
        this.dataSource = new material_1.MatTableDataSource();
        this.selection = new collections_1.SelectionModel(true, []);
        this.foods = [
            { value: 'admin', viewValue: 'admin' },
            { value: 'super admin', viewValue: 'super admin' }
        ];
    }
    AdminComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    AdminComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    AdminComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password, this.selectedValue);
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.authService.getUserDetail();
        this.authService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.dataSource.data = _this.userdetails;
        });
    };
    AdminComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminComponent.prototype.adduser = function () {
        this.isAddUser = true;
    };
    AdminComponent.prototype.dismissAddUser = function () {
        this.isAddUser = false;
    };
    AdminComponent.prototype.createUserRequest = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.isAddUser = false;
        this.authService.createUser(form.value.email, form.value.password, "admin");
    };
    var _a;
    tslib_1.__decorate([
        core_1.ViewChild(material_1.MatPaginator),
        tslib_1.__metadata("design:type", typeof (_a = typeof material_1.MatPaginator !== "undefined" && material_1.MatPaginator) === "function" ? _a : Object)
    ], AdminComponent.prototype, "paginator", void 0);
    AdminComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [admin_service_1.AdminService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map