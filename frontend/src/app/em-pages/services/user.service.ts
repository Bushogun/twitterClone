import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";
import { User } from "../models/User";
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private auth: Auth) { }

  register({ email , password } : any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  // createUser(
  //   formData: Partial<User>,
  //   // userId: Pick<User, "id">
  // ): Observable<User> {
  //   return this.http
  //     .post<User>(`${this.url}/signup`,
  //       { name: formData.name, email: formData.email, password: formData.password },
  //       this.httpOptions
  //     )
  //     .pipe(
  //       catchError(this.errorHandlerService.handleError<User>("createUser"))
  //     );
  // }
}
