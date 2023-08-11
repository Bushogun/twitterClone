import { Router } from '@angular/router';
import { UsersService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.css']
})
export class LayoutAppComponent {

  constructor(
    private usersService : UsersService,
    private router : Router,
    ){}

  onClick(){
    this.usersService.logout()
    .then(()=>{
      this.router.navigate(['/login/signin']);
    })
    .catch(error=>console.log(error));

  }

}
