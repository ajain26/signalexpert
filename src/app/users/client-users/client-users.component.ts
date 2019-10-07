import { PostsService } from './../../posts/posts.service';
import { Userdetails, ServiceModel } from '../../userplan/userdetai.model';
import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource, MatInput} from '@angular/material';
import { NgForm } from "@angular/forms";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DilogUpdateServiceComponent } from '../../userplan/userplan-freetrail/userplan-freetrail.component';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-client-users',
  templateUrl: './client-users.component.html',
  styleUrls: ['./client-users.component.css']
})
export class ClientUsersComponent implements OnInit {
  isLoading = true;
  recorddetail = "Free Trail and "
  selectServices = "Basic Forex Pack"
  totalrecord = "Total records 0 for "
  selectServicesArray = []
  stardate = ""
  qs = "?isfreetrailaproove=true&"
  isSubscriptionClicked = false;
  selectedUser: Userdetails;
  userdetails: Userdetails[] = [];
  // displayedColumns: string[] = ['Select', 'Email', 'Services', 'Phone', 'Country','IP','Start Date', 'End Date'];
  displayedColumns: string[] = ['Select', 'Email', 'Services', 'Phone'];

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
  constructor(  public postsService: PostsService, public dialog: MatDialog) {
  }

  someMethod()
  {
 
  console.log("HI")
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
     // this.openDialogDelete()
    }
   }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.qs + 'services=' + this.selectServices)
    this.postsService.getfilterUser(this.qs + 'services=' + this.selectServices.toLowerCase())
    this.postsService.getUserfilterDetailListener()
    .subscribe((userdetails: Userdetails[]) => {
      this.userdetails = userdetails;
      this.isLoading = false
  //    this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.isSubscriptionaproove === false )
      // this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.issubscribed === false )
      this.totalrecord = "Total " +  String(userdetails.length) + " records found for"
      this.dataSource.data = this.userdetails
      this.dismiss();
    });

  }
  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(DilogUpdateServiceComponent,{
      width: '400px',
      data: {selectedOptions: this.selectServicesArray, typeservice: this.postsService.pricing}
    });

    dialogRef.afterClosed().subscribe(result => {
         if (result.length > 0)
         {
          this.selectServicesArray = result
                  // this.isLoading = true
        // this.postsService.sendDeleteUsersRequest(this.selection.selected.map(t=>t.email).join(","));
        this.isLoading = true
        this.postsService.updateservices(this.selection.selected[0].email, this.selectServicesArray, this.qs + 'services=' + this.selectServices.toLowerCase())

         this.selection.clear()
         }
         else 
         {
           alert("Please select services to update")
         }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   edit()
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
      title: 'Your Holiday List :',
      useBom: true,
      noDownload: false,
      headers: ["Email", "Country", "Phone","Expire","Free Trail Aproove","Subscribed","Start Date", "End Date", "IP","Services"]
    };
 var arrayfilter =    (this.userdetails.filter( (userdetails: Userdetails) => userdetails.isfreetrailaproove === true))
 arrayfilter.forEach(function(part, index, theArray) {
    part.newServices =  part.services.join(",")
    delete part.services
   console.log(theArray)
   console.log(arrayfilter)
});
delete arrayfilter["services"]
console.log(arrayfilter)
 new  AngularCsv(arrayfilter, "Userdata", csvOptions);
   }
   updateService()
    {
    if(this.selection.selected.length == 1)
    {

      this.selectServicesArray = this.selection.selected[0].services
      console.log(this.selectServicesArray)
      this.openDialogUpdate()
    }
    else if (this.selection.selected.length == 0)
    {
      alert("Please select record to updateservices")
    }
    else if (this.selection.selected.length >1)
    {
      alert('You can not updateservices of more then 1 record')
    }
    }
   selectdMenu(pText :string)
   {
      this.recorddetail =  pText + " and "
      this.createQSFilterUser(pText)

   }
   createQSFilterUser(pText: string)
   {
    this.isLoading = true

       // ?isfreetrailaproove=true&services=basic forex pack
     //issubscribed
     //isfreetrailaproove
     //isexpire
     //isSubscriptionaproove
    if(pText == "Free Trail Pending")
    {
       this.qs  = "?isfreetrailaproove=false&isSubscriptionaproove=false&issubscribed=false&"
    }
    else if(pText == "Free Trail")
    {
      this.qs  =  "?isfreetrailaproove=true&issubscribed=false&isSubscriptionaproove=false&"

    }
    else if(pText == "Subscription Pending")
    {
      this.qs  =    "?isSubscriptionaproove=false&issubscribed=true&"

    }
    else if(pText == "Subscribed")
    {
      this.qs  =  "?issubscribed=true&isSubscriptionaproove=true&"
    }
    console.log(this.qs + 'services=' + this.selectServices.toLowerCase())
    this.postsService.getfilterUser(this.qs + 'services=' + this.selectServices.toLowerCase())

   }
   selectdServices(pText :string)
   {
      
          this.selectServices =  pText 
        this.createQSFilterUser("")
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
      this.isLoading = true
      this.selectedUser.amountrecive = form.value.amountrecive;
      this.selectedUser.totalamount = form.value.amountrecive;
      this.postsService.sendinitialSubscriptionRequest(this.selectedUser);
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

