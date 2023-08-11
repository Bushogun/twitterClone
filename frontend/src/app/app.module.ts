import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EMRoutingModule } from './em-pages/em-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth'
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    EMRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    provideFirebaseApp(()=> initializeApp (environment)),
    provideAuth(()=>getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
