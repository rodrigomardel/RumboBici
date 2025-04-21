package com.rumbobici.api.services;

import com.rumbobici.api.models.RutaModel;
import com.rumbobici.api.models.UsuarioRutaIdModel;
import com.rumbobici.api.models.UsuarioRutaModel;
import com.rumbobici.api.repositories.UsuarioRutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Servicio para gestionar las relaciones entre usuarios y rutas.
 */
@Service
public class UsuarioRutaService {

    @Autowired
    private UsuarioRutaRepository usuarioRutaRepository;

    @Autowired
    private RutaService rutaService;

    /**
     * Obtener las relaciones entre un usuario concreto y sus rutas.
     * 
     * @return una lista de todas las relaciones usuario-ruta.
     */
    public List<UsuarioRutaModel> obtenerRutasPorIdUsuario(Long idUsuario) {
        return usuarioRutaRepository.findByUsuarioId(idUsuario);
    }

    /**
     * Obtener las relaciones entre una ruta concreta y sus usuarios.
     * 
     * @return una lista de todas las relaciones usuario-ruta.
     */
    public Optional<RutaModel> obtenerRutaPorId(Long idRuta) {
        return rutaService.obtenerRutaPorId(idRuta);
    }

    /**
     * Guardar una relación entre un usuario y una ruta.
     * 
     * @param usuarioRuta la relación entre usuario y ruta.
     * @return la relación guardada.
     */
    public UsuarioRutaModel guardarUsuarioRuta(UsuarioRutaModel usuarioRuta) {
        return usuarioRutaRepository.save(usuarioRuta);
    }

    /**
     * Obtener todas las relaciones entre usuarios y rutas.
     * 
     * @return una lista de todas las relaciones usuario-ruta.
     */
    public List<UsuarioRutaModel> obtenerTodasRutasUsuarios() {
        return usuarioRutaRepository.findAll();
    }

    /**
     * Obtener las rutas realizadas por un usuario dado.
     * 
     * @param idUsuario el ID del usuario.
     * @return una lista de las relaciones para ese usuario.
     */
    public List<RutaModel> obtenerRutasPorUsuario(Long idUsuario) {
        List<UsuarioRutaModel> usuarioRutas = usuarioRutaRepository.findByUsuarioId(idUsuario);
        List<RutaModel> rutas = new ArrayList<>();
        for (UsuarioRutaModel usuarioRuta : usuarioRutas) {
            rutas.add(usuarioRuta.getRuta());
        }
        return rutas;
    }

    /**
     * Eliminar una relación entre un usuario y una ruta.
     * 
     * @param idUsuario el ID del usuario.
     * @param idRuta    el ID de la ruta.
     */
    public void eliminarRelacion(Long idUsuario, Long idRuta) {
        UsuarioRutaIdModel id = new UsuarioRutaIdModel(idUsuario, idRuta);
        usuarioRutaRepository.deleteById(id);
    }
}
