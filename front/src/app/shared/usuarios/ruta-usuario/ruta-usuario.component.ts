import { Component, OnInit } from '@angular/core';
import { UsuarioRuta } from '../../../core/models/usuario-ruta.model';
import { ActivatedRoute } from '@angular/router';
import { UsuarioRutaService } from '../../../core/services/usuario-ruta.service';

@Component({
  selector: 'app-ruta-usuario',
  standalone: false,
  templateUrl: './ruta-usuario.component.html',
  styleUrl: './ruta-usuario.component.scss'
})
export class RutaUsuarioComponent implements OnInit {
  /** ID de la categoría seleccionada desde la ruta */
  idUsuario!: number;
  /** Lista de rutas del usuario filtradas por la categoría */
  relacionRutasUsuario: UsuarioRuta[] = [];
  /** Color correspondiente al contenedor de cada categoría */
  coloresCategoria: { [key: number]: string } = {
     1: 'rgba(45, 250, 26, 0.23)',
     2: 'rgba(255, 49, 193, 0.20)',
     3: 'rgba(255, 217, 0, 0.25)',
     4: 'rgba(255, 115, 0, 0.36)',
     5: 'rgba(27, 198, 255, 0.30)',
     6: 'rgba(15, 0, 218, 0.18)',
   };
 
   constructor(
     private route: ActivatedRoute,
     private usuarioRutaService: UsuarioRutaService
   ) {}
 
   /**
    * Obtiene el ID del usuario desde la URL y filtra las rutas.
    */
   ngOnInit(): void {
     this.route.paramMap.subscribe(params => {
       this.idUsuario = Number(params.get('idUsuario'));
 
       if (this.idUsuario !== null) {
         this.usuarioRutaService.obtenerRutaUsuario(this.idUsuario).subscribe({
           next: (data) => {
            this.relacionRutasUsuario = data;
           },
           error: (error) => {
             console.error('Error al obtener las rutas del usuario:', error);
           }
         });
       } else {
         console.error('No se encontró ID de sesión de usuario.');
       }
     });
   }
 
  /**
   * Asigna el color correspondiente a la categoría.
   * 
   * @param idCategoria ID de la categoría
   * @returns color correspondiente o blanco en caso contrario
   */
   obtenerColorFondo(idCategoria: number): string {
     return this.coloresCategoria[idCategoria] || '#ffffff';
   }
}
