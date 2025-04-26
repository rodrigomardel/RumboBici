import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../constants/constants';
import { Ruta } from '../models/ruta.model';
import { UsuarioRuta } from '../models/usuario-ruta.model';

/**
 * Servicio responsable de manejar los datos relacionados entre los usuarios y las rutas.
 */
@Injectable({
    providedIn: 'root',
})
export class UsuarioRutaService {

  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud para obtener las rutas del usuario deseado.
   * 
   * @param request ID del usuario a consultar.
   * @return Un observable que emite la respuesta del backend con los datos de la relación entre el usuario y la ruta.
   */
  obtenerRutaUsuario(idUsuario: number): Observable<UsuarioRuta[]> {
      const params = new HttpParams().set('idUsuario', idUsuario);
      return this.http.get<UsuarioRuta[]>(`${API_URL}rutas-registradas/todas/` + idUsuario, { params });
  }

  /**
   * Envía una solicitud para crear una nueva relación entre el usuario y la ruta.
   * 
   * @param request JSON de la relación correspondiente.
   * @return Respuesta correspondiente.
   */
  crearRelacionUsuarioRuta(relacionData: any): Observable<any> {
      return this.http.post(`${API_URL}rutas-registradas/nueva`, relacionData);
  }

}
