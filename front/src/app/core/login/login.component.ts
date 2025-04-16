import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { AuthUserLoginService } from '../services/auth-user-login.service';

/**
 * Componente encargado del formulario de inicio de sesión.
 * Permite al usuario autenticarse y redirige al perfil si el login es exitoso.
 */
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** Formulario reactivo de login */
  loginForm: FormGroup;
  /** Modelo que representa al usuario */
  usuario: Usuario = new Usuario();
  /** Mensaje de error para mostrar en caso de fallo en el login */
  errorMsg: String | null = '';

  /**
   * Constructor del componente. Inicializa el formulario reactivo (tipo de formulario en el que la lógica de validación y estado del formulario 
   * se maneja en el componente) con los campos requeridos y sus validadores.
   * 
   * @param fb Constructor de formularios reactivos
   * @param router Servicio de enrutamiento para navegación
   * @param authUserLoginService Servicio de autenticación
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authUserLoginService: AuthUserLoginService
  ) {
    this.loginForm = this.fb.group({
      nombreUsuario: [this.usuario.nombreUsuario, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9_]+$')
      ]],
      contrasena: [this.usuario.contrasena, [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{7,16}')
      ]]
    });
  }

  /**
   * Se ejecuta al inicializar el componente.
   * Redirige al perfil si el usuario ya ha iniciado sesión anteriormente.
   */
  ngOnInit(): void {
    const yaLogueado = localStorage.getItem('nombreUsuario');
    if (yaLogueado) {
      this.router.navigate(['/perfil']);
    }
  }

  /**
   * Método que se ejecuta al enviar el formulario de login.
   * Envía las credenciales al backend y gestiona la respuesta.
   */
  login() {
    const request = {
      nombreUsuario: this.usuario.nombreUsuario,
      contrasena: this.usuario.contrasena,
    };

    this.authUserLoginService.login(request).subscribe({
      next: (response) => {
        localStorage.setItem('nombreUsuario', response.nombreUsuario);
        this.router.navigate(['/perfil']);
      },
      error: (error) => {
        console.error('Error de login', error);
        alert('** Credenciales incorrectas - Intentelo de nuevo **');
      },
    });
  }

  /**
   * Getter para facilitar el acceso a los controles del formulario desde la plantilla.
   */
  get usuarioFormulario() {
    return this.loginForm.controls;
  }

  /**
   * Método para verificar si un campo ha sido tocado y es inválido
   * Se usa para mostrar mensajes de error solo si el usuario ha tocado el campo
   */
  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
