"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var posts_service_1 = require("./../../posts/posts.service");
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
var dialog_1 = require("@angular/material/dialog");
var UserplannotapprooveFreetrailComponent = /** @class */ (function () {
    function UserplannotapprooveFreetrailComponent(postsService, dialog) {
        this.postsService = postsService;
        this.dialog = dialog;
        this.isLoading = true;
        this.startdate = "";
        this.enddate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'IP'];
        this.dataSource = new material_1.MatTableDataSource();
        this.selection = new collections_1.SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplannotapprooveFreetrailComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplannotapprooveFreetrailComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplannotapprooveFreetrailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.userdetails = _this.userdetails.filter(function (userdetails) { return userdetails.isfreetrailaproove === false; });
            _this.dataSource.data = _this.userdetails;
            _this.dismiss();
        });
    };
    UserplannotapprooveFreetrailComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplannotapprooveFreetrailComponent.prototype.edit = function () {
        // this.isLoading = true;
        //  this.postsService.sendAprroveTrialRequest(this.selection)
    };
    UserplannotapprooveFreetrailComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DilogdateStartendComponent, {
            width: '250px',
            data: { name: "", animal: "" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.length > 1) {
                _this.startdate = result[0];
                _this.enddate = result[1];
                var res = _this.selection.selected;
                _this.isLoading = true;
                _this.postsService.sendAprroveTrialRequest(res, _this.startdate, _this.enddate);
                _this.selection.clear();
            }
            console.log('The dialog was closed');
        });
    };
    UserplannotapprooveFreetrailComponent.prototype.trial = function () {
        if (this.selection.selected.length > 0) {
            this.openDialog();
        }
        else {
            alert("Please select any record for approval");
        }
    };
    UserplannotapprooveFreetrailComponent.prototype.subscribe = function () {
        this.isSubscriptionClicked = true;
        var res = this.selection.selected;
        this.selectedUser = res[0];
    };
    UserplannotapprooveFreetrailComponent.prototype.onsendDetail = function (form) {
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
    UserplannotapprooveFreetrailComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib_1.__decorate([
        core_1.ViewChild(material_1.MatPaginator),
        tslib_1.__metadata("design:type", material_1.MatPaginator)
    ], UserplannotapprooveFreetrailComponent.prototype, "paginator", void 0);
    UserplannotapprooveFreetrailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-userplannotapproove-freetrail',
            templateUrl: './userplannotapproove-freetrail.component.html',
            styleUrls: ['./userplannotapproove-freetrail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService, dialog_1.MatDialog])
    ], UserplannotapprooveFreetrailComponent);
    return UserplannotapprooveFreetrailComponent;
}());
exports.UserplannotapprooveFreetrailComponent = UserplannotapprooveFreetrailComponent;
var DilogdateStartendComponent = /** @class */ (function () {
    function DilogdateStartendComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.stardate = new Date();
        this.enddate = new Date();
    }
    DilogdateStartendComponent.prototype.onNoClick = function () {
        this.dialogRef.close([]);
    };
    DilogdateStartendComponent.prototype.saveClick = function () {
        this.dialogRef.close([this.stardate, this.enddate]);
    };
    DilogdateStartendComponent.prototype.addStartDate = function (type, event) {
        this.stardate = event.value;
    };
    DilogdateStartendComponent.prototype.addEnddate = function (type, event) {
        //this.selectedUser.enddate =  event.value;
        this.enddate = event.value;
    };
    DilogdateStartendComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dilogdate-startend',
            templateUrl: '../../custom/dilogdate-startend/dilogdate-startend.component.html',
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], DilogdateStartendComponent);
    return DilogdateStartendComponent;
}());
exports.DilogdateStartendComponent = DilogdateStartendComponent;
//# sourceMappingURL=userplannotapproove-freetrail.component.js.map