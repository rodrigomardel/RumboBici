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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usuario_ruta")
public class UsuarioRutaModel {
    
    //Clave primaria compuesta 
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
}
    

