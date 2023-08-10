import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { CreatePublicationComponent } from './publications/create-publication/create-publication.component';
import { LayoutAppComponent } from './publications/layout-app/layout-app.component';
import { MyPublicationsComponent } from './publications/my-publications/my-publications.component';
import { SeeAllPublicationsComponent } from './publications/see-all-publications/see-all-publications.component';

const routes: Routes = [
  {
    path: 'login',
    component: LayoutPageComponent,
    children: [
    {
      path: '',
      redirectTo: 'signin',
      pathMatch: 'full',
    },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    ]
  },
  {
    path: 'app',
    component: LayoutAppComponent,
    children: [
    { path: 'create', component: CreatePublicationComponent },
    { path: 'my-publications', component: MyPublicationsComponent },
    { path: 'see-all', component: SeeAllPublicationsComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMRoutingModule { }
