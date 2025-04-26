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

  constructor(private authUserLoginService: AuthUserLoginService) { }

  /**
   * Obtiene la lista de usuarios disponibles.
   */
  ngOnInit(): void {
    this.authUserLoginService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    });
  }

}
