import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mostrarDrawer = false;
  mostrarHome = false;
  mostrarLogin = false;
  mostrarPerfil = false;
  mostrarSalir = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const ruta = event.urlAfterRedirects;
        this.actualizarBotones(ruta);
        this.mostrarDrawer = ['/perfil', '/usuarios', '/rutas'].includes(ruta);
      });
  }

  actualizarBotones(ruta: string): void {
    this.mostrarHome = ['/perfil', '/usuarios', '/rutas', '/login'].includes(
      ruta
    );
    this.mostrarLogin = ['/home'].includes(ruta);
    this.mostrarPerfil = ['/perfil', '/usuarios', '/rutas'].includes(ruta);
    this.mostrarSalir = ['/perfil', '/usuarios', '/rutas'].includes(ruta);
  }

  logout(): void {
    // Aquí va la lógica de cerrar sesión si es necesario
    this.router.navigate(['/home']);
  }
}
