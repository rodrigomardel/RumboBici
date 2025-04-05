package com.rumbobici.api.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioRutaIdModel implements Serializable {

    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "id_ruta")
    private Long idRuta;
}