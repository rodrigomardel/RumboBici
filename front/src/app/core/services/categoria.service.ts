import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Categoria } from '../models/categoria.model';

/**
 * Servicio responsable de manejar las operaciones para obtener los datos de las categorías.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  /** URL base del endpoint de autenticación del backend */
  private baseUrl = 'http://localhost:8080/ruta';
  // private baseUrl = 'https://rumbobici-back-production.up.railway.app/ruta';


  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud al backend con el nombre de categoría.
   * 
   * @param request Nombre de la categoría a consultar.
   * @return Un observable que emite la respuesta del backend con los datos de la categoría.
   */
  obtenerCategoria(nombreCategoria: string): Observable<Categoria> {
    const params = new HttpParams().set('nombreCategoria', nombreCategoria);
    return this.http.get<Categoria>(`${this.baseUrl}/categoria`, { params });
  }


  /**
   * Obtiene todas las categorías desde el backend
   * 
   * @return Observable con la lista de categorías
   */
  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`);
  }
}
