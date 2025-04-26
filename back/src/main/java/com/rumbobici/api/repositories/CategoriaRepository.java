package com.rumbobici.api.repositories;

import com.rumbobici.api.models.CategoriaModel;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio de acceso a datos para la entidad {@link CategoriaModel}.
 * 
 * Extiende {@link JpaRepository}, lo que proporciona métodos CRUD predeterminados y permite definir consultas personalizadas.
 */
@Repository
public interface CategoriaRepository extends JpaRepository<CategoriaModel, Long> {

  /**
   * Busca una categoria por su nombre.
   * 
   * @param nombreCategoria Nombre de la categoria a buscar.
   * @return Un {@link Optional} que contiene el {@link CategoriaModel} si fue encontrado, o vacío si no existe.
   */
  Optional<CategoriaModel> findByNombreCategoria(String nombreCategoria);

  /**
   * Obtiene todas las categoria registradas en la base de datos.
   * 
   * @return Lista de las categorias disponibles.
   */
  @SuppressWarnings("null")
  List<CategoriaModel> findAll();
}
