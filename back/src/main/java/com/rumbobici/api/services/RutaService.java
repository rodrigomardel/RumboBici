package com.rumbobici.api.services;

import com.rumbobici.api.models.RutaModel;
import com.rumbobici.api.repositories.RutaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Servicio para la gestión de rutas. Creación, actualización, consulta y borrado de rutas.
 */
@Service
public class RutaService {

    @Autowired
    private RutaRepository rutaRepository;

    /**
     * Obtiene todas las rutas almacenadas en la base de datos.
     *
     * @return Lista de rutas
     */
    public List<RutaModel> obtenerTodasLasRutas() {
        return rutaRepository.findAll();
    }

    /**
     * Busca una ruta por su ID.
     *
     * @param idRuta ID de la ruta a buscar
     * @return Ruta encontrada envuelta en Optional, o vacía si no existe
     */
    public Optional<RutaModel> obtenerRutaPorId(Long idRuta) {
        return rutaRepository.findById(idRuta);
    }

    /**
     * Actualiza los datos de una ruta existente.
     *
     * @param idRuta    ID de la ruta a actualizar
     * @param nuevaRuta Objeto con los nuevos datos de la ruta
     * @return Ruta actualizada envuelta en Optional, o vacía si no existe
     */
    public Optional<RutaModel> actualizarRuta(Long idRuta, RutaModel nuevaRuta) {
        return rutaRepository.findById(idRuta).map(rutaExistente -> {
            rutaExistente.setNombreRuta(nuevaRuta.getNombreRuta());
            rutaExistente.setLocalidadRuta(nuevaRuta.getLocalidadRuta());
            rutaExistente.setKilometrosRuta(nuevaRuta.getKilometrosRuta());
            rutaExistente.setFechaRuta(nuevaRuta.getFechaRuta());
            rutaExistente.setIdCategoriaRuta(nuevaRuta.getIdCategoriaRuta());
            return rutaRepository.save(rutaExistente);
        });
    }

    /**
     * Guarda una nueva ruta en la base de datos.
     *
     * @param ruta Ruta a guardar
     * @return Ruta guardada
     */
    public RutaModel guardarRuta(RutaModel ruta) {
        return rutaRepository.save(ruta);
    }

    /**
     * Elimina una ruta por su ID.
     *
     * @param idRuta ID de la ruta a eliminar
     */
    public void eliminarRuta(Long idRuta) {
        rutaRepository.deleteById(idRuta);
    }

}
