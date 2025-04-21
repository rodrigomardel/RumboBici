package com.rumbobici.api.repositories;

import com.rumbobici.api.models.UsuarioModel;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio de acceso a datos para la entidad {@link UsuarioModel}.
 * 
 * Esta interfaz extiende {@link JpaRepository}, lo que proporciona métodos CRUD
 * predeterminados y permite definir consultas personalizadas.
 */
@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

  /**
   * Busca un usuario por su ID de usuario.
   * 
   * @param idUsuario ID del usuario a buscar.
   * @return Un {@link Optional} que contiene el {@link UsuarioModel} si fue
   *         encontrado, o vacío si no existe.
   * 
   */
  Optional<UsuarioModel> findByIdUsuario(Long idUsuario);

  /**
   * Busca un usuario por su nombre de usuario.
   * 
   * @param nombreUsuario Nombre de usuario a buscar.
   * @return Un {@link Optional} que contiene el {@link UsuarioModel} si fue
   *         encontrado, o vacío si no existe.
   * 
   */
  Optional<UsuarioModel> findByNombreUsuario(String nombreUsuario);

  /**
   * Obtiene todos los usuarios registrados en la base de datos.
   * 
   * @return Lista de usuarios disponibles.
   */
  @SuppressWarnings("null")
  List<UsuarioModel> findAll();
}
