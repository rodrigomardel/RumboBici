package com.rumbobici.api.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "usuario_ruta")
public class UsuarioRutaModel {

    /**
     * Clave primaria compuesta por id_usuario e id_ruta.
     */
    @EmbeddedId
    private UsuarioRutaIdModel id = new UsuarioRutaIdModel();

    @ManyToOne
    @MapsId("idUsuario")
    @JoinColumn(name = "id_usuario")
    private UsuarioModel usuario;

    @ManyToOne
    @MapsId("idRuta")
    @JoinColumn(name = "id_ruta")
    private RutaModel ruta;

    @Column(name = "fecha_realizacion", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date fechaRealizacion;

    public UsuarioRutaModel() {
    }

    public UsuarioRutaIdModel getId() {
        return id;
    }

    public UsuarioModel getUsuario() {
        return usuario;
    }

    public RutaModel getRuta() {
        return ruta;
    }

    public Date getFechaRealizacion() {
        return fechaRealizacion;
    }

    public void setId(UsuarioRutaIdModel id) {
        this.id = id;
    }

    public void setUsuario(UsuarioModel usuario) {
        this.usuario = usuario;
    }

    public void setRuta(RutaModel ruta) {
        this.ruta = ruta;
    }

    public void setFechaRealizacion(Date fechaRealizacion) {
        this.fechaRealizacion = fechaRealizacion;
    }
}
