import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private posts:PostsService){}
  
  postsData:any;


  ngOnInit(): void {
    this.getPostsWordpress();
  }

  getPostsWordpress(){
    this.posts.getPosts().subscribe((res)=>{
      this.postsData = res;
    })
  }


  
  


}
