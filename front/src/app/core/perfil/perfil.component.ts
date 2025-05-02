import { Component, OnInit } from '@angular/core';
import { AuthUserLoginService } from '../services/auth-user-login.service';
import { Usuario } from '../models/usuario.model';
import { UsuarioRutaService } from '../services/usuario-ruta.service';
import { UsuarioRuta } from '../models/usuario-ruta.model';
import { Ruta } from '../models/ruta.model';

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
  /** Modelo para acceder a los datos del usuario */
  usuario: Usuario = new Usuario();
  /** ID del usuario de la sesión correspondiente */
  idSessionUser: number | null = localStorage.getItem('idUsuario') !== null
  ? Number(localStorage.getItem('idUsuario'))
  : null;
  /** Lista de las rutas del usuario correspondiente que se van a mostrar */
  rutasUsuario: UsuarioRuta[] = [];
  /** Kilómetros totales de las rutas registradas del usuario correspondiente */
  kmTotalesRutasUsuario: number | null = null;

  constructor(private authUserLoginService: AuthUserLoginService, private usuarioRutaService: UsuarioRutaService) {
    this.obtenerRutasUsuario();
   }

  /**
   * Al inicializar, obtiene los datos del usuario logueado desde `localStorage`.
   * Si existe un nombre de usuario, realiza una solicitud para obtener los datos.
   */
  ngOnInit(): void {
    let idUsuario: any = localStorage.getItem('idUsuario')?.toString();

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

    /**
     * Obtiene las rutas correspondientes al usuario
     */
    obtenerRutasUsuario(): void {
      if (this.idSessionUser !== null) {
        this.usuarioRutaService.obtenerRutaUsuario(this.idSessionUser).subscribe({
          next: (data: UsuarioRuta[]) => {
            this.rutasUsuario = data.filter(item => item.id.idUsuario == this.idSessionUser);
            this.kmTotalesRutasUsuario = this.rutasUsuario.reduce((total, actual) => {
              return total + actual.ruta.kilometrosRuta;
            }, 0);
          },
          error: (error) => {
            console.error('Error al obtener las rutas:', error);
          }
        });
      } else {
        console.error('Error de sesión');
      }
    }
}


