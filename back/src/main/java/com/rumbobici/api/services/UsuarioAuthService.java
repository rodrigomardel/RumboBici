package com.rumbobici.api.services;

import com.rumbobici.api.dto.UsuarioAuthRequestDto;
import com.rumbobici.api.dto.UsuarioAuthResponseDto;
import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.repositories.UsuarioRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Servicio encargado de la lógica de autenticación de usuarios y de la
 * recuperación de sus datos desde la BBDD.
 */
@Service
public class UsuarioAuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    /**
     * Autentica a un usuario verificando su nombre de usuario y contraseña.
     *
     * @param request Objeto que contiene las credenciales del usuario.
     * @return Un DTO con información del usuario autenticado (idUsuario,
     *         nombreUsuario y contraseña).
     * @throws Exception Si el usuario no es encontrado o la contraseña es
     *                   incorrecta.
     */
    public UsuarioAuthResponseDto login(UsuarioAuthRequestDto request) throws Exception {
        UsuarioModel user = usuarioRepository.findByNombreUsuario(request.getNombreUsuario())
                .orElseThrow(() -> new Exception("Usuario no encontrado"));

        if (!user.getContrasena().equals(request.getContrasena())) {
            throw new Exception("Contraseña incorrecta");
        }

        return new UsuarioAuthResponseDto(user.getIdUsuario(), user.getNombreUsuario(), user.getCorreoElectronico());
    }

    /**
     * Obtiene los datos de un usuario por su nombre de usuario.
     *
     * @param nombreUsuario Nombre de usuario a buscar.
     * @return Un {@link Optional} que contiene el usuario si fue encontrado, o
     *         vacío en caso contrario.
     * @throws Exception Si ocurre algún error durante la consulta.
     */
    public Optional<UsuarioModel> obtenerDatosUsuario(String nombreUsuario) throws Exception {
        return usuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    /**
     * Obtener un usuario por su ID
     * 
     * @return el usuario correspondiente
     */
    public Optional<UsuarioModel> obtenerUsuarioPorId(Long idUsuario) {
        return usuarioRepository.findByIdUsuario(idUsuario);
    }

    /**
     * Método para recuperar todos los usuarios de la base de datos.
     * 
     * @return Lista de usuarios disponibles.
     */
    public List<UsuarioModel> obtenerTodosLosUsuarios() {
        return usuarioRepository.findAll();
    }

}