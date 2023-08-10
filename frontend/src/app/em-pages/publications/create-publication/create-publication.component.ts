import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { DatePipe } from '@angular/common';
import { Post } from "../../models/Posts";


@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {
  titulo: string = '';
  mensaje: string = '';
  today = new Date();

  constructor(private postService: PostService) {}

  titleCtrl = new FormControl<string>('', [
    Validators.required
  ]);

  messageCtrl = new FormControl<string>('', [
    Validators.required
  ]);

  getTitle(txtTitle: string) {
    this.titulo = txtTitle;
    console.log({ txtTitle });
  }

  getMessage(txtMessage: string) {
    this.mensaje = txtMessage;
    console.log({ txtMessage });
  }



  onSubmit(): void {
    const title = this.titleCtrl.value?.trim() || '';
    const message = this.messageCtrl.value?.trim() || '';

    if (!title || !message) {
      // Manejar caso de campos vacíos
      console.error('Title and message are required.');
      return;
    }

    const post: Partial<Post> = {
      title: title,
      content: message,
      user_id: 1
    };

    this.postService.createPost(post).subscribe(
      (response) => {
        console.log('Post created:', response);
      },
      (error) => {
        console.error('Error creating post:', error);
      }
    );


  }
}
