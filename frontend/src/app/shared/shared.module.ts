import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponentComponent } from './components/message-component/message-component.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MessageComponentComponent,
  ],
  exports:[
    MessageComponentComponent,
  ],
  providers:[
    ]
})
export class SharedModule { }
