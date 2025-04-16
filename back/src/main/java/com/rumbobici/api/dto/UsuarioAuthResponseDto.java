package com.rumbobici.api.dto;

public class UsuarioAuthResponseDto {
    public Long idUsuario;
    public String nombreUsuario;
    public String correoElectronico;

    public UsuarioAuthResponseDto(Long idUsuario, String nombreUsuario, String correoElectronico) {
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        this.correoElectronico = correoElectronico;
    }
    
}
