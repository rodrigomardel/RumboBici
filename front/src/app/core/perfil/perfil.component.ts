import { Component, OnInit } from '@angular/core';
import { AuthUserLoginService } from '../services/auth-user-login.service';
import { Usuario } from '../models/usuario.model';

/**
 * Componente para mostrar el perfil del usuario logueado.
 * Obtiene los datos del usuario desde el servicio `AuthUserLoginService` usando el nombre de usuario almacenado en `localStorage`.
 */
@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private authUserLoginService: AuthUserLoginService) { }


  /**
   * Al inicializar, obtiene los datos del usuario logueado desde `localStorage`.
   * Si existe un nombre de usuario, realiza una solicitud para obtener los datos.
   */
  ngOnInit(): void {
    let idUsuario: any = '';
    idUsuario = localStorage.getItem('idUsuario')?.toString();

    if (idUsuario) {
      this.authUserLoginService.obtenerPerfil(idUsuario).subscribe({
        next: (data) => {
          this.usuario = data;
        },
        error: (err) => {
          console.error('Error al obtener el perfil del usuario:', err);
        }
      });
    } else {
      console.warn('No hay usuario logueado.');
    }
  }
}


