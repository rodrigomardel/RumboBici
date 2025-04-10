package com.rumbobici.api.repositories;
import com.rumbobici.api.models.UsuarioModel;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
        Optional<UsuarioModel> findByNombreUsuario(String nombreUsuario);
}
