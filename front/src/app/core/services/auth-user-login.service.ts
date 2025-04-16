import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

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
  /** URL base del endpoint de autenticación del backend */
  private baseUrl = 'http://localhost:8080/auth';
  // private baseUrl = 'https://rumbobici-back-production.up.railway.app/auth';


  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud de login al backend con el nombre de usuario y la contraseña.
   * 
   * @param request Objeto con las credenciales del usuario.
   * @return Un observable que emite la respuesta del backend con datos del usuario.
   */
  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request);
  }

  /**
   * Solicita los datos del perfil de un usuario dado su nombre de usuario.
   * 
   * @param nombreUsuario Nombre de usuario a consultar.
   * @return Un observable que emite los datos del perfil del usuario.
   */
  obtenerPerfil(nombreUsuario: string): Observable<Usuario> {
    const params = new HttpParams().set('nombreUsuario', nombreUsuario);
    return this.http.get<Usuario>(`${this.baseUrl}/perfil`, { params });
  }

  /**
   * Obtiene todos los usuarios desde el backend
   * 
   * @return Observable con la lista de usuarios
   */
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }
}
