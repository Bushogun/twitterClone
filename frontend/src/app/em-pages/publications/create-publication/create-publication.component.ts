import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent {
  // today = new Date();

  titleCtrl = new FormControl<string>('', [
    Validators.required
  ]);

  messageCtrl = new FormControl<string>('', [
    Validators.required
  ]);

  getTitle(txtTitle: string) {
    console.log({ txtTitle });
  }

  getMessage(txtMessage: string) {
    console.log({ txtMessage });
  }

  // onSubmit() {
  //   const title = this.titleCtrl.value;
  //   const message = this.messageCtrl.value;
  //   console.log('Title:', title);
  //   console.log('Message:', message);
  //   console.log('Current Date:', this.today);
  // }
}
