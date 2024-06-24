import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = '';
  subject: string = '';
  message: string = '';
  isFormSubmitted: boolean = false;
  isInputsFilled: boolean = true;

  submitForm(): void {
    if (this.email && this.subject && this.message) {
      this.isFormSubmitted = true; 
      setTimeout(() => {
        this.isFormSubmitted = false; 
      }, 3000); 
    } else {
      this.isInputsFilled = false; 
      setTimeout(() => {
        this.isInputsFilled = true; 
      }, 3000); 
    }
  }
}
