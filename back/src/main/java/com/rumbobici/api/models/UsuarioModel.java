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

    public Long getIdUsuario() {
        return idUsuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public String getContrasena() {
        return contrasena;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
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
