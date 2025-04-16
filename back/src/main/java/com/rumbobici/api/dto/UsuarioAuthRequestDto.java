package com.rumbobici.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioAuthRequestDto {

    private String nombreUsuario;
    private String contrasena;
    
}