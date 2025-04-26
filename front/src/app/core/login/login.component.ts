import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { AuthUserLoginService } from '../services/auth-user-login.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmacionComponent } from '../modal-confirmacion/modal-confirmacion.component';

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
   * Inicializa el formulario reactivo (tipo de formulario en el que la lógica de validación y estado del formulario 
   * se maneja en el componente) con los campos requeridos y sus validadores.
   * 
   * @param fb Constructor de formularios reactivos
   * @param router Servicio de enrutamiento para navegación
   * @param authUserLoginService Servicio de autenticación
   */
  constructor( private fb: FormBuilder, private router: Router, private authUserLoginService: AuthUserLoginService, private dialog: MatDialog) {
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
   * Redirige al perfil si el usuario ya ha iniciado sesión anteriormente.
   */
  ngOnInit(): void {
    const yaLogueado = localStorage.getItem('idUsuario');
    if (yaLogueado) {
      this.router.navigate(['/perfil']);
    }
  }

  /**
   * Envía las credenciales al servicio y gestiona la respuesta.
   */
  login(): void {
    const request = {
      idUsuario: this.usuario.idUsuario,
      nombreUsuario: this.usuario.nombreUsuario,
      contrasena: this.usuario.contrasena,
    };

    this.authUserLoginService.login(request).subscribe({
      next: (response) => {
        localStorage.setItem('idUsuario', response.idUsuario.toString());
        this.router.navigate(['/perfil']);
      },
      error: (error) => {
        console.error('Error de login', error);
        const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
          panelClass: 'custom-modal-panel',
          data: {
            titulo: 'Credenciales incorrectas ',
            mensaje: 'Intentelo de nuevo',
            tituloColor: 'red'
          }
        });
    
        dialogRef.afterClosed().subscribe((resultado: boolean) => {
          if (resultado) {
            this.router.navigate(['/login']);
          }
        });
      },
    });
  }
}
