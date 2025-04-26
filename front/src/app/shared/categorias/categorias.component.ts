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
    1: 'rgba(21, 236, 2, 0.10)',
    2: 'rgba(255, 49, 193, 0.10)',
    3: 'rgba(255, 224, 49, 0.15)',
    4: 'rgba(160, 149, 156, 0.15)',
    5: 'rgba(108, 202, 233, 0.16)',
    6: 'rgba(69, 57, 230, 0.15)',
  };

  constructor(private categoriaService: CategoriaService) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Realiza una llamada al servicio para obtener la lista de categorías disponibles.
   * Si la llamada es exitosa, asigna los datos. Si ocurre un error, 
   * muestra un mensaje de error en la consola y en la interfaz de usuario.
   * 
   * @returns {void} No retorna ningún valor.
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

  obtenerColorFondo(idCategoria: number): string {
    return this.coloresCategoria[idCategoria] || '#ffffff';
  }

}
