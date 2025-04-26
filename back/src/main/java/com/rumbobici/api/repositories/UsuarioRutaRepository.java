package com.rumbobici.api.repositories;

import com.rumbobici.api.models.UsuarioRutaModel;
import com.rumbobici.api.models.UsuarioRutaIdModel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio para gestionar la relación entre usuarios y rutas de las entidades {@link UsuarioRutaModel} y {@link UsuarioRutaIdModel} .
 */
@Repository
public interface UsuarioRutaRepository extends JpaRepository<UsuarioRutaModel, UsuarioRutaIdModel> {

    /**
     * Busca las relaciones entre usuario y ruta por el ID de usuario.
     * 
     * @param idUsuario ID de usuario a buscar.
     * @return Un {@link List} que contiene el {@link UsuarioRutaModel} si fue encontrado, o vacío si no existe.
     */
    List<UsuarioRutaModel> findByUsuarioId(Long idUsuario);

    /**
     * Busca las relaciones entre usuario y ruta por el ID de ruta.
     * 
     * @param idRuta ID de ruta a buscar.
     * @return Una lista de {@link UsuarioRutaModel} si fue encontrado, o vacío si no existe.
     */
    List<UsuarioRutaModel> findByRuta_IdRuta(Long idRuta);
}