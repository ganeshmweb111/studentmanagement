import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  email: string = '';
  message: string = '';
  error: string = '';
  loading = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.message = '';
    this.error = '';
    this.loading = true;

    this.http.post<any>('https://localhost:7203/api/auth/forgot-password', {
      email: this.email
    }).subscribe({
      next: (res) => {
        this.message = 'Reset link sent successfully!';
        console.log(res); // contains resetLink (for testing)
        this.loading = false;
      },
error: (err) => {
  console.log("Error:", err);
  this.error = err.error?.message || err.message || 'Something went wrong';
  this.loading = false;
}
    });
  }
}