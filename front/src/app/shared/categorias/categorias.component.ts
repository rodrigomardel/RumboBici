import { Component } from '@angular/core';
import { Categoria } from '../../core/models/categoria.model';
import { CategoriaService } from '../../core/services/categoria.service';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {
  /** Lista de las categorías que se van a mostrar */
  categorias: Categoria[] = [];
  /** Color correspondiente al contenedor de cada categoría */
  coloresCategoria: { [key: number]: string } = {
    1: 'rgba(45, 250, 26, 0.23)',
    2: 'rgba(255, 49, 193, 0.20)',
    3: 'rgba(255, 217, 0, 0.25)',
    4: 'rgba(255, 115, 0, 0.36)',
    5: 'rgba(27, 198, 255, 0.30)',
    6: 'rgba(15, 0, 218, 0.18)',
  };

  constructor(private categoriaService: CategoriaService) { }

  /**
   * Obtiene la lista de categorías disponibles.
   */
  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        console.error('Error al obtener las categorías:', error);
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
