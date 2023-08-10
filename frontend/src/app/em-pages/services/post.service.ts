import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";
import { Post } from "../models/Posts";
import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = "http://localhost:3000/app";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.url}/see-all`, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Post[]>("fetchAll", []))
      );
  }

  createPost(
    formData: Partial<Post>,
    // userId: Pick<User, "id">
  ): Observable<Post> {
    return this.http
      .post<Post>(`${this.url}/create`,
        { title: formData.title, content: formData.content, user_id: '1' },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Post>("createPost"))
      );
  }
}
