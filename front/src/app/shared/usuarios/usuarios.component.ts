import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../core/models/usuario.model';
import { AuthUserLoginService } from '../../core/services/auth-user-login.service';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  /** Lista de usuarios que se va a mostrar */
  usuarios: Usuario[] = [];
  /** ID del usuario de la sesión correspondiente */
  idSessionUser: number | null = localStorage.getItem('idUsuario') !== null ? Number(localStorage.getItem('idUsuario')) : null;

  constructor(private authUserLoginService: AuthUserLoginService) { }

  /**
   * Obtiene la lista de usuarios disponibles que no sean el usuario de la sesión actual.
   */
  ngOnInit(): void {
    this.authUserLoginService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data.filter(user => user.idUsuario != this.idSessionUser);
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    });
  }
}
