import { PostsService } from './../../posts/posts.service';
import { Userdetails, ServiceModel } from './../userdetai.model';
import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource, MatInput} from '@angular/material';
import { NgForm } from "@angular/forms";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-userplan-freetrail',
  templateUrl: './userplan-freetrail.component.html',
  styleUrls: ['./userplan-freetrail.component.css']
})



export class UserplanFreetrailComponent implements OnInit {
  isLoading = true;
  stardate = ""
  isSubscriptionClicked = false;
  selectedUser: Userdetails;
  userdetails: Userdetails[] = [];
  displayedColumns: string[] = ['Select', 'Email', 'Services', 'Phone', 'Country','IP','Start Date', 'End Date'];
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
  openDialog(): void {
    const dialogRef = this.dialog.open(DilogSubscribeComponent, {
      width: '250px',
      data: {name: "", animal: ""}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.length > 1)
      {
  
         this.isLoading = true
         console.log(this.selectedUser)
         this.selectedUser.startdate = result[0];
         this.selectedUser.enddate = result[1];
         this.selectedUser.amountrecive = result[2];
         this.postsService.sendinitialSubscriptionRequest(this.selectedUser);
         this.selection.clear()
      }
      console.log('The dialog was closed');
    });
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
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.postsService.getUserDetail()
    this.postsService.getUserDetailListener()
    .subscribe((userdetails: Userdetails[]) => {
      this.userdetails = userdetails;
      this.isLoading = false
      this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.isfreetrailaproove === true && userdetails.isSubscriptionaproove === false )
  //    this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.isSubscriptionaproove === false )
      // this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.issubscribed === false )

      this.dataSource.data = this.userdetails
      this.dismiss();
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
   subscribe()
   {
    if(this.selection.selected.length == 1)
    {
      this.isSubscriptionClicked = true
      let res =  this.selection.selected;
      this.selectedUser =   res[0] 
      this.openDialog()
    }
    else if (this.selection.selected.length == 0)
    {
      alert("Please select record to subscribe")
    }
    else if (this.selection.selected.length >1)
    {
      alert("You can not subscribe more then 1 record")
    }
 
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
export interface AmountData {
  amount: string;
}
@Component({
  selector: 'app-dilog-subscribe',
  templateUrl: '../../custom/dilog-subscribe/dilog-subscribe.component.html',
})

export class DilogSubscribeComponent {
  stardate = new Date()
  date = new Date()
  enddate = this.date

  constructor(
    
    public dialogRef: MatDialogRef<DilogSubscribeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AmountData) {
      this.date.setDate(this.date.getDate() + 7); 
      this.enddate = this.date


    }

  onNoClick(): void {
    this.dialogRef.close([]);
  }
  saveClick(): void 
  {
    //alert(this.data.amount)
    this.dialogRef.close([this.stardate, this.enddate,this.data.amount]);
  }
  addStartDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.stardate =  event.value
     this.enddate  =  event.value


 }
 addEnddate(type: string, event: MatDatepickerInputEvent<Date>) {
     //this.selectedUser.enddate =  event.value;
     this.enddate = event.value
}
}

@Component({
  selector: 'app-dilog-delete',
  templateUrl: '../../custom/dilog-delete/dilog-delete.component.html'
})

export class DilogDeleteComponent {
  message: string;
  constructor(
    public dialogRef: MatDialogRef<DilogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AmountData) {
      this.message = "Are you sure you want to delete the user?"
    }

  onNoClick(): void {
    this.dialogRef.close([]);
  }
  saveClick(): void 
  {
    //alert(this.data.amount)
    this.dialogRef.close(["OK"]);
  }

}


@Component({
  selector: 'app-dilog-updateservice',
  templateUrl: '../../custom/dilog-updateservice/dilog-updateservice.component.html'
})


export class DilogUpdateServiceComponent  {
  message: string;
  selectedOptions:ServiceModel[] = []
  typesOfService: ServiceModel[] = []
  constructor(
    public dialogRef: MatDialogRef<DilogUpdateServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.message = "Are you sure you want to delete the user?"
      console.log(data)
      this.selectedOptions = data.typeservice.filter(option => { return data.selectedOptions.find(select => {return option.name == select.name && option.servicetype == select.servicetype})})
      this.typesOfService =  data.typeservice
    }
    onAreaListControlChanged(list)
    {
      // let indexelement: number = this.selectedOptions.indexOf(list);
      // if(indexelement !== -1)
      // {
      //   this.selectedOptions.splice(indexelement, 1);
      // }
      // else
      // {
      // this.selectedOptions.push(list);
      // }
    }
  onNoClick(): void {
    this.dialogRef.close([]);
  }
  saveClick(): void 
  {
    //alert(this.data.amount)
    console.log(this.selectedOptions)
    this.dialogRef.close(this.selectedOptions);
  }

}