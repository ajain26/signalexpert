import { Userdetails } from './../userplan/userdetai.model';
import {ServiceModel}  from './../userplan/userdetai.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Post } from "./post.model";
import { Posttemplate } from "./messagetemplate.model";
import { DatePipe } from '@angular/common';

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private posttemplate: Posttemplate[] = [];
  private userdetails: Userdetails[] = [];
  private userfilterdetails: Userdetails[] = [];
  private userdetailUpdated = new Subject<Userdetails[]>();
  private userdetailFilterUpdated = new Subject<Userdetails[]>();

  private postsUpdated = new Subject<Post[]>();
  private postsTemplateUpdated = new Subject<Posttemplate[]>();
  private Services: string[] = [];
  pricing:ServiceModel[] = [];

  constructor(private http: HttpClient, private router: Router,private datepipe: DatePipe) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>("http://75.98.169.159:1000/api/posts")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              title: post.title,
              services:post.services.map(element => {
                console.log(element.toUpperCase())
               return this.titleCase(element)
              }),
              id: post._id,
              currentdate: this.datepipe.transform(post.date, 'yyyy-MM-dd')
            };
          }); 
        })
      )
      .subscribe(transformedPosts => {
        this.getPricing()
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
  
  getfilterUser(qs:string) {
    this.http
      .get<{ message: string; posts: any }>("http://75.98.169.159:1000/api/userdetails/filteruser" + qs )
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              email: post.Email,
              services: post.services,
              servicesname: post.services.map(model => model.name),
              country: post.Country,
              phone: post.PhoneNumber,
              issubscribed: post.issubscribed,
              isSubscriptionaproove: post.isSubscriptionaproove,
              isfreetrailaproove: post.isfreetrailaproove,
              isexpire: post.isexpire,
              startdate:this.datepipe.transform(post.startdate, 'yyyy-MM-dd') ? this.datepipe.transform(post.startdate, 'yyyy-MM-dd'):'',
              enddate: this.datepipe.transform(post.enddate, 'yyyy-MM-dd') ? this.datepipe.transform(post.enddate, 'yyyy-MM-dd'):'',
              IP: post.IP,
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        console.log(transformedPosts)
        this.userfilterdetails = transformedPosts;
        this.userdetailFilterUpdated.next([...this.userfilterdetails]);
      });
  }

  
   titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  getUserDetail() {
    this.http
      .get<{ message: string; posts: any }>("http://75.98.169.159:1000/api/userdetails/freeetrail")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              email: post.Email,
              services: post.services,
              servicesname: post.services.map(model => model.name),
              country: post.Country,
              phone: post.PhoneNumber,
              issubscribed: post.issubscribed,
              isSubscriptionaproove: post.isSubscriptionaproove,
              isfreetrailaproove: post.isfreetrailaproove,
              isexpire: post.isexpire,
              startdate:this.datepipe.transform(post.startdate, 'yyyy-MM-dd') ? this.datepipe.transform(post.startdate, 'yyyy-MM-dd'):'',
              enddate: this.datepipe.transform(post.enddate, 'yyyy-MM-dd') ? this.datepipe.transform(post.enddate, 'yyyy-MM-dd'):'',
              IP: post.IP,
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.userdetails = transformedPosts;
        this.userdetailUpdated.next([...this.userdetails]);
      });
  }

  getSubscribedUserDetail() {
    this.http
      .get<{ message: string; posts: any }>("http://75.98.169.159:1000/api/userdetails/getsubscribeduser")
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              email: post.Email,
              services: post.services,
              servicesname: post.services.map(model => model.name),
              country: post.Country,
              phone: post.PhoneNumber,
              issubscribed: post.issubscribed,
              isSubscriptionaproove: post.isSubscriptionaproove,
              isfreetrailaproove: post.isfreetrailaproove,
              isexpire: post.isexpire,
              startdate:this.datepipe.transform(post.startdate, 'yyyy-MM-dd') ? this.datepipe.transform(post.startdate, 'yyyy-MM-dd'):'',
              enddate: this.datepipe.transform(post.enddate, 'yyyy-MM-dd') ? this.datepipe.transform(post.enddate, 'yyyy-MM-dd'):'',
              IP: post.IP,
              amountrecive: post.amountrecive,
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        console.log(transformedPosts)
        this.userdetails = transformedPosts;
        this.userdetailUpdated.next([...this.userdetails]);
      });
  }

  getMesageTemplate() {
    this.http
      .get<{ message: string; posts: any }>("http://75.98.169.159:1000/posttemplate")
      .pipe(
        map(postData => {
          return postData.posts.map(postdf => {
            return {
              suffix: postdf.suffix,
              preffix: postdf.prefix,
              message: postdf.message,
              templatename: postdf.templatename
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.posttemplate = transformedPosts;
        this.postsTemplateUpdated.next([...this.posttemplate]);
      });
  }

  sendAprroveTrialRequest(userdetail: Userdetails[], startDate: String, endDate: String)
  {
    console.log(userdetail)
    this.http
      .post<{ message: string; posts: {string} }>(
        "http://75.98.169.159:1000/api/userdetails/aproovetrial",
       {Email: userdetail.map(t=>t.email).join(","),
       startdate: startDate,
       endate: endDate}
      )
      .subscribe(responseData => {
        if(responseData.posts['nModified'])
        {
          // this.userdetailUpdated.next([...this.userdetails]);
          this.getUserDetail()
        }
        else
        {

        }
      });

  }

  sendDeleteUsersRequest(userdetail: String)
  {
    this.http
      .delete<{ message: string}>(
        "http://75.98.169.159:1000/api/userdetails/deleteuser?Email="+ userdetail,
      )
      .subscribe(responseData => {
        console.log(responseData)
          alert("Record Deleted Succesfully");
          this.getUserDetail()
          this.getSubscribedUserDetail()
      });

  }

  getPricing()
  {
  
      this.http
      .get<{price: any }>("http://75.98.169.159:1000/api/userdetails/servicesweb")
      .pipe(
        map(postData => {
          return postData.price.map(post => {
            return {
              pricetype: post.pricetype,
              price: post.price,
              selected: post.selected,
              name: post.name,
              servicetype: post.servicetype,
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.pricing = transformedPosts;
        console.log(this.pricing)
      });

  }
  sendinitialSubscriptionRequest(userdetail: Userdetails)
  {
    this.http
      .post<{ message: string; posts: {string} }>(
        "http://75.98.169.159:1000/api/userdetails/intialSusbscription",
       {Email: userdetail.email, 
        fromdate: userdetail.fromdate,
         totalamount: userdetail.totalamount, 
         amountrecive: userdetail.amountrecive,
         enddate: userdetail.enddate,
         startdate:  userdetail.startdate,
         issubscribed: true,
         isSubscriptionaproove: true
        }
      )
      .subscribe(responseData => {
        console.log(responseData)
        if(responseData.posts['nModified'])
        {
          alert("record updated succesfully");
          this.getUserDetail()
         // userdetail.issubscribed = true
          //this.userdetailUpdated.next([...this.userdetails]);
        }
        else
        {
          alert("record not updated");
        }
      });

  }

  updateservices(Email: string, services: ServiceModel[], qs: string)
  {
    this.http
      .post<{ message: string; posts: {string} }>(
        "http://75.98.169.159:1000/api/userdetails/updateservices",
       {Email: Email, 
        services: services
        }
      )
      .subscribe(responseData => {
        console.log(responseData)
          alert("record updated succesfully");
          console.log(qs)
        this.getfilterUser(qs)
      });
  }

  sendaproovalSubscriptionRequest(userdetail: Userdetails)
  {
    this.http
      .post<{ message: string; posts: {string} }>(
        "http://75.98.169.159:1000/api/userdetails/aproveSusbscription",
       {Email: userdetail.email, 
        fromdate: userdetail.fromdate,
         totalamount: userdetail.totalamount, 
         amountrecive: userdetail.amountrecive,
         enddate: userdetail.enddate,
         startdate:  userdetail.fromdate,
         issubscribed: true
        }
      )
      .subscribe(responseData => {
        console.log(responseData)
        if(responseData.posts['nModified'])
        {
          alert("record updated succesfully");
           userdetail.issubscribed = true
           this.userdetailUpdated.next([...this.userdetails]);
        }
        else
        {
          alert("record not updated");
        }
      });

  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  getPostTemplateUpdateListener() {
    return this.postsTemplateUpdated.asObservable();
  }

  getUserDetailListener() {
    return this.userdetailUpdated.asObservable();
  }
  getUserfilterDetailListener()
  {
    return this.userdetailFilterUpdated.asObservable();
  }



  getPost(id: string) {
    return this.http.get<{ _id: string; title: string; services: [] }>(
      "http://75.98.169.159:1000/api/posts/" + id
    );
  }

  addPost(title: string, services: []) {
    const post: Post = { id: null, title: title, services: this.Services , currentdate: new Date()};
    console.log({ id: null, title: title, services: this.Services})
    this.http
      .post<{ message: string; postId: string }>(
        "http://75.98.169.159:1000/api/posts",
        post
      )
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);

      });
  }


  addSevices(service: string[]) {
    this.Services = service;
  }


  addTemplate(message: string, templatename: string, prefix: string, sufix: string) {
    const post: Posttemplate = { id: null, message: message, templatename: templatename, preffix: prefix, suffix: sufix };
      this.http
      .post<{ message: string; MessageObjId: string }>(
        "http://75.98.169.159:1000/posttemplate/template",
        post
      )
      .subscribe(responseData => {
        const id = responseData.MessageObjId;
        post.id = id;
        this.posttemplate.push(post);
        this.postsTemplateUpdated.next([...this.posttemplate]);
      });
  }

  updatePost(id: string, title: string, services: []) {
    const post: Post = { id: id, title: title, services: [],currentdate: new Date() };
    this.http
      .put("http://75.98.169.159:1000/api/posts/" + id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string) {
    this.http
      .delete("http://75.98.169.159:1000/api/posts/" + postId)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
}
