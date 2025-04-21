package com.rumbobici.api.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rumbobici.api.models.RutaModel;

@Repository
public interface RutaRepository extends JpaRepository<RutaModel, Long> {

  /**
   * Busca una ruta por su nombre.
   * 
   * @param nombreRuta Nombre de la ruta a buscar.
   * @return Un {@link Optional} que contiene el {@link RutaModel} si fue
   *         encontrado, o vacío si no existe.
   * 
   */
  Optional<RutaModel> findByNombreRuta(String nombreRuta);

  /**
   * Obtiene todas las rutas registradas en la base de datos.
   * 
   * @return Lista de las rutas disponibles.
   */
  @SuppressWarnings("null")
  List<RutaModel> findAll();

}
