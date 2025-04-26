import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmacion',
  standalone: false,
  templateUrl: './modal-confirmacion.component.html',
  styleUrl: './modal-confirmacion.component.scss'
})

export class ModalConfirmacionComponent {
  /** Título de la modal */
  titulo: string;
  /** Mensaje a mostrar */
  mensaje: string;
  /** Color del título */
  tituloColor: string;

  /**
   * Inicializa el componente de una ventana model de confirmación usando el material MatDialogRef
   * 
   * @param dialogRef referencia a la modal y su comportamiento
   * @param data datos que se van a inyectar en la modal
   */
  constructor(private dialogRef: MatDialogRef<ModalConfirmacionComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.titulo = data.titulo;
    this.mensaje = data.mensaje;
    this.tituloColor = data.tituloColor; 
  }

  /**
   * Cierra la modal y devuelve "true" indicando confirmación
   */
  confirmarEliminacion(): void {
    this.dialogRef.close(true);
  }

  /**
   * Cierra la modal y devuelve "false" indicando cancelación
   */
  cancelar(): void {
    this.dialogRef.close(false);
  }

}
