import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
import { API_URL } from '../constants/constants';

/**
 * Servicio responsable de manejar las operaciones para obtener los datos de las categorías.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud al backend con el nombre de categoría.
   * 
   * @param request Nombre de la categoría a consultar.
   * @return Un observable que emite la respuesta del backend con los datos de la categoría.
   */
  obtenerCategoria(nombreCategoria: string): Observable<Categoria> {
    const params = new HttpParams().set('nombreCategoria', nombreCategoria);
    return this.http.get<Categoria>(`${API_URL}ruta/categoria`, { params });
  }


  /**
   * Obtiene todas las categorías desde el backend.
   * 
   * @return Observable con la lista de categorías.
   */
  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${API_URL}ruta/categorias`);
  }
}
