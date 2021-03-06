import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSelectModule,
  MatOptionModule,
  MatNativeDateModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatDialogModule,
  MatMenuModule

} from "@angular/material";


import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { PostSelectionlistComponent } from './posts/post-selectionlist/post-selectionlist.component';
import { PostMessagetemplateComponent } from './posts/post-messagetemplate/post-messagetemplate.component';
import { UserplanFreetrailComponent, DilogSubscribeComponent, DilogDeleteComponent,DilogUpdateServiceComponent } from './userplan/userplan-freetrail/userplan-freetrail.component';
import { UserplanStartsubscriptionComponent } from './userplan/userplan-startsubscription/userplan-startsubscription.component';
import { UserplanSubscribeduserlistComponent} from './userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './users/admin/admin/admin.component';
import { UserplannotapprooveFreetrailComponent, DilogdateStartendComponent } from './userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component';
import { UserplannotsubscribedSubscribeduserlistComponent } from './userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component';
import { ClientUsersComponent } from './users/client-users/client-users.component';
import { InlineEditComponent } from './custom/inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    PostSelectionlistComponent,
    PostMessagetemplateComponent,
    UserplanFreetrailComponent,
    UserplanStartsubscriptionComponent,
    UserplanSubscribeduserlistComponent,
    LoginComponent,
    AdminComponent,
    UserplannotapprooveFreetrailComponent,
    UserplannotsubscribedSubscribeduserlistComponent,
    DilogdateStartendComponent,
    DilogSubscribeComponent,
    DilogDeleteComponent,
    DilogUpdateServiceComponent,
    ClientUsersComponent,
    InlineEditComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    SatPopoverModule,
    MatMenuModule
    ],
  providers: [DatePipe],
  entryComponents: [UserplannotapprooveFreetrailComponent, DilogdateStartendComponent,UserplanFreetrailComponent, UserplannotsubscribedSubscribeduserlistComponent,DilogSubscribeComponent,DilogDeleteComponent,DilogUpdateServiceComponent],

  bootstrap: [AppComponent]
})
export class AppModule {}
