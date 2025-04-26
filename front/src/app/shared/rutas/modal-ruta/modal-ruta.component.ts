import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria.model';
import { RutaService } from '../../../core/services/ruta.service';
import { UsuarioRutaService } from '../../../core/services/usuario-ruta.service';

@Component({
  selector: 'app-modal-ruta',
  standalone: false,
  templateUrl: './modal-ruta.component.html',
  styleUrl: './modal-ruta.component.scss'
})
export class ModalRutaComponent implements OnInit {
  /** Formulario reactivo */
  rutaForm!: FormGroup;
  /** Categorias recibidas */
  categorias: Categoria[] = [];

  /**
   * Inicia una ventana modal para la creación de una nueva ruta.
   * 
   * @param fb Constructor de formularios reactivos
   * @param dialogRef referencia a la modal y su comportamiento
   * @param categoriaService datos de la categorías
   * @param rutaService datos de la ruta
   * @param usuarioRutaService datos de la relación usuario_ruta
   */
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ModalRutaComponent>, private categoriaService: CategoriaService, private rutaService: RutaService, private usuarioRutaService: UsuarioRutaService) { }

  /**
   * Inicializa el formulario reactivo (tipo de formulario en el que la lógica de validación y estado del formulario 
   * se maneja en el componente) con los campos requeridos y sus validadores.
   */
  ngOnInit(): void {
    this.rutaForm = this.fb.group({
      nombreRuta: ['', Validators.required],
      localidadRuta: ['', Validators.required],
      kilometrosRuta: [0, [Validators.required, Validators.min(1)]],
      fechaRuta: ['', Validators.required],
      nombreCategoria: ['', Validators.required]
    });
    this.cargarCategorias();
  }

  /**
   * Obtiene las categorías para mostrar en el select.
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
   * Guarda la ruta y la relación correspondiente entre la misma y el usuario con la sesion activa.
   */
  guardarRuta(): void {
    if (this.rutaForm.valid) {
      const formValue = this.rutaForm.value;
      const nuevaRuta = {
        nombreRuta: formValue.nombreRuta,
        localidadRuta: formValue.localidadRuta,
        kilometrosRuta: formValue.kilometrosRuta,
        fechaRuta: formValue.fechaRuta,
        idCategoriaRuta: {
          idCategoria: formValue.nombreCategoria
        }
      };
      // Crear la ruta
      this.rutaService.crearRuta(nuevaRuta).subscribe({
        next: (rutaCreada) => {
          const idRuta = rutaCreada.idRuta;
          const idUsuario = localStorage.getItem('idUsuario');

          const relacion = {
            idUsuario: idUsuario,
            idRuta: idRuta,
            fechaRealizacion: formValue.fechaRuta
          };

          // Crear la relación usuario-ruta
          this.usuarioRutaService.crearRelacionUsuarioRuta(relacion).subscribe({
            next: () => {
              // Cerrar la modal si ambos procesos fueron exitosos
              this.dialogRef.close(true);
            },
            error: err => {
              console.error('Error creando relación usuario-ruta:', err);
              this.dialogRef.close(false);
            }
          });
        },
        error: err => {
          console.error('Error creando la ruta:', err);
          this.dialogRef.close(false);
        }
      });
    }
  }

  /**
   * Cancelar la creación de la ruta.
   */
  cancelar(): void {
    this.dialogRef.close();
  }

}
