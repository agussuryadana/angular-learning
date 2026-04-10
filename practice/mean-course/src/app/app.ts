import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreate } from './post/post-create/post-create';
import { Header } from "./header/header";
import { PostList } from "./post/post-list/post-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCreate, Header, PostList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
