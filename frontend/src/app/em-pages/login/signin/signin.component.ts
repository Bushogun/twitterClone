import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  hide = true;
  usernameCtrl = new FormControl<string>('',[
    Validators.required,
    Validators.email
]);

passwordCtrl = new FormControl<string>('',[
  Validators.required,
  Validators.minLength(8)
]);

}
