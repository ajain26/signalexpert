import { UserplannotapprooveFreetrailComponent } from './userplan/userplannotapproove-freetrail/userplannotapproove-freetrail.component';
import { UserplannotsubscribedSubscribeduserlistComponent } from './userplan/userplannotsubscribed-subscribeduserlist/userplannotsubscribed-subscribeduserlist.component';
import { AdminComponent } from './users/admin/admin/admin.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import {  ClientUsersComponent } from "./users/client-users/client-users.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import {PostMessagetemplateComponent } from "./posts/post-messagetemplate/post-messagetemplate.component";
import { UserplanFreetrailComponent } from './userplan/userplan-freetrail/userplan-freetrail.component';
import { AuthGuard } from "./auth/auth.guard";
import { UserplanSubscribeduserlistComponent } from './userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component';
const routes: Routes = [
  { path: 'Messages', component: PostListComponent, canActivate: [AuthGuard] },
  { path: 'createtemp', component: PostMessagetemplateComponent, canActivate: [AuthGuard]},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'freetrial', component: UserplanFreetrailComponent, canActivate: [AuthGuard] },
  { path: 'subscribed', component: UserplanSubscribeduserlistComponent, canActivate: [AuthGuard] },
  { path: 'notfreetrial', component: UserplannotapprooveFreetrailComponent, canActivate: [AuthGuard]},
  { path: 'notsubscribed', component: UserplannotsubscribedSubscribeduserlistComponent, canActivate: [AuthGuard] },
  { path: "", component: LoginComponent },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  {  path: 'Admin List', component: AdminComponent, canActivate: [AuthGuard] },
  {  path: 'All Users', component: ClientUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule {}
