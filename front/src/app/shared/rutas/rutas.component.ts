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


  constructor(private usuarioRutaService: UsuarioRutaService, private dialog: MatDialog, private rutaService: RutaService, private categoriaService: CategoriaService, private snackBar: MatSnackBar,) { }

  /**
   * Realiza una llamada al servicio para obtener la lista de categorías disponibles.
   * Si la llamada es exitosa, asigna los datos. Si ocurre un error, muestra un mensaje de error en la consola.
   */
  ngOnInit(): void {
    if (this.idSessionUser !== null) {
      this.obtenerRutasUsuario();
      this.cargarCategorias();
    } else {
      console.error('Error de sesión');
    }
  }

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

  abrirModalNuevaRuta(): void {
    const dialogRef = this.dialog.open(ModalRutaComponent, {
      panelClass: 'custom-modal-panel',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('Ruta creada correctamente', 'Cerrar', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.obtenerRutasUsuario();
      }
    });
  }

  editarElemento(ruta: Ruta): void {
    ruta.enEdicion = true;
  }

  cancelarEdicion(ruta: Ruta) {
    ruta.enEdicion = false;
  }

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

  guardarCambios(ruta: Ruta): void {
    this.rutaService.actualizarRuta(ruta.idRuta, ruta).subscribe({
      next: () => {
        this.snackBar.open('Cambios realizados correctamente', 'Cerrar', {
          duration: 30000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        ruta.enEdicion = false;
      },
      error: (error) => {
        this.snackBar.open('Error al realizar los cambios', 'Cerrar', {
          duration: 10000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    });
  }

  eliminarElemento(ruta: Ruta): void {
    const dialogRef = this.dialog.open(ModalConfirmacionComponent, {
      panelClass: 'custom-modal-panel',
      data: {
        titulo: 'Confirmación de Eliminación',
        mensaje: `¿Estás seguro de que deseas eliminar la ruta "${ruta.nombreRuta}"?`,
      }
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.rutaService.eliminarRuta(ruta.idRuta).subscribe({
          next: () => {
            this.snackBar.open('Ruta eliminada correctamente', 'Cerrar', {
              duration: 10000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['snackbar-success']
            });
            this.obtenerRutasUsuario();
          },
          error: (err) => {
            this.snackBar.open('Error al eliminar la ruta', 'Cerrar', {
              duration: 10000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: ['snackbar-error']
            });
          }
        });
      }
    });
  }
}


