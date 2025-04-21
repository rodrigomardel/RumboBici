package com.rumbobici.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "ruta")
public class RutaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ruta")
    private Long idRuta;

    @Column(name = "nombre_ruta", nullable = false, length = 100)
    private String nombreRuta;

    @Column(name = "localidad_ruta", nullable = false, length = 100)
    private String localidadRuta;

    @Column(name = "kilometros_ruta", nullable = false, length = 6)
    private Long kilometrosRuta;

    @Column(name = "fecha_ruta", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date fechaRuta;

    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false)
    private CategoriaModel idCategoriaRuta;

    public Long getIdRuta() {
        return idRuta;
    }

    public String getNombreRuta() {
        return nombreRuta;
    }

    public String getLocalidadRuta() {
        return localidadRuta;
    }

    public Long getKilometrosRuta() {
        return kilometrosRuta;
    }

    public Date getFechaRuta() {
        return fechaRuta;
    }

    public CategoriaModel getIdCategoriaRuta() {
        return idCategoriaRuta;
    }

    public void setIdRuta(Long idRuta) {
        this.idRuta = idRuta;
    }

    public void setNombreRuta(String nombreRuta) {
        this.nombreRuta = nombreRuta;
    }

    public void setLocalidadRuta(String localidadRuta) {
        this.localidadRuta = localidadRuta;
    }

    public void setKilometrosRuta(Long kilometrosRuta) {
        this.kilometrosRuta = kilometrosRuta;
    }

    public void setFechaRuta(Date fechaRuta) {
        this.fechaRuta = fechaRuta;
    }

    public void setIdCategoriaRuta(CategoriaModel idCategoriaRuta) {
        this.idCategoriaRuta = idCategoriaRuta;
    }
}
