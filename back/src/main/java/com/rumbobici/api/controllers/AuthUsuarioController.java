package com.rumbobici.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.rumbobici.api.dto.UsuarioAuthRequestDto;
import com.rumbobici.api.dto.UsuarioAuthResponseDto;
import com.rumbobici.api.dto.UsuarioDatosPerfilDto;
import com.rumbobici.api.models.RutaModel;
import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.services.UsuarioAuthService;
import com.rumbobici.api.services.UsuarioRutaService;

/**
 * Gestiona la autenticación de usuarios y la obtención de sus datos de perfil.
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthUsuarioController {

    @Autowired
    private UsuarioAuthService usuarioAuthService;

    @Autowired
    private UsuarioRutaService usuarioRutaService;

    /**
     * Autentica a un usuario con sus credenciales.
     * 
     * @param request Objeto que contiene el nombre de usuario y la contraseña.
     * @return DTO con los datos de respuesta tras la autenticación (idUsuario, nombreUsuario y contraseña).
     * @throws Exception Mensaje correspondiente si ocurre un error durante el proceso de autenticación.
     */
    @PostMapping("/login")
    public UsuarioAuthResponseDto login(@RequestBody UsuarioAuthRequestDto request) throws Exception {
        return usuarioAuthService.login(request);
    }

    /**
     * Obtiene los datos del perfil de un usuario registrado.
     * 
     * @param nombreUsuario Nombre del usuario correspondiente para obtener la información del perfil.
     * @return DTO con los datos del perfil del usuario (idUsuario, nombreUsuario, contraseña, correo y fecha de nacimiento).
     * @throws Exception Mensaje correspondiente si ocurre un error al obtener los datos.
     */
    @GetMapping("/perfil")
    public UsuarioDatosPerfilDto obtenerPerfil(@RequestParam Long idUsuario) throws Exception {
        UsuarioModel usuario = usuarioAuthService
                .obtenerUsuarioPorId(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        return new UsuarioDatosPerfilDto(
                usuario.getIdUsuario(),
                usuario.getNombreUsuario(),
                usuario.getContrasena(),
                usuario.getCorreoElectronico(),
                new java.sql.Date(usuario.getFechaNacimiento().getTime()));
    }

    /**
     * Obtiene todos los usuarios registrados en el sistema.
     * 
     * @return Lista con todos los usuarios registrados.
     */
    @GetMapping("/usuarios")
    public List<UsuarioModel> obtenerTodosLosUsuarios() {
        return usuarioAuthService.obtenerTodosLosUsuarios();
    }

    /**
     * Obtiene las rutas realizadas por un usuario específico.
     * 
     * @param idUsuario el ID del usuario.
     * @return una lista de rutas realizadas por el usuario.
     */
    @GetMapping("/rutas-usuario/{idUsuario}")
    public List<RutaModel> obtenerRutasPorUsuario(@PathVariable Long idUsuario) {
        return usuarioRutaService.obtenerRutasPorUsuario(idUsuario);
    }

}
