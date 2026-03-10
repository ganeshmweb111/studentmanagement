import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

login() {

  this.auth.login({
    email: this.email,
    password: this.password
  }).subscribe({
    next: (res) => {

      this.auth.saveToken(res.token, res.role);

      // ✅ save logged-in user
      localStorage.setItem('userEmail', this.email);

      this.router.navigate(['/dashboard']);
    },
    error: () => alert('Invalid credentials')
  });
}
}