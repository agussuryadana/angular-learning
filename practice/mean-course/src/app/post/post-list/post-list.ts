import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSubs!: Subscription;

  constructor(private postService: PostService) {}
  
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postSubs = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) =>  {
        this.posts = posts; 
      });
  }

  ngOnDestroy(): void {
    this.postSubs.unsubscribe();
  }
}
