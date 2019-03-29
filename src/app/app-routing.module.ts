import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import {PostMessagetemplateComponent } from "./posts/post-messagetemplate/post-messagetemplate.component";
import { UserplanFreetrailComponent } from './userplan/userplan-freetrail/userplan-freetrail.component';
import { UserplanSubscribeduserlistComponent } from './userplan/userplan-subscribeduserlist/userplan-subscribeduserlist.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'createtemp', component: PostMessagetemplateComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'freetrial', component: UserplanFreetrailComponent },
  { path: 'subscribed', component: UserplanSubscribeduserlistComponent },

  { path: 'edit/:postId', component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
