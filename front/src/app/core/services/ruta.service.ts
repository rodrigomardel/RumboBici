import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants/constants';
import { Ruta } from '../models/ruta.model';

/**
 * Servicio responsable de manejar las operaciones para obtener los datos de las categorías.
 */
@Injectable({
    providedIn: 'root',
})
export class RutaService {

  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud con el id de la ruta.
   * 
   * @param request ID de la categoría a consultar.
   * @return Un observable que emite la respuesta del backend con los datos de la categoría.
   */
  obtenerRuta(idRuta: number): Observable<Ruta> {
      const params = new HttpParams().set('idRuta', idRuta);
      return this.http.get<Ruta>(`${API_URL}usuario-ruta/` + idRuta, { params });
  }


  /**
   * Obtiene todas las rutas 
   * 
   * @return Observable con la lista de todas las rutas
   */
  obtenerRutas(): Observable<Ruta[]> {
      return this.http.get<Ruta[]>(`${API_URL}usuario-ruta/rutas`);
  }

  /**
   * Crea una nueva ruta 
   * 
   * @param rutaData Datos de la nueva ruta.
   * @return Observable con JSON correspondiente
   */
  crearRuta(rutaData: any): Observable<any> {
      return this.http.post(`${API_URL}usuario-ruta/nueva-ruta`, rutaData);
  }

  /**
   * Actualiza una ruta ya existente 
   * 
   * @param idRuta ID de la ruta a actualizar.
   * @param nuevaRuta Datos de la nueva ruta.
   * @return Observable con JSON correspondiente
   */
  actualizarRuta(idRuta: number, nuevaRuta: any): Observable<any> {
      return this.http.put(`${API_URL}usuario-ruta/actualizar-ruta/${idRuta}`, nuevaRuta);
  }


  /**
   * Elimina la ruta seleccionada 
   * 
   * @param idRuta ID de la ruta a eliminar.
   * @return Observable correspondiente
   */
  eliminarRuta(idRuta: number): Observable<any> {
      return this.http.delete(`${API_URL}usuario-ruta/eliminar-ruta/${idRuta}`);
  }

}
