import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ruta } from '../../core/models/ruta.model';
import { UsuarioRutaService } from '../../core/services/usuario-ruta.service';
import { UsuarioRuta } from '../../core/models/usuario-ruta.model';
import { ModalRutaComponent } from './modal-ruta/modal-ruta.component';
import { RutaService } from '../../core/services/ruta.service';
import { CategoriaService } from '../../core/services/categoria.service';
import { Categoria } from '../../core/models/categoria.model';
import { ModalConfirmacionComponent } from '../../core/modal-confirmacion/modal-confirmacion.component';

@Component({
  selector: 'app-rutas',
  standalone: false,
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.scss'
})
export class RutasComponent {

  /** Lista de las rutas del usuario correspondiente que se van a mostrar */
  rutasUsuario: Ruta[] = [];
  /** ID del usuario de la sesión correspondiente */
  idSessionUser: number | null = localStorage.getItem('idUsuario') !== null
    ? Number(localStorage.getItem('idUsuario'))
    : null;
  /** Categorias recibidas */
  categorias: Categoria[] = [];
  /** Color del contenedor de la ruta en función de su categoría */
  coloresCategoria: { [key: number]: string } = {
    1: 'rgba(45, 250, 26, 0.23)',
    2: 'rgba(255, 49, 193, 0.20)',
    3: 'rgba(255, 217, 0, 0.25)',
    4: 'rgba(255, 115, 0, 0.36)',
    5: 'rgba(27, 198, 255, 0.30)',
    6: 'rgba(15, 0, 218, 0.18)',
  };



  constructor(private usuarioRutaService: UsuarioRutaService, private dialog: MatDialog, private rutaService: RutaService, private categoriaService: CategoriaService, private snackBar: MatSnackBar,) { }

  /**
   * Obtiene la lista de categorías y rutas de usuario disponibles.
   */
  ngOnInit(): void {
    if (this.idSessionUser !== null) {
      this.obtenerRutasUsuario();
      this.cargarCategorias();
    } else {
      console.error('Error de sesión');
    }
  }

  /**
   * Obtiene las rutas correspondientes al usuario
   */
  obtenerRutasUsuario(): void {
    if (this.idSessionUser !== null) {
      this.usuarioRutaService.obtenerRutaUsuario(this.idSessionUser).subscribe({
        next: (data: UsuarioRuta[]) => {
          this.rutasUsuario = data.map(item => ({
            ...item.ruta, enEdicion: false
          }));
        },
        error: (error) => {
          console.error('Error al obtener las rutas:', error);
        }
      });
    } else {
      console.error('Error de sesión');
    }
  }

  /**
   * Abre una ventana modal para crear una nueva ruta.
   */
  abrirModalNuevaRuta(): void {
    const dialogRef = this.dialog.open(ModalRutaComponent, {
      panelClass: 'custom-modal-panel',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Ruta creada correctamente', 'Cerrar', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
        this.obtenerRutasUsuario();
      }
    });
  }

  /**
   * Modifica el estado de la ruta para su edición
   * @param ruta ruta correspondiente
   */
  editarElemento(ruta: Ruta): void {
    ruta.enEdicion = true;
  }

  /**
   * Cancela el estado de edición de la ruta
   * @param ruta ruta correspondiente
   */
  cancelarEdicion(ruta: Ruta) {
    ruta.enEdicion = false;
  }

  /**
   * Carga todas las categorías.
   */
  cargarCategorias(): void {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    });
  }

  /**
   * Guarda los cambios realizados de la ruta en edición.
   * @param ruta ruta correspondiente
   */
  guardarCambios(ruta: Ruta): void {
    this.rutaService.actualizarRuta(ruta.idRuta, ruta).subscribe({
      next: () => {
        this.snackBar.open('Cambios realizados correctamente', 'Cerrar', {
          duration: 30000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
        ruta.enEdicion = false;
        this.obtenerRutasUsuario();
      },
      error: (error) => {
        this.snackBar.open('Error al realizar los cambios', 'Cerrar', {
          duration: 10000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
      }
    });
  }

  /**
   * Elimina la ruta seleccionada.
   * @param ruta ruta correspondiente
   */
  eliminarElemento(ruta: Ruta): void {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
      panelClass: 'custom-modal-panel',
      data: {
        titulo: '¡Espere!',
        mensaje: `¿Seguro que deseas eliminar la ruta "${ruta.nombreRuta}"?`,
        tituloColor: 'red'
      }
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.rutaService.eliminarRuta(ruta.idRuta).subscribe({
          next: () => {
            this.snackBar.open('Ruta eliminada correctamente', 'Cerrar', {
              duration: 10000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: ['snackbar-success']
            });
            this.obtenerRutasUsuario();
          },
          error: (err) => {
            this.snackBar.open('Error al eliminar la ruta', 'Cerrar', {
              duration: 10000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: ['snackbar-error']
            });
          }
        });
      }
    });
  }

  /**
   * Asigna a cada ruta el color correspondiente a su categoría
   * @param idCategoria ID de la categoría correspondiente
   * @returns color correspondiente o blanco en caso contrario
   */
  obtenerColorFondo(idCategoria: number): string {
    return this.coloresCategoria[idCategoria] || '#ffffff';
  }

}


