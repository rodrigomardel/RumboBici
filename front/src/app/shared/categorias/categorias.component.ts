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
  /** Mensaje de error en caso de fallo al obtener las categorías */
  errorMsg: string = '';

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
        console.error('Error al obtener los usuarios:', error);
        this.errorMsg = 'Hubo un error al cargar las categorías.';
      }
    });
  }

}
