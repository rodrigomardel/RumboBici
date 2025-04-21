package com.rumbobici.api.dto;

import java.util.Date;

public class UsuarioRutaDto {
    private Long idUsuario;
    private Long idRuta;
    private Date fechaRealizacion;

    public Long getIdUsuario() {
        return idUsuario;
    }

    public Long getIdRuta() {
        return idRuta;
    }

    public Date getFechaRealizacion() {
        return fechaRealizacion;

    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setIdRuta(Long idRuta) {
        this.idRuta = idRuta;
    }

    public void setFechaRealizacion(Date fechaRealizacion) {
        this.fechaRealizacion = fechaRealizacion;
    }
}
