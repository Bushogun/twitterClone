import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EMRoutingModule } from './em-routing.module';
import { SignupComponent } from './login/signup/signup.component';
import { SigninComponent } from './login/signin/signin.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutAppComponent } from './publications/layout-app/layout-app.component';
import { CreatePublicationComponent } from './publications/create-publication/create-publication.component';
import { MyPublicationsComponent } from './publications/my-publications/my-publications.component';
import { SeeAllPublicationsComponent } from './publications/see-all-publications/see-all-publications.component';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from "../shared/components/datepicker/datepicker.component";
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';


@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LayoutPageComponent,
        CreatePublicationComponent,
        LayoutAppComponent,
        MyPublicationsComponent,
        SeeAllPublicationsComponent,

    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        EMRoutingModule,
        DatepickerComponent,
        PaginatorComponent,
    ]
})
 export class emmodule { }
