import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  email: string = '';
  password: string = '';
  invalidEmail: boolean = false;

  constructor(private router: Router) { }

  onLogin() {
    // Código para validar la información de inicio de sesión
    if (this.email === 'admin@admin.com' && this.password === 'demo123') {
      // Si la validación es exitosa, redirige al usuario al panel de administración
      this.router.navigate(['adminPanel']);
    }
  }

  validateEmail() {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    this.invalidEmail = !emailRegex.test(this.email);
  }
  
}
