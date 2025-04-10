package com.rumbobici.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;

import com.rumbobici.api.dto.UsuarioAuthRequestDto;
import com.rumbobici.api.dto.UsuarioAuthResponseDto;
import com.rumbobici.api.services.UsuarioAuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // Acepta peticiones del front
public class AuthUsuarioRestController {

    @Autowired
    private UsuarioAuthService usuarioAuthService;

    @PostMapping("/login")
    public UsuarioAuthResponseDto login(@RequestBody UsuarioAuthRequestDto request) throws Exception {
        return usuarioAuthService.login(request);
    }
}
