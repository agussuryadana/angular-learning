import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, ],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate {

  enteredTitle ='';
  enteredContent ='';
  
  constructor(private postService: PostService) {}

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    
    this.postService.addPost(post);
  }
}
