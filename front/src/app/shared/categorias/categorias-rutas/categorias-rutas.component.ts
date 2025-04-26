import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioRuta } from '../../../core/models/usuario-ruta.model';
import { UsuarioRutaService } from '../../../core/services/usuario-ruta.service';

@Component({
  selector: 'app-categorias-rutas',
  standalone: false,
  templateUrl: './categorias-rutas.component.html',
  styleUrl: './categorias-rutas.component.scss'
})
export class CategoriasRutasComponent implements OnInit {
  /** Nombre categoria seleccionada */
  nombreCategoria: string = '';
  /** Categoria seleccionada */
  idCategoria!: number;
  /** Lista de la relación usuario-rutas correspondientes que se van a mostrar */
  relacionRutasUsuario: UsuarioRuta[] = [];
  /** ID del usuario de la sesión correspondiente transformado a Number para obtener sus rutas de la tabla usuario_ruta  */
  idSessionUser: number | null = localStorage.getItem('idUsuario') !== null ? Number(localStorage.getItem('idUsuario')) : null;

  constructor(private route: ActivatedRoute, private usuarioRutaService: UsuarioRutaService) { }

  /**
   * Obtiene las rutas del usuario correspondiente.
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idCategoria = Number(params.get('idCategoria'));

      if (this.idSessionUser !== null) {
        this.usuarioRutaService.obtenerRutaUsuario(this.idSessionUser).subscribe({
          next: (data) => {
            this.relacionRutasUsuario = data.filter(item => item.ruta.idCategoriaRuta.idCategoria === this.idCategoria);
          },
          error: (error) => {
            console.error('Error al obtener las rutas:', error);
          }
        });
      } else {
        console.error('Error de sesión');
      }
    });
  }
}
