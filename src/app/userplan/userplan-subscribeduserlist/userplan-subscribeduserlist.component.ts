import { PostsService } from './../../posts/posts.service';
import { Userdetails } from './../userdetai.model';
import { Component, OnInit, ViewChild,Inject} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource, MatInput} from '@angular/material';
import { NgForm } from "@angular/forms";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DilogDeleteComponent } from '../userplan-freetrail/userplan-freetrail.component';


@Component({
  selector: 'app-userplan-subscribeduserlist',
  templateUrl: './userplan-subscribeduserlist.component.html',
  styleUrls: ['./userplan-subscribeduserlist.component.css']
})
export class UserplanSubscribeduserlistComponent implements OnInit {

  isLoading = true;
  stardate = ""
  isSubscriptionClicked = false;
  selectedUser: Userdetails;
  userdetails: Userdetails[] = [];
  displayedColumns: string[] = ['Select', 'Email', 'Services', 'Phone', 'Country','IP','Start Date','End Date','Amount'];
  dataSource = new MatTableDataSource<Userdetails>();
  selection = new SelectionModel<Userdetails>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor(  public postsService: PostsService, public dialog: MatDialog) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.postsService.getSubscribedUserDetail()
    this.postsService.getUserDetailListener()
    .subscribe((userdetails: Userdetails[]) => {
      this.userdetails = userdetails.filter( (userdetails: Userdetails) => userdetails.issubscribed === true && userdetails.isSubscriptionaproove === true) ;
      this.isLoading = false
      this.dataSource.data  = this.userdetails
      this.dismiss();
    });

  }

  deleteUser()
  {
   if (this.selection.selected.length == 0)
   {
     alert("Please select record to delete")
   }
   else 
   {
     this.isSubscriptionClicked = true
     let res =  this.selection.selected;
     this.openDialogDelete()
   }
  }
  openDialogDelete(): void {
    const dialogRef = this.dialog.open(DilogDeleteComponent, {
      width: '250px',
      data: {name: "", animal: ""}
    });
    dialogRef.afterClosed().subscribe(result => {
         if (result.length > 0)
         {
         this.isLoading = true
         this.postsService.sendDeleteUsersRequest(this.selection.selected.map(t=>t.email).join(","));
         this.selection.clear()
         }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   edit()
   {
    // this.isLoading = true;
  //  this.postsService.sendAprroveTrialRequest(this.selection)
   }
   trial()
   { 
   
   }
   exportRecord()
   { 
    const  csvOptions = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'User Data',
      useBom: true,
      noDownload: false,
      headers: ["Email", "Country", "Phone","Start Date", "End Date", "IP","Amount","Services"]
    };
 var arrayfilter = (this.userdetails.filter( (userdetails: Userdetails) => userdetails.issubscribed === true))
 arrayfilter.forEach(function(part, index, theArray) {
    part.newServices =  part.services.join(",")
    delete part.services
    delete part.isexpire
    delete part.isfreetrailaproove
    delete part.issubscribed
    delete part.isSubscriptionaproove
   console.log(theArray)
   console.log(arrayfilter)
});
delete arrayfilter["services"]
console.log(arrayfilter)
 new  AngularCsv(arrayfilter, "Userdata", csvOptions);
   }
   subscribe()
   {
    this.isSubscriptionClicked = true
    let res =  this.selection.selected;
    this.selectedUser =   res[0] 
   }
   onsendDetail(form: NgForm) {
     if(!this.selectedUser.fromdate)
     {
      alert("Please select fromdate")
     }
    else if(!this.selectedUser.enddate)
     {
      alert("Please select enddate")
     }
     else
     {
      this.isLoading = true;
      this.selectedUser.isSubscriptionaproove = true;
      this.selectedUser.amountrecive = form.value.amountrecive;
      alert(+this.selectedUser.amountrecive);
      alert(+this.selectedUser.totalamount);
      let respo =  +this.selectedUser.totalamount +  +this.selectedUser.amountrecive;
      alert(respo.toString());
     this.selectedUser.totalamount = respo.toString();
     this.postsService.sendaproovalSubscriptionRequest(this.selectedUser);
     }
   }
  addStartDate(type: string, event: MatDatepickerInputEvent<Date>) {
     this.selectedUser.fromdate =  event.value;
  }
  addEnddate(type: string, event: MatDatepickerInputEvent<Date>) {
      this.selectedUser.enddate =  event.value;
   }
   dismiss()
   {
    this.isSubscriptionClicked = false
   }
}


