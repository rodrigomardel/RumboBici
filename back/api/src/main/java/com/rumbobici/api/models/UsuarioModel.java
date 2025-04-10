package com.rumbobici.api.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "usuario")
public class UsuarioModel {

    @Id
    //Valor generado automáticamente por la base de datos (AUTO_INCREMENT)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "nombre_usuario", unique = true, nullable = false, length = 100)
    private String nombreUsuario;

    @Column(name = "contrasena", nullable = false, length = 255)
    private String contrasena;

    @Column(name = "correo_electronico", nullable = false, unique = true, length = 100)
    private String correoElectronico;

    @Column(name = "fecha_nacimiento", nullable = false)
    //Guarda solo día mes y año
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;

    // @OneToMany(mappedBy = "usuario")
    // private List<UsuarioRutaModel> rutasRealizadas = new ArrayList<>();

    public Long getId() {
        return idUsuario;
    }

    public String getNombre() {
        return getNombre();
    }

    public String getEmail() {
        return getEmail();
    }

    public String getContrasena() {
        return getContrasena();
    }

    public void setId(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setNombre(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public void setEmail(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public void setContraseña(String contrasena) {
        this.contrasena = contrasena;
    }
}
