import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  email: string = '';
  password: string = '';
  invalidEmail: boolean = false;

  constructor(private router: Router, private authService: AuthService) { } // Inyecta el servicio AuthService

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['adminPanel']);
    }
  }

  validateEmail() {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    this.invalidEmail = !emailRegex.test(this.email);
  }
}
