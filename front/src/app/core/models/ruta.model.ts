import { Categoria } from "./categoria.model";

export class Ruta {
    idRuta: number = 0;
    nombreRuta: string = '';
    localidadRuta: string = '';
    kilometrosRuta: number = 0;
    fechaRuta: Date = new Date();
    idCategoriaRuta: Categoria = new Categoria();
}
