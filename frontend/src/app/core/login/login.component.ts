import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }


  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { nombreUsuario, contrasena } = this.loginForm.value;

    this.authService.login(nombreUsuario, contrasena).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/perfil']); // O donde quieras redirigir
        } else {
          alert('Credenciales incorrectas');
        }
      },
      error: () => {
        alert('Error al iniciar sesión');
      },
    });
  }
}
