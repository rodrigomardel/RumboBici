package com.rumbobici.api.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
/*Construcción con la anotación «.» sin necesidad de getters y setters */
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usuarios")
public class UsuarioModel {

    @Id
    //Valor generado automáticamente por la base de datos (AUTO_INCREMENT)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Column(name = "contrasena", nullable = false, length = 255)
    private String contrasena;

    @Column(name = "correo_electronico", nullable = false, unique = true, length = 100)
    private String correoElectronico;

    @Column(name = "fecha_nacimiento", nullable = false)
    // Guarda solo día mes y año
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;
}
