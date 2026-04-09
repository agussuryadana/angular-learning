import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
  @Output() postCreated = new EventEmitter<Post>();
  
  onAddPost(){
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    this.postCreated.emit(post);
  }
}
