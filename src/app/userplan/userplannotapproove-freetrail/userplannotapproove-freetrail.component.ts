import { PostsService } from './../../posts/posts.service';
import { Userdetails } from './../userdetai.model';
import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource, MatInput} from '@angular/material';
import { NgForm } from "@angular/forms";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'

@Component({
  selector: 'app-userplannotapproove-freetrail',
  templateUrl: './userplannotapproove-freetrail.component.html',
  styleUrls: ['./userplannotapproove-freetrail.component.css']
})

export class UserplannotapprooveFreetrailComponent implements OnInit {
  isLoading = true;
  startdate = ""
  enddate = ""
  isSubscriptionClicked = false;
  selectedUser: Userdetails;
  userdetails: Userdetails[] = [];
  displayedColumns: string[] = ['Select', 'Email', 'Services', 'Phone', 'Country','IP'];
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
    this.postsService.getUserDetail()
    this.postsService.getUserDetailListener()
    .subscribe((userdetails: Userdetails[]) => {
      this.userdetails = userdetails;
      this.isLoading = false
      this.userdetails = this.userdetails.filter( (userdetails: Userdetails) => userdetails.isfreetrailaproove === false)
      this.dataSource.data = this.userdetails
      this.dismiss();
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
   openDialog(): void {
    const dialogRef = this.dialog.open(DilogdateStartendComponent, {
      width: '250px',
      data: {name: "", animal: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.length > 1)
      {
        this.startdate = result[0]
        this.enddate = result[1]
        let res =  this.selection.selected;
        this.isLoading = true
        this.postsService.sendAprroveTrialRequest(res, this.startdate, this.enddate);
        this.selection.clear()
      }
      console.log('The dialog was closed');
    });
  }

  exportRecord()
   { 
    const  csvOptions = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'User Data :',
      useBom: true,
      noDownload: false,
      headers: ["Email", "Country", "Phone","Expire","Free Trail Aproove","Subscribed", "IP","Services"]
    };
 var arrayfilter =   this.userdetails
 arrayfilter.forEach(function(part, index, theArray) {
    part.newServices =  part.services.join(",")
    delete part.services
    delete part.startdate
    delete part.enddate
   console.log(theArray)
   console.log(arrayfilter)
});
delete arrayfilter["services"]
console.log(arrayfilter)
 new  AngularCsv(arrayfilter, "Userdata", csvOptions);
   }

   trial()
   { 
    if(this.selection.selected.length>0)
    {
    this.openDialog()
    }
    else
    {
      alert("Please select any record for approval");
    }
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
      this.isLoading = true
      this.selectedUser.amountrecive = form.value.amountrecive;
      this.selectedUser.totalamount = form.value.amountrecive;
      this.postsService.sendinitialSubscriptionRequest(this.selectedUser);
     }
   }
  
   dismiss()
   {
    this.isSubscriptionClicked = false
   }
}
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-dilogdate-startend',
  templateUrl: '../../custom/dilogdate-startend/dilogdate-startend.component.html',
})
export class DilogdateStartendComponent {
  stardate = new Date()
  enddate = new Date();

  constructor(
    public dialogRef: MatDialogRef<DilogdateStartendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close([]);
  }
  saveClick(): void 
  {
    this.dialogRef.close([this.stardate, this.enddate]);

  }

  addStartDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.stardate =  event.value
 }
 addEnddate(type: string, event: MatDatepickerInputEvent<Date>) {
     //this.selectedUser.enddate =  event.value;
     this.enddate = event.value
}
}
