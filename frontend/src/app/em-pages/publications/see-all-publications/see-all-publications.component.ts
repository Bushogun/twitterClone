import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Posts";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-see-all-publications',
  templateUrl: './see-all-publications.component.html',
  styleUrls: ['./see-all-publications.component.css']
})

export class SeeAllPublicationsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.getAll();
  }

  getAll(): Observable<Post[]> {
    return this.postService.getAll();
  }



}

