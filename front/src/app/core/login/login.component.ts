import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model'; // Importa el modelo Usuario
import { AuthUserLoginService } from '../services/auth-user-login.service';  // Asegúrate de que este servicio esté correcto

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authUserLoginService: AuthUserLoginService
  ) {
    // Crear el formulario reactivo
    this.loginForm = this.fb.group({
      nombreUsuario: [this.usuario.nombreUsuario, Validators.required],
      contrasena: [this.usuario.contrasena, Validators.required],
    });
  }

  login() {
    const request = {
      nombreUsuario: this.usuario.nombreUsuario,
      contrasena: this.usuario.contrasena,
    };

    this.authUserLoginService.login(request).subscribe({
      next: (response) => {
        console.log('Login exitoso', response);
        this.router.navigate(['/perfil']);
      },
      error: (error) => {
        console.error('Error de login', error);
      },
    });
  }

  // Método para actualizar las propiedades del objeto Usuario al cambiar el formulario
  get usuarioFormulario() {
    return this.loginForm.controls;
  }
}
