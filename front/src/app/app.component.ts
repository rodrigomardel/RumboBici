import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ModalConfirmacionComponent } from './core/modal-confirmacion/modal-confirmacion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'rumbobici';
  showScrollButton: boolean = false;
  mostrarDrawer: boolean = false;
  mostrarHome: boolean = false;
  mostrarLogin: boolean = false;
  mostrarSalir: boolean = false;


  /**
   * Referencia al menú lateral, para abrir/cerrar el drawer desde el toolbar.
   * @ViewChild Accede al componente hijo una vez que se ha renderizado la vista.
   */
  @ViewChild('myDrawer') drawer!: MatDrawer;

  /**
   * Detecta el evento de scroll de la ventana y muestra u oculta el botón según la posición actual.
   * @HostListener vincula el método al objeto global window
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollButton = window.pageYOffset > 300;
  }

  constructor(private router: Router, private dialog: MatDialog) { }

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
        this.mostrarDrawer = ['/perfil', '/usuarios', '/rutas', '/categorias'].some(path => ruta.startsWith(path));
      });
  }

  /**
   * Realiza un scroll hacia la parte superior de la página.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
  * Actualiza la visibilidad de los botones según la ruta actual.
  * @param ruta Ruta actual de la aplicación.
  */
  actualizarBotones(ruta: string): void {
    this.mostrarLogin = ['/home'].includes(ruta);
    this.mostrarHome = ['/login', '/perfil', '/usuarios', '/rutas', '/categorias']
      .some(path => ruta.startsWith(path));
    this.mostrarSalir = ['/perfil', '/usuarios', '/rutas', '/categorias']
      .some(path => ruta.startsWith(path));
  }

  /**
   * Cierra la sesión del usuario, eliminando el nombre de usuario de `localStorage` 
   * y redirigiendo a la página principal.
   */
  logout(): void {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
      panelClass: 'custom-modal-panel',
      data: {
        titulo: 'Cierre de Sesión',
        mensaje: '¿Estás seguro de que deseas salir?'
      }
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.router.navigate(['/home']);
        localStorage.removeItem('idUsuario');
      }
    });
  }
}
