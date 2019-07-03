"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var posts_service_1 = require("./../../posts/posts.service");
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var material_1 = require("@angular/material");
var Angular_csv_1 = require("angular7-csv/dist/Angular-csv");
var UserplanFreetrailComponent = /** @class */ (function () {
    function UserplanFreetrailComponent(postsService) {
        this.postsService = postsService;
        this.isLoading = true;
        this.stardate = "";
        this.isSubscriptionClicked = false;
        this.userdetails = [];
        this.displayedColumns = ['Select', 'Email', 'Services', 'Phone', 'Country', 'IP'];
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
            _this.userdetails = _this.userdetails.filter(function (userdetails) { return userdetails.isfreetrailaproove === true; });
            _this.dataSource.data = _this.userdetails;
            _this.dismiss();
        });
    };
    UserplanFreetrailComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserplanFreetrailComponent.prototype.edit = function () {
    };
    UserplanFreetrailComponent.prototype.exportRecord = function () {
        var csvOptions = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'Your Holiday List :',
            useBom: true,
            noDownload: false,
            headers: ["Email", "Country", "Phone", "Expire", "Free Trail Aproove", "Subscribed", "Services"]
        };
        var arrayfilter = (this.userdetails.filter(function (userdetails) { return userdetails.isfreetrailaproove === true; }));
        arrayfilter.forEach(function (part, index, theArray) {
            //  let arr = theArray.map(t=>t.services) 
            //  part.services= arr.join(",")
            part.newServices = part.services.join(",");
            delete part.services;
            console.log(theArray);
            console.log(arrayfilter);
        });
        delete arrayfilter["services"];
        console.log(arrayfilter);
        new Angular_csv_1.AngularCsv(arrayfilter, "HolidayList", csvOptions);
        //  if(this.selection.selected.length>0)
        //  {
        //    if(this.selection.selected.length == 1)
        //    {
        //    let res =  this.selection.selected;
        //    let userde: Userdetails =   res[0] 
        //   if(!userde.isfreetrailaproove)
        //   {
        //   this.isLoading = true
        //   this.postsService.sendAprroveTrialRequest(res);
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