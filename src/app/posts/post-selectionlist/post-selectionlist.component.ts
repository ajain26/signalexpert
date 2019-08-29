import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-selectionlist',
  templateUrl: './post-selectionlist.component.html',
  styleUrls: ['./post-selectionlist.component.css']
})
export class PostSelectionlistComponent implements OnInit {

  typesOfService: string[] = ['basic forex pack', 'premium forex pack', 'hni forex pack',
   'basic comex pack', 'premium comex pack'
   , 'hni comex pack'];
  selectedService: string[] = [];
    constructor( public postsService: PostsService){}

  ngOnInit(){} 
  onAreaListControlChanged(list)
  {
    let indexelement: number = this.selectedService.indexOf(list);
    if(indexelement !== -1)
    {
      this.selectedService.splice(indexelement, 1);
      this.postsService.addSevices(this.selectedService);
    }
    else
    {
    this.selectedService.push(list);
    this.postsService.addSevices(this.selectedService);
    }
  }
}
