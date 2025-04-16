import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

/**
 * Componente que gestiona la visualización dinámica de la barra de navegación.
 * Muestra u oculta  los botones "Home", "Login" y "Salir" según la ruta actual.
 */
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
  mostrarSalir: boolean = false;

  /**
   * Referencia al menú lateral, para abrir/cerrar el drawer desde el toolbar.
   * @ViewChild Accede al componente hijo una vez que se ha renderizado la vista.
   */
  @ViewChild('myDrawer') drawer!: MatDrawer;

  constructor(private router: Router) { }

  /**
   * Al inicializar, suscribe al evento `NavigationEnd` para detectar cambios en la ruta
   * y actualizar la visibilidad de los botones según la ruta activa.
   */
  ngOnInit(): void {
    // Observable para los cambios en la navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        let ruta = event.urlAfterRedirects;
        this.actualizarBotones(ruta);
        this.mostrarDrawer = ['/perfil', '/usuarios', '/rutas', '/categorias'].includes(ruta);
      });
  }

  /**
   * Actualiza la visibilidad de los botones según la ruta actual.
   * 
   * @param ruta Ruta actual de la aplicación.
   */
  actualizarBotones(ruta: string): void {
    this.mostrarLogin = ['/home'].includes(ruta);
    this.mostrarHome = ['/login', '/perfil', '/usuarios', '/rutas', '/categorias'].includes(
      ruta
    );
    this.mostrarSalir = ['/perfil', '/usuarios', '/rutas', '/categorias'].includes(ruta);
  }

  /**
   * Cierra la sesión del usuario, eliminando el nombre de usuario de `localStorage` 
   * y redirigiendo a la página principal.
   */
  logout(): void {
    this.router.navigate(['/home']);
    localStorage.removeItem('nombreUsuario');
  }
}
