package com.rumbobici.api.models;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

/**
 * Clase que representa la clave primaria compuesta para la entidad UsuarioRutaModel.
 * Combina el identificador del usuario y el identificador de la ruta.
 */
@Embeddable
public class UsuarioRutaIdModel implements Serializable {

    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "id_ruta")
    private Long idRuta;

    public UsuarioRutaIdModel() {
    }

    public UsuarioRutaIdModel(Long idUsuario, Long idRuta) {
        this.idUsuario = idUsuario;
        this.idRuta = idRuta;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }
   
    public Long getIdRuta() {
        return idRuta;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setIdRuta(Long idRuta) {
        this.idRuta = idRuta;
    }

    /**
     * Generado por JPA para comparar esta clave compuesta con otra para ver si son iguales.
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!(obj instanceof UsuarioRutaIdModel))
            return false;
        UsuarioRutaIdModel that = (UsuarioRutaIdModel) obj;
        return Objects.equals(idUsuario, that.idUsuario) &&
                Objects.equals(idRuta, that.idRuta);
    }

    /**
     * Genera JPA el hashCode correspondiente a la clave compuesta.
     */
    @Override
    public int hashCode() {
        return Objects.hash(idUsuario, idRuta);
    }
}
