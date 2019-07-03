"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var posts_service_1 = require("./../../posts/posts.service");
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
var UserplannotsubscribedSubscribeduserlistComponent = /** @class */ (function () {
    function UserplannotsubscribedSubscribeduserlistComponent(postsService) {
        this.postsService = postsService;
        this.isLoading = true;
        this.stardate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'IP',
            'Total Amount Recieved', 'Amount Recieved'];
        this.dataSource = new material_1.MatTableDataSource();
        this.selection = new collections_1.SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    UserplannotsubscribedSubscribeduserlistComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserplannotsubscribedSubscribeduserlistComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.postsService.getSubscribedUserDetail();
        this.postsService.getUserDetailListener()
            .subscribe(function (userdetails) {
            _this.userdetails = userdetails;
            _this.isLoading = false;
            _this.dataSource.data = _this.userdetails.filter(function (userdetails) { return userdetails.isSubscriptionaproove === false; });
            _this.dismiss();
        });
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.edit = function () {
        // this.isLoading = true;
        //  this.postsService.sendAprroveTrialRequest(this.selection)
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.trial = function () {
        // let userde: Userdetails =   res[0] 
        if (this.selection.selected.length > 0) {
            this.isLoading = true;
            this.postsService.sendAprroveTrialRequest(this.selection.selected, "", "");
        }
        else {
            alert("Please select any record for approval");
        }
        //  if(this.selection.selected.length>0)
        //  {
        //    if(this.selection.selected.length == 1)
        //    {
        //    let res =  this.selection.selected;
        //    let userde: Userdetails =   res[0] 
        //   if(!userde.isSubscriptionaproove)
        //   {
        //   this.isLoading = true
        //   this.postsService.sendAprroveTrialRequest(userde);
        //   }
        //   else
        //   { 
        //     alert("free trail already aprroved for the record");
        //   }
        //    }
        //    else
        //    {
        //    alert("you can not select more then one record");
        //    }
        //  }
        //  else
        //  {
        //    alert("Please select any record for approval");
        //  }
        // this.postsService.
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.subscribe = function () {
        this.isSubscriptionClicked = true;
        var res = this.selection.selected;
        this.selectedUser = res[0];
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.onsendDetail = function (form) {
        if (!this.selectedUser.fromdate) {
            alert("Please select fromdate");
        }
        else if (!this.selectedUser.enddate) {
            alert("Please select enddate");
        }
        else {
            this.isLoading = true;
            this.selectedUser.isSubscriptionaproove = true;
            this.selectedUser.amountrecive = form.value.amountrecive;
            alert(+this.selectedUser.amountrecive);
            alert(+this.selectedUser.totalamount);
            var respo = +this.selectedUser.totalamount + +this.selectedUser.amountrecive;
            alert(respo.toString());
            this.selectedUser.totalamount = respo.toString();
            this.postsService.sendaproovalSubscriptionRequest(this.selectedUser);
        }
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.addStartDate = function (type, event) {
        this.selectedUser.fromdate = event.value;
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.addEnddate = function (type, event) {
        this.selectedUser.enddate = event.value;
    };
    UserplannotsubscribedSubscribeduserlistComponent.prototype.dismiss = function () {
        this.isSubscriptionClicked = false;
    };
    tslib_1.__decorate([
        core_1.ViewChild(material_1.MatPaginator),
        tslib_1.__metadata("design:type", material_1.MatPaginator)
    ], UserplannotsubscribedSubscribeduserlistComponent.prototype, "paginator", void 0);
    UserplannotsubscribedSubscribeduserlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-userplannotsubscribed-subscribeduserlist',
            templateUrl: './userplannotsubscribed-subscribeduserlist.component.html',
            styleUrls: ['./userplannotsubscribed-subscribeduserlist.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [posts_service_1.PostsService])
    ], UserplannotsubscribedSubscribeduserlistComponent);
    return UserplannotsubscribedSubscribeduserlistComponent;
}());
exports.UserplannotsubscribedSubscribeduserlistComponent = UserplannotsubscribedSubscribeduserlistComponent;
//# sourceMappingURL=userplannotsubscribed-subscribeduserlist.component.js.map