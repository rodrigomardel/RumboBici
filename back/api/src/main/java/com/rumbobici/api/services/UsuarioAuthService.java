package com.rumbobici.api.services;

import com.rumbobici.api.dto.UsuarioAuthRequestDto;
import com.rumbobici.api.dto.UsuarioAuthResponseDto;
import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioAuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioAuthResponseDto login(UsuarioAuthRequestDto request) throws Exception {
        UsuarioModel user = usuarioRepository.findByNombreUsuario(request.getNombreUsuario())
                .orElseThrow(() -> new Exception("Usuario no encontrado"));

        if (!user.getContrasena().equals(request.getContrasena())) {
            throw new Exception("Contraseña incorrecta");
        }

        return new UsuarioAuthResponseDto(user.getIdUsuario(), user.getNombreUsuario(), user.getCorreoElectronico());
    }

}