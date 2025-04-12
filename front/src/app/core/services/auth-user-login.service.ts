import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthRequest {
  nombreUsuario: string;
  contrasena: string;
}

export interface AuthResponse {
  idUsuario: number;
  nombreUsuario: string;
  correoElectronico: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthUserLoginService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request);
  }
}
