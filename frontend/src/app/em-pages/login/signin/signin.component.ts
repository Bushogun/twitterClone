import { UsersService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  hide = true;

  constructor(
    private usersService:UsersService,
    private router:Router
  ){}

  emailCtrl = new FormControl<string>('',[
    Validators.required,
    Validators.email
]);

passwordCtrl = new FormControl<string>('',[
  Validators.required,
  Validators.minLength(8)
]);

onSubmit(): void {
  const email = this.emailCtrl.value?.trim() || '';
  const password = this.passwordCtrl.value?.trim() || '';

  this.usersService.login({ email: email, password: password })
    .then( () =>
      this.router.navigate(['/app/see-all']))
    .catch(error => {
      console.error('Error creating post:' , error);
      Swal.fire('Usuario o contraseña erróneos', "Failed", 'error' );
    });


  }
}

