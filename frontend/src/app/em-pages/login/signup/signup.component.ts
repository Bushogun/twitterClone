import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { User } from "../../models/User";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  hide1 = true;
  hide2 = true;
  name : string = '';
  email : string = '';
  password : string = '';
  password2 : string = '';


  constructor(private usersService: UsersService,
            private router:Router
    ) { }

  nameCtrl = new FormControl<string>('',[
    Validators.required,
  ]);
  emailCtrl = new FormControl<string>('',[
    Validators.required,
    Validators.email
  ]);
  passwordCtrl = new FormControl<string>('',[
    Validators.required,
  ]);
  password2Ctrl = new FormControl<string>('',[
    Validators.required,
  ]);

  getName(txtName: string) {
    this.name = txtName;
    console.log({ txtName });
  }

  getEmail(txtEmail: string) {
    this.email = txtEmail;
    console.log({ txtEmail });
  }

  getPassword(txtPassword: string) {
    this.password = txtPassword;
    console.log({ txtPassword });
  }

  onSubmit(): void {
    const email = this.emailCtrl.value?.trim() || '';
    const password = this.passwordCtrl.value?.trim() || '';

  Swal.fire({
    timerProgressBar: true,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: true,
  })

  this.usersService.register({ email: email, password: password })
  .then( response => {
    console.log('User created:', response);
    Swal.fire('User created', "Success", 'success' );
    this.router.navigate(['/login/signin']);
  })
  .catch(error => {
    console.error('Error creating post:' , error);
    Swal.fire('Algo salió mal', "Failed", 'error' );
  });
  }
}


