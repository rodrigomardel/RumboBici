package com.rumbobici.api.repositories;
import com.rumbobici.api.models.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
    // Puedes agregar métodos adicionales si es necesario, como buscar por correo electrónico, etc.
    // Ejemplo: Optional<UserModel> findByCorreoElectronico(String correoElectronico);
}
