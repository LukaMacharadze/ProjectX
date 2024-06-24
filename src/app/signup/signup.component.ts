import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = ''; 

  onSubmit() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.alertMessage = 'Fill all the inputs.';
      this.alertType = 'error'; 
      this.showAlert = true;
    } else if (this.password !== this.confirmPassword) {
      this.alertMessage = 'Passwords do not match.';
      this.alertType = 'error'; 
      this.showAlert = true;
    } else {
      this.alertMessage = 'You signed up successfully!';
      this.alertType = 'success'; 
      this.showAlert = true;
    }

    
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
