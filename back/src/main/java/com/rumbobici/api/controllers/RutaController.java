package com.rumbobici.api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rumbobici.api.models.RutaModel;
import com.rumbobici.api.services.RutaService;

/**
 * Controlador REST para la gestión de rutas de usuarios.
 */
@RestController
@RequestMapping("/usuario-ruta")
@CrossOrigin(origins = "*")
public class RutaController {

    @Autowired
    private RutaService rutaService;

    /**
     * Obtiene todas las rutas registradas en el sistema.
     *
     * @return Lista de todas las rutas
     */
    @GetMapping("/rutas")
    public List<RutaModel> obtenerTodasLasRutas() {
        return rutaService.obtenerTodasLasRutas();
    }

    /**
     * Busca una ruta por su ID.
     *
     * @param idRuta ID de la ruta a consultar
     * @return Ruta correspondiente al ID si existe
     */
    @GetMapping("/{idRuta}")
    public Optional<RutaModel> obtenerRutaPorId(@PathVariable Long idRuta) {
        return rutaService.obtenerRutaPorId(idRuta);
    }

    /**
     * Actualiza una ruta existente por su ID.
     *
     * @param idRuta          ID de la ruta a actualizar
     * @param rutaActualizada Objeto con los nuevos datos de la ruta
     * @return ResponseEntity con la ruta actualizada o not found si no existe
     */
    @PutMapping("/actualizar-ruta/{idRuta}")
    public ResponseEntity<RutaModel> actualizarRuta(@PathVariable Long idRuta, @RequestBody RutaModel rutaActualizada) {
        return rutaService.actualizarRuta(idRuta, rutaActualizada)
                .map(ruta -> ResponseEntity.ok().body(ruta))
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Crea una nueva ruta.
     *
     * @param ruta Ruta a guardar
     * @return Ruta guardada con su ID generado
     */
    @PostMapping("/nueva-ruta")
    public RutaModel crearRuta(@RequestBody RutaModel ruta) {
        return rutaService.guardarRuta(ruta);
    }

    /**
     * Elimina una ruta por su ID.
     *
     * @param idRuta ID de la ruta a eliminar
     */
    @DeleteMapping("eliminar-ruta/{idRuta}")
    public void eliminarRuta(@PathVariable Long idRuta) {
        rutaService.eliminarRuta(idRuta);
    }

}
