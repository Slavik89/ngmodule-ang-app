import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnDestroy {

  posts: any[] = [];
  private postsSub!: Subscription;

  constructor(private postService: PostServiceService) {}
  
  ngOnInit(): void {
    
    this.postsSub = this.postService.getPosts().subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
   
      this.postsSub.unsubscribe();
  
    
  }
  
}
