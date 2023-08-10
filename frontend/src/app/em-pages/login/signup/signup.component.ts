import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide1 = true;
  hide2 = true;
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

}
