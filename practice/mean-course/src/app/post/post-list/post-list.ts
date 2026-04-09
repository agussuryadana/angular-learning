import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  // posts = [
  //   {title: "First Post", content: "this is First Post's"},
  //   {title: "Second Post", content: "this is Second Post's"},
  //   {title: "Third Post", content: "this is Third Post's"}
  // ];

  @Input() posts: Post[] = [];
}
