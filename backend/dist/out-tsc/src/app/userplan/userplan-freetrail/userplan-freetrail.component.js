"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var posts_service_1 = require("./../../posts/posts.service");
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
var UserplanFreetrailComponent = /** @class */ (function () {
    function UserplanFreetrailComponent(postsService) {
        this.postsService = postsService;
        this.isLoading = true;
        this.stardate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'Free Trial Aprroved', 'IP'];
        this.dataSource = new material_1.MatTableDataSource();
        this.selection = new collections_1.SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplanFreetrailComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplanFreetrailComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplanFreetrailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.dataSource.data = _this.userdetails;
            _this.dismiss();
        });
    };
    UserplanFreetrailComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplanFreetrailComponent.prototype.edit = function () {
        // this.isLoading = true;
        //  this.postsService.sendAprroveTrialRequest(this.selection)
    };
    UserplanFreetrailComponent.prototype.trial = function () {
        if (this.selection.selected.length > 0) {
            if (this.selection.selected.length == 1) {
                var res = this.selection.selected;
                var userde = res[0];
                if (!userde.isfreetrailaproove) {
                    this.isLoading = true;
                    this.postsService.sendAprroveTrialRequest(userde);
                }
                else {
                    alert("free trail already aprroved for the record");
                }
            }
            else {
                alert("you can not select more then one record");
            }
        }
        else {
            alert("Please select any record for approval");
        }
        // this.postsService.
    };
    UserplanFreetrailComponent.prototype.subscribe = function () {
        this.isSubscriptionClicked = true;
        var res = this.selection.selected;
        this.selectedUser = res[0];
    };
    UserplanFreetrailComponent.prototype.onsendDetail = function (form) {
        if (!this.selectedUser.fromdate) {
            alert("Please select fromdate");
        }
        else if (!this.selectedUser.enddate) {
            alert("Please select enddate");
        }
        else {
            this.isLoading = true;
            this.selectedUser.amountrecive = form.value.amountrecive;
            this.selectedUser.totalamount = form.value.amountrecive;
            this.postsService.sendinitialSubscriptionRequest(this.selectedUser);
        }
    };
    UserplanFreetrailComponent.prototype.addStartDate = function (type, event) {
        this.selectedUser.fromdate = event.value;
    };
    UserplanFreetrailComponent.prototype.addEnddate = function (type, event) {
        this.selectedUser.enddate = event.value;
    };
    UserplanFreetrailComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib_1.__decorate([
        core_1.ViewChild(material_1.MatPaginator),
        tslib_1.__metadata("design:type", material_1.MatPaginator)
    ], UserplanFreetrailComponent.prototype, "paginator", void 0);
    UserplanFreetrailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-userplan-freetrail',
            templateUrl: './userplan-freetrail.component.html',
            styleUrls: ['./userplan-freetrail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService])
    ], UserplanFreetrailComponent);
    return UserplanFreetrailComponent;
}());
exports.UserplanFreetrailComponent = UserplanFreetrailComponent;
//# sourceMappingURL=userplan-freetrail.component.js.map