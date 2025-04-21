import { Ruta } from './ruta.model';
import { Usuario } from './usuario.model';

export class UsuarioRuta {
    id!: { idUsuario: number; idRuta: number };
    usuario!: Usuario;
    ruta!: Ruta;
    fechaRealizacion!: Date;
}
