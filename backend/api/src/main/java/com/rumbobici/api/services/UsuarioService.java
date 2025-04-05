package com.rumbobici.api.services;

import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository userRepository;

    public List<UsuarioModel> obtenerTodosLosUsuarios() {
        return userRepository.findAll();
    }

    public Optional<UsuarioModel> obtenerUsuarioPorId(Long id) {
        return userRepository.findById(id);
    }

    public UsuarioModel crearUsuario(UsuarioModel userModel) {
        return userRepository.save(userModel);
    }

    public Optional<UsuarioModel> actualizarUsuario(Long id, UsuarioModel userModel) {
        if (userRepository.existsById(id)) {
            userModel.setIdUsuario(id);  // Aseguramos que el ID del usuario se mantenga
            return Optional.of(userRepository.save(userModel));
        }
        return Optional.empty();
    }

    public boolean eliminarUsuario(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}