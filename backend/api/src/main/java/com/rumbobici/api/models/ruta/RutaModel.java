package com.rumbobici.api.models.ruta;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
//Construcción con la anotación «.» sin necesidad de getters y setters
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rutas")
public class RutaModel {

    @Id
    //Valor generado automáticamente por la base de datos (AUTO_INCREMENT)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ruta")
    private Long idRuta;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    @Column(name = "localidad", nullable = false, length = 100)
    private String localidad;

    @Column(name = "kilometros", nullable = false, length = 6)
    private int kilometros;

    @Column(name = "fecha_inicio", nullable = false)
    // Guarda solo día mes y año
    @Temporal(TemporalType.DATE)
    private Date fechaInicio;

    @Column(name = "fecha_fin", nullable = false)
    // Guarda solo día mes y año
    @Temporal(TemporalType.DATE)
    private Date fechaFin;

    @Column(name = "plazas", nullable = true, length = 2)
    private int plazas;

    @Column(name = "precio", nullable = false, length = 4)
    private int precio;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private CategoriaRutaModel categoria;
    
}
