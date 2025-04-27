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
   /** Color del contenedor de la ruta en función de su categoría */
   coloresCategoria: { [key: number]: string } = {
    1: 'rgba(45, 250, 26, 0.23)',
    2: 'rgba(255, 49, 193, 0.20)',
    3: 'rgba(255, 217, 0, 0.25)',
    4: 'rgba(255, 115, 0, 0.36)',
    5: 'rgba(27, 198, 255, 0.30)',
    6: 'rgba(15, 0, 218, 0.18)',
  };


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

   /**
   * Asigna a cada ruta el color correspondiente a su categoría
   * @param idCategoria ID de la categoría correspondiente
   * @returns color correspondiente o blanco en caso contrario
   */
   obtenerColorFondo(idCategoria: number): string {
    return this.coloresCategoria[idCategoria] || '#ffffff';
  }
}
