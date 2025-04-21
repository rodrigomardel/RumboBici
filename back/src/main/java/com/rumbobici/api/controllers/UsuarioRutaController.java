package com.rumbobici.api.controllers;

import com.rumbobici.api.dto.UsuarioRutaDto;
import com.rumbobici.api.models.RutaModel;
import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.models.UsuarioRutaIdModel;
import com.rumbobici.api.models.UsuarioRutaModel;
import com.rumbobici.api.services.UsuarioAuthService;
import com.rumbobici.api.services.UsuarioRutaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador para gestionar las relaciones entre usuarios y rutas.
 */
@RestController
@RequestMapping("/rutas-registradas")
@CrossOrigin(origins = "*")
public class UsuarioRutaController {

    @Autowired
    private UsuarioRutaService usuarioRutaService;

    @Autowired
    private UsuarioAuthService usuarioAuthService;

    /**
     * Obtener todas las relaciones de un usuario concreto.
     * 
     * @return una lista de relaciones usuario-ruta.
     */
    @GetMapping("/todas/{idUsuario}")
    public List<UsuarioRutaModel> obtenerRutasPorIdUsuario(@PathVariable Long idUsuario) {
        return usuarioRutaService.obtenerRutasPorIdUsuario(idUsuario);
    }

    /**
     * Obtener todas las relaciones usuario-ruta.
     * 
     * @return una lista de relaciones usuario-ruta.
     */
    @GetMapping("/todas")
    public List<UsuarioRutaModel> obtenerTodasRutasUsuarios() {
        return usuarioRutaService.obtenerTodasRutasUsuarios();
    }

    /**
     * Crear una nueva relación entre un usuario y una ruta.
     *
     * @param dto la relación a crear.
     * @return la relación creada.
     */
    @PostMapping("/nueva")
    public UsuarioRutaModel crearRelacion(@RequestBody UsuarioRutaDto dto) {
        UsuarioRutaModel usuarioRuta = new UsuarioRutaModel();

        // Crear el ID compuesto
        UsuarioRutaIdModel id = new UsuarioRutaIdModel(dto.getIdUsuario(), dto.getIdRuta().longValue());
        usuarioRuta.setId(id);

        // Obtener entidades relacionadas
        UsuarioModel usuario = usuarioAuthService.obtenerUsuarioPorId(dto.getIdUsuario())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        RutaModel ruta = usuarioRutaService.obtenerRutaPorId(dto.getIdRuta().longValue())
                .orElseThrow(() -> new RuntimeException("Ruta no encontrada"));

        // Setear los valores en el modelo
        usuarioRuta.setUsuario(usuario);
        usuarioRuta.setRuta(ruta);
        usuarioRuta.setFechaRealizacion(new java.sql.Date(dto.getFechaRealizacion().getTime()));

        return usuarioRutaService.guardarUsuarioRuta(usuarioRuta);
    }

    /**
     * Eliminar una relación entre un usuario y una ruta.
     * 
     * @param idUsuario el ID del usuario.
     * @param idRuta    el ID de la ruta.
     */
    @DeleteMapping("/eliminar/{idUsuario}/{idRuta}")
    public void eliminarRelacion(@PathVariable Long idUsuario, @PathVariable Long idRuta) {
        usuarioRutaService.eliminarRelacion(idUsuario, idRuta);
    }
}
