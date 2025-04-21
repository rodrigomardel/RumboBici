import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { API_URL } from '../constants/constants';


/**
 * Interfaz para la estructura de datos enviada en el login.
 */
export interface AuthRequest {
  nombreUsuario: string;
  contrasena: string;
}

/**
 * Interfaz para la estructura de datos recibida tras un login exitoso.
 */
export interface AuthResponse {
  idUsuario: number;
  nombreUsuario: string;
  correoElectronico: string;
}

/**
 * Servicio responsable de manejar las operaciones de autenticación y perfil de usuario.
 * Se comunica con el backend a través de HTTPS para realizar login y obtener datos de perfil.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthUserLoginService {

  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud de login al backend con el nombre de usuario y la contraseña.
   * 
   * @param request Objeto con las credenciales del usuario.
   * @return Un observable que emite la respuesta del backend con datos del usuario.
   */
  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}auth/login`, request);
  }

  /**
   * Solicita los datos del perfil de un usuario dado su nombre de usuario.
   * 
   * @param nombreUsuario Nombre de usuario a consultar.
   * @return Un observable que emite los datos del perfil del usuario.
   */
  obtenerPerfil(idUsuario: number): Observable<Usuario> {
    const params = new HttpParams().set('idUsuario', idUsuario);
    return this.http.get<Usuario>(`${API_URL}auth/perfil`, { params });
  }

  /**
   * Obtiene todos los usuarios desde el backend
   * 
   * @return Observable con la lista de usuarios
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API_URL}auth/usuarios`);
  }
}
