import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  userIsSadmin = false
  private authListenerSubs: Subscription;
  private authUserTpye: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userIsSadmin  = this.authService.getIsSAdmin();
    console.log(this.authService.getIsSAdmin())
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
      this.authUserTpye = this.authService.getUserTypeListener().subscribe(isSadmin=> {
        this.userIsSadmin = isSadmin;
      });
      if(this.userIsAuthenticated)
      {
        this.authService.navToMessage()
      }
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
