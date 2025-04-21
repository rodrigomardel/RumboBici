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
   * Método que se ejecuta al inicializar el componente.
   * Realiza una llamada al servicio para obtener la lista de usuarios disponibles.
   * Si la llamada es exitosa, asigna los datos. Si ocurre un error, 
   * muestra un mensaje de error en la consola y en la interfaz de usuario.
   * 
   * @returns {void} No retorna ningún valor.
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
