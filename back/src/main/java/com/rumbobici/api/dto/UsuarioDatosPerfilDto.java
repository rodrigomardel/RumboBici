package com.rumbobici.api.dto;

import java.sql.Date;

public class UsuarioDatosPerfilDto {
    private Long idUsuario;
    private String nombreUsuario;
    private String contrasena;
    private String correoElectronico;
    private Date fechaNacimiento;

    public UsuarioDatosPerfilDto(Long idUsuario, String nombreUsuario, String contrasena, String correoElectronico,
            Date fechaNacimiento) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
        this.correoElectronico = correoElectronico;
        this.fechaNacimiento = fechaNacimiento;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public String getContrasena() {
        return contrasena;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

}
