import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private isSadmin = false;
userEmail = ""
  private token: string;
  private tokenTimer: any;
  userdetails:[AuthData]
  private authStatusListener = new Subject<boolean>();
  private userdetailUpdated = new Subject<AuthData[]>();
  private userTypeListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    if(this.getAuthData())
    {
      return true

    }
    else
    {
      return false

    }
  }

  navToMessage()
  {
    this.router.navigate(['/Messages']);

  }

  getIsSAdmin() {
    if(this.getUSer())
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getUserTypeListener()
  {
    return this.userTypeListener.asObservable();
  }

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post("http://75.98.169.159:1000/api/user/signup", authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.userEmail = email
    this.http
      .post<{ token: string; expiresIn: number, type: string }>(
        "http://75.98.169.159:1000/api/adminuser/login",
        authData
      )
      .subscribe(response => {
        if(response.token)
        {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          if(response.type == "sadmin")
          {
            this.isSadmin = true;
            this.userTypeListener.next(true);
          }
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(['/Messages']);

        }
      }
      else
      {
        alert("Authorisation Failed")
        this.authStatusListener.next(false);
      }
       
      });
  }

  

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    if(this.isSadmin)
    {
    localStorage.setItem("isSadmin", "1");
    }
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("isSadmin");

  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

  private getUSer() {
    const token = localStorage.getItem("isSadmin");
    if (!token) {
      return;
    }
    else if(token == "1")
    {

      return true

    }
    else
    {
      return false

    }
  }

  getUserList() {
    this.http
      .get<{ message: string; posts: any }>("http://75.98.169.159:1000/api/adminuser")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              email: post.email,
              type: post.type
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.userdetails = transformedPosts;
        this.userdetailUpdated.next([...this.userdetails]);
      });
  }

}
