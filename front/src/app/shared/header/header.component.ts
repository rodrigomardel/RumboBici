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
  mostrarDrawer: boolean = false;
  mostrarHome: boolean = false;
  mostrarLogin: boolean = false;
  mostrarPerfil: boolean = false;
  mostrarSalir: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Observable para los cambios en la navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        let ruta = event.urlAfterRedirects;
        this.actualizarBotones(ruta);
        this.mostrarDrawer = ['/perfil', '/usuarios', '/rutas'].includes(ruta);
        console.log(ruta);
      });
  }

  // Visualización de los botones en función del enrutamiento
  actualizarBotones(ruta: string): void {
    this.mostrarLogin = ['/home'].includes(ruta);
    this.mostrarHome = ['/login', '/perfil', '/usuarios', '/rutas'].includes(
      ruta
    );
    this.mostrarPerfil = ['/perfil', '/usuarios', '/rutas'].includes(ruta);
    this.mostrarSalir = ['/perfil', '/usuarios', '/rutas'].includes(ruta);
  }

  logout(): void {
    // Aquí va la lógica de cerrar sesión si es necesario
    this.router.navigate(['/home']);
  }
}
