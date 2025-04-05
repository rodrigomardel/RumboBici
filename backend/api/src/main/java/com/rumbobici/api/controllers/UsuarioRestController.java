package com.rumbobici.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import com.rumbobici.api.models.UsuarioModel;
import com.rumbobici.api.services.UsuarioService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UsuarioRestController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public ResponseEntity<List<UsuarioModel>> obtenerTodosLosUsuarios() {
        List<UsuarioModel> users = usuarioService.obtenerTodosLosUsuarios();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity<UsuarioModel> obtenerUsuarioPorId(@PathVariable Long id) {
        Optional<UsuarioModel> user = usuarioService.obtenerUsuarioPorId(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/usuario")
    public ResponseEntity<?> crearUsuario(@RequestBody UsuarioModel userModel) {
        // validación todos los campos son obligatorios
        Map<String, String> errores = new HashMap<>();

        if (userModel.getNombreUsuario() == null || userModel.getNombreUsuario().trim().isEmpty()) {
            errores.put("nombre", "El nombre es obligatorio");
        }
        if (userModel.getContrasena() == null || userModel.getContrasena().trim().isEmpty()) {
            errores.put("contrasena", "La contraseña es obligatoria");
        }
        if (userModel.getCorreoElectronico() == null || userModel.getCorreoElectronico().trim().isEmpty()) {
            errores.put("correoElectronico", "El correo electrónico es obligatorio");
        }
        if (userModel.getFechaNacimiento() == null) {
            errores.put("fechaNacimiento", "La fecha de nacimiento es obligatoria");
        }

        if (!errores.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errores);
        }

        UsuarioModel createdUser = usuarioService.crearUsuario(userModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @PutMapping("/usuario/{id}")
    public ResponseEntity<?> actualizarUsuario(@PathVariable Long id, @RequestBody UsuarioModel userModel) {
        // verifica si el usuario existe
        Optional<UsuarioModel> updatedUser = usuarioService.actualizarUsuario(id, userModel);
        if (updatedUser.isPresent()) {
            return ResponseEntity.ok(updatedUser.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }

    @DeleteMapping("/usuario/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        boolean isDeleted = usuarioService.eliminarUsuario(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
