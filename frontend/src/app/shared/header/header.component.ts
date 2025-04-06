import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  mostrarDrawer = false;
  // Configurar las rutas en las que se deben mostrar los botones
  botonesVisibles: { [key: string]: string[] } = {
    home: ['/perfil', '/usuarios', '/rutas', '/home'],
    perfil: ['/perfil', '/usuarios', '/rutas', '/home'],
    salir: ['/perfil', '/usuarios', '/rutas', '/home'],
    login: ['/home'],
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribirse a los cambios en la ruta
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.actualizarVisibilidadDrawer(event.urlAfterRedirects);
      });
  }

  mostrarBoton(boton: string): boolean {
    const currentRoute = this.router.url;
    return this.botonesVisibles[boton].includes(currentRoute);
  }

  private actualizarVisibilidadDrawer(route: string) {
    this.mostrarDrawer = route === '/perfil';
  }

  logout() {
    // Aquí puedes agregar la lógica para cerrar sesión (limpiar el localStorage, etc.)
    // Redirigir a la página de inicio después de hacer logout
    this.router.navigate(['/home']);
  }
}
