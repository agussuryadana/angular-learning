import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreate } from './post/post-create/post-create';
import { Header } from "./header/header";
import { PostList } from "./post/post-list/post-list";
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCreate, Header, PostList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  StoredPosts: Post[] = [];

  onPostAdded(post: Post) {
    this.StoredPosts.push(post);
  }
}
