package com.rumbobici.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.rumbobici.api.dto.UsuarioAuthRequestDto;
import com.rumbobici.api.dto.UsuarioAuthResponseDto;
import com.rumbobici.api.dto.UsuarioDatosPerfilDto;
import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.services.UsuarioAuthService;

/**
 * Controlador REST encargado de gestionar la autenticación de usuarios
 * y la obtención de sus datos de perfil.
 * 
 * Los endpoints expuestos están bajo el path "/auth" y aceptan solicitudes
 * desde cualquier origen (CORS habilitado).
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthUsuarioRestController {

    @Autowired
    private UsuarioAuthService usuarioAuthService;

    /**
     * Endpoint para autenticar a un usuario con sus credenciales.
     * 
     * @param request Objeto que contiene el nombre de usuario y la contraseña.
     * @return Un DTO con los datos de respuesta tras la autenticación (idUsuario,
     *         nombreUsuario y contraseña).
     * @throws Exception Mensaje correspondiente si ocurre un error durante el
     *                   proceso de autenticación.
     */
    @PostMapping("/login")
    public UsuarioAuthResponseDto login(@RequestBody UsuarioAuthRequestDto request) throws Exception {
        return usuarioAuthService.login(request);
    }

    /**
     * Endpoint para obtener los datos del perfil de un usuario registrado.
     * 
     * @param nombreUsuario Nombre del usuario correspondiente para obtener la
     *                      información del perfil.
     * @return Un DTO con los datos del perfil del usuario (idUsuario,
     *         nombreUsuario, contraseña, correo y fecha de nacimiento).
     * @throws Exception Mensaje correspondiente si ocurre un error al obtener los
     *                   datos.
     */
    @GetMapping("/perfil")
    public UsuarioDatosPerfilDto obtenerPerfil(@RequestParam String nombreUsuario) throws Exception {
        UsuarioModel usuario = usuarioAuthService
                .obtenerDatosUsuario(nombreUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        return new UsuarioDatosPerfilDto(
                usuario.getIdUsuario(),
                usuario.getNombreUsuario(),
                usuario.getContrasena(),
                usuario.getCorreoElectronico(),
                new java.sql.Date(usuario.getFechaNacimiento().getTime()));
    }

    /**
     * Endpoint para obtener todos los usuarios registrados en el sistema.
     * Este método utiliza el servicio `UsuarioAuthService` para recuperar la lista
     * completa
     * de usuarios desde la base de datos.
     * 
     * @return Lista con todos los usuarios registrados.
     */
    @GetMapping("/usuarios")
    public List<UsuarioModel> obtenerTodosLosUsuarios() {
        return usuarioAuthService.obtenerTodosLosUsuarios();
    }

}
